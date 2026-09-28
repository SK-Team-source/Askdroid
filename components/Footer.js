import Link from 'next/link';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <img src="/images/logo.png" alt="ASKDROID logo" className="logo-image" />
          </Link>
          <p>
            The AI and Robotics directory connecting engineers, investors and innovators with the companies
            shaping intelligent automation.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Askdroid on X">
              <Icon name="x" size={16} />
            </a>
            <a href="#" aria-label="Askdroid on Facebook">
              <Icon name="facebook" size={16} />
            </a>
            <a href="#" aria-label="Askdroid on LinkedIn">
              <Icon name="linkedin" size={16} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/contact-us">Contact us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Directory</h4>
          <ul>
            <li><Link href="/ai">AI</Link></li>
            <li><Link href="/robotics">Robotics</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Media</h4>
          <ul>
            <li><Link href="/podcasts">Podcasts</Link></li>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright &copy; {new Date().getFullYear()}, Askdroid. All Rights Reserved</span>
        <span>Site build by Salaro</span>
      </div>
    </footer>
  );
}
