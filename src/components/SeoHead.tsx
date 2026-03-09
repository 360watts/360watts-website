import { Helmet } from "react-helmet-async";
import { fullUrl, DEFAULT_OG_IMAGE } from "../lib/seo";

export interface SeoHeadProps {
  title: string;
  description: string;
  /** Path without leading slash, e.g. "" for home, "solutions" for /solutions */
  path?: string;
  ogImage?: string;
}

export function SeoHead({ title, description, path = "", ogImage = DEFAULT_OG_IMAGE }: SeoHeadProps) {
  const url = fullUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="360watts" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
