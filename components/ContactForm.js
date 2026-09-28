'use client';

import { useState } from 'react';

export default function ContactForm({ variant = 'full' }) {
  const [status, setStatus] = useState('idle');
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.firstName || !values.email || !values.message) {
      setStatus('error');
      return;
    }
    // This project ships as a static frontend. Wire this handler up to your
    // own API route (e.g. app/api/contact/route.js) or a form backend such
    // as Formspree / Resend to actually deliver submissions.
    setStatus('success');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="firstName">
            First name<span aria-hidden="true"> *</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={values.firstName}
            onChange={handleChange}
            placeholder="First"
          />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={values.lastName}
            onChange={handleChange}
            placeholder="Last"
          />
        </div>
      </div>

      {variant === 'full' && (
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="Number"
          />
        </div>
      )}

      <div className="field">
        <label htmlFor="email">
          Email<span aria-hidden="true"> *</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@company.com"
        />
      </div>

      <div className="field">
        <label htmlFor="message">
          {variant === 'full' ? 'Tell us about your project' : 'Comment or message'}
          <span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          placeholder="Write your message"
        />
      </div>

      <button type="submit" className="btn btn-accent btn-block">
        {variant === 'full' ? 'Send message' : 'Submit'}
      </button>

      {status === 'success' && (
        <p className="form-note" role="status" style={{ color: '#7fd6b8' }}>
          Thanks — your message has been queued. Connect a backend endpoint to deliver it.
        </p>
      )}
      {status === 'error' && (
        <p className="form-note" role="alert" style={{ color: '#e08a73' }}>
          Please fill in your name, email and message before sending.
        </p>
      )}
      <p className="form-note">
        This form is a frontend-only demo. To receive submissions, add an API route (e.g.
        <code> app/api/contact/route.js</code>) or connect a form backend and post {'{'}values{'}'} to it in
        handleSubmit.
      </p>
    </form>
  );
}
