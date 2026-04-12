import { useEffect, useRef, useState } from 'react';
import { projectTypeOptions } from '../data/services';

export default function EstimateForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const formStartedAt = useRef(Date.now());
  const turnstileRef = useRef(null);

  // Load Cloudflare Turnstile script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Make turnstile callback globally accessible
  useEffect(() => {
    window.onTurnstileSuccess = (token) => {
      setTurnstileToken(token);
    };
    
    return () => {
      delete window.onTurnstileSuccess;
    };
  }, []);

  function handleFileChange(event) {
    const files = Array.from(event.target.files || []);
    if (files.length > 5) {
      setError('Maximum 5 files allowed');
      event.target.value = '';
      return;
    }
    
    const maxSize = 10 * 1024 * 1024; // 10MB
    const oversized = files.find(f => f.size > maxSize);
    if (oversized) {
      setError('File size must be under 10MB');
      event.target.value = '';
      return;
    }
    
    setSelectedFiles(files);
    setError('');
  }

  function removeFile(index) {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  }

  async function onSubmit(event) {
    event.preventDefault();

    setError('');
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Add turnstile token if available
    if (turnstileToken) {
      formData.append('turnstileToken', turnstileToken);
    }
    
    // Add files
    selectedFiles.forEach(file => {
      formData.append('attachments', file);
    });

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Unable to submit your request right now.');
      }

      setSent(true);
      form.reset();
      setSelectedFiles([]);
      setTurnstileToken('');
      formStartedAt.current = Date.now();
      
      // Reset turnstile widget
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Submission failed. Please try again.');
      
      // Reset turnstile on error
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.reset(turnstileRef.current);
      }
    } finally {
      setSubmitting(false);
    }
  }

  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA';

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

      <div className="budget-range">
        <label>
          Budget Range (Optional)
          <div className="budget-inputs">
            <input 
              type="number" 
              name="budgetMin" 
              placeholder="Min $" 
              min="0" 
              step="1000"
            />
            <span className="budget-separator">to</span>
            <input 
              type="number" 
              name="budgetMax" 
              placeholder="Max $" 
              min="0" 
              step="1000"
            />
          </div>
        </label>
      </div>
      
      <label className="full-width">
        Project Details
        <textarea name="details" rows="5" placeholder="Tell us about your goals, style, and timing." />
      </label>

      <div className="file-upload-section full-width">
        <label htmlFor="file-upload" className="file-upload-label">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
          </svg>
          Attach Photos or Documents (Optional)
        </label>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*,.pdf,.doc,.docx"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <p className="file-upload-hint">Max 5 files, 10MB each (images or PDFs)</p>
        
        {selectedFiles.length > 0 && (
          <div className="selected-files">
            {selectedFiles.map((file, index) => (
              <div key={index} className="file-item">
                <span className="file-name">{file.name}</span>
                <span className="file-size">({(file.size / 1024).toFixed(1)} KB)</span>
                <button 
                  type="button" 
                  onClick={() => removeFile(index)}
                  className="file-remove"
                  aria-label="Remove file"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div 
        ref={turnstileRef}
        className="cf-turnstile full-width" 
        data-sitekey={turnstileSiteKey}
        data-callback="onTurnstileSuccess"
        data-theme="light"
      ></div>

      <button type="submit" className="btn btn-primary full-width" disabled={submitting}>
        {submitting ? 'Sending Request...' : sent ? 'Estimate Request Sent' : 'Request Estimate'}
      </button>
      
      {error ? <p className="form-status form-error">{error}</p> : null}
      {sent && !error ? (
        <p className="form-status form-success">Thanks! Your estimate request has been sent. We'll get back to you soon.</p>
      ) : null}
    </form>
  );
}