import { useRef, useState } from 'react';
import { projectTypeOptions } from '../data/services';

export default function EstimateForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formStartedAt = useRef(Date.now());

  async function onSubmit(event) {
    event.preventDefault();

    setError('');
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      projectType: String(formData.get('projectType') || '').trim(),
      details: String(formData.get('details') || '').trim(),
      website: String(formData.get('website') || '').trim(),
      startedAt: Number(formData.get('startedAt') || formStartedAt.current)
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Unable to submit your request right now.');
      }

      setSent(true);
      form.reset();
      formStartedAt.current = Date.now();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="estimate-form" onSubmit={onSubmit}>
      <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hp-field" aria-hidden="true" />
      <input type="hidden" name="startedAt" value={String(formStartedAt.current)} />
      <label>
        Full Name
        <input type="text" name="name" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required placeholder="you@example.com" />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="(803) 555-0147" />
      </label>
      <label>
        Project Type
        <select name="projectType" defaultValue="Garage Builders">
          {projectTypeOptions.map((projectType) => (
            <option key={projectType}>{projectType}</option>
          ))}
        </select>
      </label>
      <label className="full-width">
        Project Details
        <textarea name="details" rows="5" placeholder="Tell us about your goals, style, and timing." />
      </label>
      <button type="submit" className="btn btn-primary full-width" disabled={submitting}>
        {submitting ? 'Sending Request...' : sent ? 'Estimate Request Sent' : 'Request Estimate'}
      </button>
      {error ? <p className="form-status form-error">{error}</p> : null}
      {sent && !error ? (
        <p className="form-status form-success">Thanks. Your estimate request has been sent.</p>
      ) : null}
    </form>
  );
}