import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE = "Ryan Puddy — Web3 Architect & AI Systems Builder";

const ensureTag = (selector: string, create: () => HTMLElement) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const setMeta = (attr: "name" | "property", key: string, value: string) => {
  const el = ensureTag(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute(attr, key);
    return m;
  });
  el.setAttribute("content", value);
};

export const SEO = ({
  title,
  description,
  canonical,
  image = "/og-cover.jpg",
  type = "website",
  jsonLd,
}: Props) => {
  useEffect(() => {
    const fullTitle = title.includes("Ryan Puddy") ? title : `${title} · ${SITE}`;
    document.title = fullTitle.length > 60 ? title : fullTitle;

    setMeta("name", "description", description.slice(0, 158));

    const url = canonical ?? window.location.origin + window.location.pathname;
    const link = ensureTag('link[rel="canonical"]', () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    }) as HTMLLinkElement;
    link.href = url;

    const absImage = image.startsWith("http") ? image : window.location.origin + image;

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description.slice(0, 200));
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", absImage);
    setMeta("property", "og:site_name", "Ryan Puddy");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description.slice(0, 200));
    setMeta("name", "twitter:image", absImage);

    // JSON-LD
    const jsonLdId = "seo-jsonld";
    const existing = document.getElementById(jsonLdId);
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = jsonLdId;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, image, type, jsonLd]);

  return null;
};
