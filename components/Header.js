'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const NAV_LINKS = [
  {
    href: '/',
    label: 'Home',
    children: [
      { href: '/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact us' },
    ],
  },
  { href: '/ai', label: 'AI' },
  { href: '/robotics', label: 'Robotics' },
  { href: '/podcasts', label: 'Podcasts' },
  { href: '/news', label: 'News' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('askdroid-theme', 'dark');
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="logo" aria-label="Askdroid home">
          <img src="/images/logo.png" alt="ASKDROID logo" className="logo-image" />
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div className="nav-has-children" key={link.href} tabIndex={-1}>
                <Link href={link.href}>{link.label}</Link>
                <div className="nav-dropdown">
                  {link.children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="header-cta">
          <Link href="/contact-us" className="btn btn-primary">
            Get in touch
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div className={`mobile-nav container ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <div key={link.href}>
            <Link href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
            {link.children && (
              <div className="mobile-subnav">
                {link.children.map((child) => (
                  <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link href="/contact-us" className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => setOpen(false)}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
