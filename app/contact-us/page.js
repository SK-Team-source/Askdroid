import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'Contact us - Askdroid',
  description: 'Head Office: Woking, UK. Development Office: Pondicherry.',
  alternates: { canonical: '/contact-us' },
};

const infoItems = [
  { icon: 'pin', title: 'Address', body: 'Head Office: Woking, UK — Development Office: Pondicherry' },
  { icon: 'phone', title: 'Phone', body: '+44 (0) 1483 870170', href: 'tel:+4401483870170' },
  { icon: 'mail', title: 'Email', body: 'info@askdroid.com', href: 'mailto:info@askdroid.com' },
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero label="Contact us" title="Contact Information" visual="contact-us" />

      <section className="contact-detail-section">
        <div className="container">
          <div className="contact-info-panel">
            <div className="contact-info-list">
              {infoItems.map((item) => (
                <div className="contact-info-item" key={item.title}>
                  <div className="contact-info-item__icon">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <h4>{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-link">
                      {item.body}
                    </a>
                  ) : (
                    <p>{item.body}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-top contact-ask-section">
        <div className="container">
          <div className="contact-ask-layout">
            <div className="contact-ask-copy">
              <span className="eyebrow">Ask here</span>
              <h2>Find your answer? Ask here</h2>
              <p>
                Send us a note about a listing correction, a partnership idea, or anything else — our team
                usually replies within one business day.
              </p>
            </div>
            <div className="contact-ask-form-shell">
              <ContactForm variant="simple" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
