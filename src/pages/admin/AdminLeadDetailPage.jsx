import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../../styles/admin.css';

export default function AdminLeadDetailPage() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: '',
    budgetMin: '',
    budgetMax: '',
    status: 'new',
    priority: 'normal',
    assignedTo: '',
    notes: ''
  });

  useEffect(() => {
    checkAuthAndFetch();
  }, [id]);

  async function checkAuthAndFetch() {
    try {
      const sessionRes = await fetch('/api/auth/session');
      const sessionData = await sessionRes.json();

      if (!sessionData.authenticated) {
        navigate('/admin/login');
        return;
      }

      fetchLead();
    } catch (error) {
      navigate('/admin/login');
    }
  }

  async function fetchLead() {
    try {
      const response = await fetch(`/api/admin/leads/${id}`);
      const data = await response.json();

      if (data.ok) {
        setLead(data.lead);
        setFormData({
          name: data.lead.name || '',
          email: data.lead.email || '',
          phone: data.lead.phone || '',
          projectType: data.lead.project_type || '',
          details: data.lead.details || '',
          budgetMin: data.lead.budget_min || '',
          budgetMax: data.lead.budget_max || '',
          status: data.lead.status || 'new',
          priority: data.lead.priority || 'normal',
          assignedTo: data.lead.assigned_to || '',
          notes: data.lead.notes || ''
        });
      }
    } catch (error) {
      console.error('Failed to fetch lead:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          details: formData.details,
          budgetMin: formData.budgetMin ? parseInt(formData.budgetMin) : null,
          budgetMax: formData.budgetMax ? parseInt(formData.budgetMax) : null,
          status: formData.status,
          priority: formData.priority,
          assignedTo: formData.assignedTo,
          notes: formData.notes
        })
      });

      const data = await response.json();

      if (data.ok) {
        setLead(data.lead);
        setEditing(false);
        fetchLead(); // Refresh to get activity log
      } else {
        alert('Failed to update lead');
      }
    } catch (error) {
      console.error('Failed to save lead:', error);
      alert('Failed to save lead');
    } finally {
      setSaving(false);
    }
  }

  async function handleDownloadAttachment(attachmentId, filename) {
    try {
      const response = await fetch(`/api/admin/attachments/${attachmentId}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download attachment');
    }
  }

  async function handleDeleteAttachment(attachmentId) {
    if (!confirm('Delete this attachment?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/attachments/${attachmentId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        fetchLead(); // Refresh lead data
      } else {
        alert('Failed to delete attachment');
      }
    } catch (error) {
      console.error('Failed to delete attachment:', error);
      alert('Failed to delete attachment');
    }
  }

  async function handleDelete() {
    if (!confirm('Are you sure you want to delete this lead? This cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        navigate('/admin/dashboard');
      } else {
        alert('Failed to delete lead');
      }
    } catch (error) {
      console.error('Failed to delete lead:', error);
      alert('Failed to delete lead');
    }
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
        <p>Loading lead...</p>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="admin-layout">
        <div className="admin-error">
          <h2>Lead not found</h2>
          <Link to="/admin/dashboard" className="btn btn-primary">Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Lead #{lead.id} - {lead.name}</h1>
          <div className="admin-header-actions">
            <Link to="/admin/dashboard" className="btn btn-outline">← Back</Link>
            {!editing ? (
              <>
                <button onClick={() => setEditing(true)} className="btn btn-primary">Edit</button>
                <button onClick={handleDelete} className="btn btn-danger">Delete</button>
              </>
            ) : (
              <>
                <button onClick={() => setEditing(false)} className="btn btn-outline">Cancel</button>
                <button onClick={handleSave} className="btn btn-success" disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="admin-main">
        <div className="lead-detail-grid">
          <div className="lead-detail-main">
            <div className="detail-card">
              <h3>Contact Information</h3>
              {!editing ? (
                <div className="detail-fields">
                  <div className="detail-field">
                    <label>Name</label>
                    <div>{lead.name}</div>
                  </div>
                  <div className="detail-field">
                    <label>Email</label>
                    <div><a href={`mailto:${lead.email}`}>{lead.email}</a></div>
                  </div>
                  <div className="detail-field">
                    <label>Phone</label>
                    <div>{lead.phone ? <a href={`tel:${lead.phone}`}>{lead.phone}</a> : '—'}</div>
                  </div>
                </div>
              ) : (
                <div className="detail-fields">
                  <div className="detail-field">
                    <label>Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="detail-field">
                    <label>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="detail-field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="detail-card">
              <h3>Project Details</h3>
              {!editing ? (
                <div className="detail-fields">
                  <div className="detail-field">
                    <label>Project Type</label>
                    <div>{lead.project_type}</div>
                  </div>
                  <div className="detail-field">
                    <label>Budget Range</label>
                    <div>
                      {lead.budget_min && lead.budget_max
                        ? `$${lead.budget_min.toLocaleString()} - $${lead.budget_max.toLocaleString()}`
                        : lead.budget_min
                        ? `$${lead.budget_min.toLocaleString()}+`
                        : lead.budget_max
                        ? `Up to $${lead.budget_max.toLocaleString()}`
                        : 'Not specified'
                      }
                    </div>
                  </div>
                  <div className="detail-field full-width">
                    <label>Details</label>
                    <div className="detail-text">{lead.details || 'No details provided'}</div>
                  </div>
                </div>
              ) : (
                <div className="detail-fields">
                  <div className="detail-field">
                    <label>Project Type</label>
                    <input
                      type="text"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    />
                  </div>
                  <div className="detail-field">
                    <label>Budget Min</label>
                    <input
                      type="number"
                      value={formData.budgetMin}
                      onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                      placeholder="Minimum budget"
                    />
                  </div>
                  <div className="detail-field">
                    <label>Budget Max</label>
                    <input
                      type="number"
                      value={formData.budgetMax}
                      onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                      placeholder="Maximum budget"
                    />
                  </div>
                  <div className="detail-field full-width">
                    <label>Details</label>
                    <textarea
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      rows="4"
                    />
                  </div>
                </div>
              )}
            </div>

            {lead.attachments && lead.attachments.length > 0 && (
              <div className="detail-card">
                <h3>Attachments ({lead.attachments.length})</h3>
                <div className="attachments-list">
                  {lead.attachments.map(att => (
                    <div key={att.id} className="attachment-item">
                      <div className="attachment-info">
                        <div className="attachment-name">{att.original_filename}</div>
                        <div className="attachment-meta">
                          {(att.size / 1024).toFixed(1)} KB • {new Date(att.created_at * 1000).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="attachment-actions">
                        <button
                          onClick={() => handleDownloadAttachment(att.id, att.original_filename)}
                          className="btn-action btn-download"
                          title="Download"
                        >
                          ⬇️
                        </button>
                        <button
                          onClick={() => handleDeleteAttachment(att.id)}
                          className="btn-action btn-delete"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-card">
              <h3>Admin Notes</h3>
              {!editing ? (
                <div className="detail-text">{lead.notes || 'No admin notes'}</div>
              ) : (
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows="5"
                  placeholder="Add internal notes about this lead..."
                  className="full-width"
                />
              )}
            </div>
          </div>

          <div className="lead-detail-sidebar">
            <div className="detail-card">
              <h3>Status</h3>
              {!editing ? (
                <div className="detail-fields">
                  <div className="detail-field">
                    <label>Status</label>
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(lead.status) }}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="detail-field">
                    <label>Priority</label>
                    <div>{lead.priority}</div>
                  </div>
                  <div className="detail-field">
                    <label>Assigned To</label>
                    <div>{lead.assigned_to || '—'}</div>
                  </div>
                </div>
              ) : (
                <div className="detail-fields">
                  <div className="detail-field">
                    <label>Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="in-progress">In Progress</option>
                      <option value="quoted">Quoted</option>
                      <option value="won">Won</option>
                      <option value="lost">Lost</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>Priority</label>
                    <select
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="detail-field">
                    <label>Assigned To</label>
                    <input
                      type="text"
                      value={formData.assignedTo}
                      onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
                      placeholder="Name"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="detail-card">
              <h3>Timeline</h3>
              <div className="detail-fields">
                <div className="detail-field">
                  <label>Created</label>
                  <div>{new Date(lead.created_at * 1000).toLocaleString()}</div>
                </div>
                <div className="detail-field">
                  <label>Updated</label>
                  <div>{new Date(lead.updated_at * 1000).toLocaleString()}</div>
                </div>
              </div>
            </div>

            {lead.activity && lead.activity.length > 0 && (
              <div className="detail-card">
                <h3>Activity Log</h3>
                <div className="activity-list">
                  {lead.activity.map(act => (
                    <div key={act.id} className="activity-item">
                      <div className="activity-action">{act.action}</div>
                      {act.description && <div className="activity-desc">{act.description}</div>}
                      <div className="activity-meta">
                        {new Date(act.created_at * 1000).toLocaleString()}
                        {act.username && ` • ${act.username}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function getStatusColor(status) {
  const colors = {
    'new': '#3b82f6',
    'contacted': '#8b5cf6',
    'in-progress': '#f59e0b',
    'quoted': '#ec4899',
    'won': '#10b981',
    'lost': '#6b7280'
  };
  return colors[status] || '#6b7280';
}
