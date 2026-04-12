import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/admin.css';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState(null);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const response = await fetch('/api/auth/session');
      const data = await response.json();
      
      if (!data.authenticated) {
        navigate('/admin/login');
        return;
      }
      
      setAuthenticated(true);
      fetchDashboardData();
    } catch (error) {
      navigate('/admin/login');
    }
  }

  async function fetchDashboardData() {
    try {
      const [leadsRes, statsRes] = await Promise.all([
        fetch('/api/admin/leads'),
        fetch('/api/admin/stats')
      ]);

      const leadsData = await leadsRes.json();
      const statsData = await statsRes.json();

      if (leadsData.ok) {
        setLeads(leadsData.leads);
      }

      if (statsData.ok) {
        setStats(statsData.stats);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  async function handleDelete(leadId) {
    if (!confirm('Are you sure you want to delete this lead?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setLeads(prev => prev.filter(l => l.id !== leadId));
        fetchDashboardData(); // Refresh stats
      }
    } catch (error) {
      console.error('Failed to delete lead:', error);
      alert('Failed to delete lead');
    }
  }

  if (!authenticated || loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  const getFilteredLeads = () => {
    let filtered = leads;

    if (filter !== 'all') {
      filtered = filtered.filter(lead => lead.status === filter);
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(lead =>
        lead.name.toLowerCase().includes(search) ||
        lead.email.toLowerCase().includes(search) ||
        lead.project_type.toLowerCase().includes(search)
      );
    }

    return filtered;
  };

  const filteredLeads = getFilteredLeads();

  const getStatusColor = (status) => {
    const colors = {
      'new': '#3b82f6',
      'contacted': '#8b5cf6',
      'in-progress': '#f59e0b',
      'quoted': '#ec4899',
      'won': '#10b981',
      'lost': '#6b7280'
    };
    return colors[status] || '#6b7280';
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      'high': '🔴',
      'normal': '🟡',
      'low': '🟢'
    };
    return badges[priority] || '';
  };

  return (
    <div className="admin-layout">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Admin Dashboard</h1>
          <div className="admin-header-actions">
            <Link to="/" className="btn btn-outline">View Site</Link>
            <Link to="/admin/settings" className="btn btn-outline">Settings</Link>
            <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
          </div>
        </div>
      </header>

      <main className="admin-main">
        {stats && (
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-label">Total Leads</div>
              <div className="stat-value">{stats.total}</div>
            </div>
            <div className="stat-card stat-new">
              <div className="stat-label">New</div>
              <div className="stat-value">{stats.new}</div>
            </div>
            <div className="stat-card stat-contacted">
              <div className="stat-label">Contacted</div>
              <div className="stat-value">{stats.contacted}</div>
            </div>
            <div className="stat-card stat-progress">
              <div className="stat-label">In Progress</div>
              <div className="stat-value">{stats.inProgress}</div>
            </div>
            <div className="stat-card stat-quoted">
              <div className="stat-label">Quoted</div>
              <div className="stat-value">{stats.quoted}</div>
            </div>
            <div className="stat-card stat-won">
              <div className="stat-label">Won</div>
              <div className="stat-value">{stats.won}</div>
            </div>
            <div className="stat-card stat-lost">
              <div className="stat-label">Lost</div>
              <div className="stat-value">{stats.lost}</div>
            </div>
          </div>
        )}

        <div className="leads-section">
          <div className="leads-header">
            <h2>Leads</h2>
            <div className="leads-controls">
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in-progress">In Progress</option>
                <option value="quoted">Quoted</option>
                <option value="won">Won</option>
                <option value="lost">Lost</option>
              </select>
            </div>
          </div>

          <div className="leads-table-wrapper">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Priority</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Project Type</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Files</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="11" style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                      No leads found
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map(lead => (
                    <tr key={lead.id}>
                      <td className="lead-id">#{lead.id}</td>
                      <td>{getPriorityBadge(lead.priority)}</td>
                      <td className="lead-name">{lead.name}</td>
                      <td>{lead.email}</td>
                      <td>{lead.phone || '—'}</td>
                      <td>{lead.project_type}</td>
                      <td>
                        {lead.budget_min && lead.budget_max
                          ? `$${(lead.budget_min / 1000).toFixed(0)}k - $${(lead.budget_max / 1000).toFixed(0)}k`
                          : lead.budget_min
                          ? `$${(lead.budget_min / 1000).toFixed(0)}k+`
                          : '—'
                        }
                      </td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(lead.status) }}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="lead-files">
                        {lead.attachment_count > 0 ? `📎 ${lead.attachment_count}` : '—'}
                      </td>
                      <td className="lead-date">
                        {new Date(lead.created_at * 1000).toLocaleDateString()}
                      </td>
                      <td className="lead-actions">
                        <Link to={`/admin/leads/${lead.id}`} className="btn-action btn-view" title="View Details">
                          👁️
                        </Link>
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="btn-action btn-delete"
                          title="Delete Lead"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
