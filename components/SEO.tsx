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
      <meta name="generator" content="Patel & Vaghasiya Website" />

      {keywords && <meta name="keywords" content={keywords} />}

      <link rel="canonical" href={canonical || url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {/* explicitly include site name so platforms don’t show Next/Vercel */}
      <meta property="og:site_name" content="Patel & Vaghasiya" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
