import { useCallback, useEffect, useState } from "react";

export type ProbeState = "unknown" | "checking" | "reachable" | "unreachable";

export type ProbeResult = {
  url: string;
  state: ProbeState;
  checkedAt: number | null;
  durationMs: number | null;
};

const TIMEOUT_MS = 6000;

// no-cors HEAD/GET — we cannot read the response, but a successful resolve
// means the host responded; an error / timeout means it did not.
async function pingOne(url: string): Promise<Omit<ProbeResult, "url">> {
  const start = performance.now();
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      redirect: "follow",
      signal: ctrl.signal,
    });
    clearTimeout(timer);
    return {
      state: "reachable",
      checkedAt: Date.now(),
      durationMs: Math.round(performance.now() - start),
    };
  } catch {
    clearTimeout(timer);
    return {
      state: "unreachable",
      checkedAt: Date.now(),
      durationMs: Math.round(performance.now() - start),
    };
  }
}

export function useLiveStatus(urls: (string | null | undefined)[]) {
  const cleaned = urls.filter((u): u is string => Boolean(u));

  const [results, setResults] = useState<Record<string, ProbeResult>>(() =>
    Object.fromEntries(
      cleaned.map((u) => [u, { url: u, state: "unknown", checkedAt: null, durationMs: null }]),
    ),
  );
  const [running, setRunning] = useState(false);

  const refresh = useCallback(async () => {
    if (cleaned.length === 0) return;
    setRunning(true);
    setResults((prev) => {
      const next = { ...prev };
      for (const u of cleaned) next[u] = { ...(next[u] ?? { url: u, checkedAt: null, durationMs: null }), state: "checking" };
      return next;
    });
    // Run with limited concurrency to stay friendly to the browser.
    const concurrency = 6;
    let i = 0;
    async function worker() {
      while (i < cleaned.length) {
        const idx = i++;
        const u = cleaned[idx];
        const r = await pingOne(u);
        setResults((prev) => ({ ...prev, [u]: { url: u, ...r } }));
      }
    }
    await Promise.all(Array.from({ length: Math.min(concurrency, cleaned.length) }, worker));
    setRunning(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleaned.join("|")]);

  useEffect(() => {
    // Initial automatic probe on mount.
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cleaned.join("|")]);

  return { results, running, refresh };
}
