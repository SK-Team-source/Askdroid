'use client';

import Link from 'next/link';
import { useCallback } from 'react';

export default function PageHero({ label, title, description, visual }) {
  const cleanBanner = useCallback((event) => {
    const frameDocument = event.currentTarget.contentDocument;
    if (!frameDocument) return;

    const selector = visual === 'robotics' ? '.rb-title' : visual === 'ai' ? '.ai-title' : visual === 'podcasts' ? '.podcast-title' : visual === 'news' ? '.news-title' : visual === 'blog' ? '.blog-title' : visual === 'about-us' ? '.about-title' : '.contact-title';
    const style = frameDocument.createElement('style');
    style.textContent = `${selector} { display: none !important; }`;
    frameDocument.head.appendChild(style);
    frameDocument.querySelector(selector)?.remove();

    const observer = new MutationObserver(() => {
      frameDocument.querySelector(selector)?.remove();
    });
    observer.observe(frameDocument.documentElement, { childList: true, subtree: true });
  }, [visual]);

  const bannerSrc =
    visual === 'robotics'
      ? '/Robotics-Banner-standalone.html'
      : visual === 'ai'
        ? '/AI-Banner-standalone.html'
        : visual === 'podcasts'
          ? '/podcast-wave-hero.html'
          : visual === 'news'
            ? '/live-news-network-hero.html'
            : visual === 'blog'
              ? '/support-portal-hero.html'
              : visual === 'about-us'
                ? '/support-portal-hero.html'
                : visual === 'contact-us'
                  ? '/contact-page-communication-hub.html'
                  : null;

  return (
    <section className={`page-hero ${visual ? `page-hero--${visual}` : ''}`}>
      {bannerSrc && (
        <div className="page-hero__visual" aria-hidden="true">
          <iframe
            src={bannerSrc}
            title={`${label} banner`}
            loading="eager"
            tabIndex="-1"
            onLoad={cleanBanner}
          />
        </div>
      )}
      <div className="container">
        <p className="breadcrumb">
          <Link href="/">Home</Link> / {label}
        </p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
