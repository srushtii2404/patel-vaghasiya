"use client";

import Head from "next/head";
import React from "react";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
  keywords?: string;
}

export default function SEO({
  title,
  description,
  url,
  image,
  canonical,
  jsonLd,
  keywords,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={canonical || url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
