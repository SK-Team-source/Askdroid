import Icon from './Icon';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid contact-grid--premium">
          <div className="contact-copy-panel">
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s get in touch with us</h2>
            <p>
              At the intersection of innovation and technology, we are pioneers crafting a landscape for the
              digital age.
            </p>
          </div>

          <div className="contact-form-shell">
            <ContactForm variant="full" />
          </div>

          <div className="contact-info-panel" style={{ display: 'none' }}>
            <h3>Contact Us</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+4401483870170">+44 (0) 1483 870170</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@askdroid.com">info@askdroid.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-item__icon">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <h4>Offices</h4>
                  <p>Head Office: Woking, UK</p>
                  <p style={{ marginTop: 4 }}>Development Office: Pondicherry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
