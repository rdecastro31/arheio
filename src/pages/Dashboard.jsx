import React from 'react'
import {
  FiFileText,
  FiArchive,
  FiClock,
  FiAlertTriangle,
  FiFolder,
  FiDatabase,
  FiShield,
  FiTrendingUp,
  FiArrowUpRight,
  FiCheckCircle,
  FiSearch,
} from 'react-icons/fi'
import '../styles/dashboard.css'

const stats = [
  {
    title: 'Total Documents',
    value: '124,580',
    meta: '+2.4% this month',
    icon: <FiFileText />,
  },
  {
    title: 'Archived Records',
    value: '82,410',
    meta: '+1.8% this month',
    icon: <FiArchive />,
  },
  {
    title: 'Pending Retrievals',
    value: '216',
    meta: '12 new today',
    icon: <FiClock />,
  },
  {
    title: 'Storage Locations',
    value: '18',
    meta: 'Active facilities',
    icon: <FiDatabase />,
  },
  {
    title: 'Compliance Health',
    value: '96.4%',
    meta: 'Within target',
    icon: <FiShield />,
  },
]

const documentGroups = [
  {
    title: 'Legal Documents',
    desc: 'Contracts, agreements, case records, and legal correspondence',
    total: '24,320',
  },
  {
    title: 'Finance Records',
    desc: 'Invoices, payroll files, vouchers, and accounting reports',
    total: '18,904',
  },
  {
    title: 'HR Files',
    desc: '201 files, onboarding records, memos, and personnel documents',
    total: '9,182',
  },
  {
    title: 'Administrative Archive',
    desc: 'Policies, office forms, circulars, and internal records',
    total: '15,074',
  },
]

const recentActivities = [
  'Box BX-204 transferred to Central Archive',
  'OCR completed for Legal Batch L-112',
  'Document retrieval request approved',
  'Finance 2018 records flagged for retention review',
]

const storageLocations = [
  {
    name: 'Central Records Office',
    docs: '24,320 documents',
    status: 'Healthy',
  },
  {
    name: 'North Archive Facility',
    docs: '18,904 documents',
    status: 'Near Capacity',
  },
  {
    name: 'Legal Records Vault',
    docs: '9,182 documents',
    status: 'Restricted',
  },
  {
    name: 'Finance Filing Section',
    docs: '15,074 documents',
    status: 'Review Needed',
  },
]

const summaryItems = [
  { label: 'Checked Out Files', value: '96' },
  { label: 'Overdue Returns', value: '7' },
  { label: 'Boxes for Disposal Review', value: '31' },
  { label: 'OCR Queue', value: '74' },
  { label: 'Transfer Requests', value: '12' },
  { label: 'Retention Alerts', value: '14' },
]

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <section className="dashboard-stats-grid dashboard-stats-grid-five">
        {stats.map((item, index) => (
          <div className="dashboard-stat-card" key={index}>
            <div className="dashboard-stat-top">
              <div className="dashboard-stat-icon">{item.icon}</div>
              <span>{item.meta}</span>
            </div>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </section>

      <section className="dashboard-search-strip">
        <div className="dashboard-inline-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search document number, barcode, employee, box, or location..."
          />
        </div>

        <div className="dashboard-search-meta">
          <div className="search-meta-box">
            <span>Last Sync</span>
            <strong>Today, 10:42 AM</strong>
          </div>
          <div className="search-meta-box">
            <span>OCR Queue</span>
            <strong>74 pending</strong>
          </div>
        </div>
      </section>

      <section className="dashboard-main-grid">
        <div className="dashboard-card dashboard-card-large">
          <div className="dashboard-card-header">
            <div>
              <span className="card-kicker">Records Overview</span>
              <h3>Document categories</h3>
            </div>

            <button className="dashboard-text-btn">
              View All <FiArrowUpRight />
            </button>
          </div>

          <div className="document-group-list">
            {documentGroups.map((group, index) => (
              <div className="document-group-item" key={index}>
                <div className="document-group-icon">
                  <FiFolder />
                </div>

                <div className="document-group-content">
                  <h4>{group.title}</h4>
                  <p>{group.desc}</p>
                </div>

                <div className="document-group-total">
                  <strong>{group.total}</strong>
                  <span>documents</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <span className="card-kicker">Operations</span>
              <h3>Quick summary</h3>
            </div>
          </div>

          <div className="summary-list">
            {summaryItems.map((item, index) => (
              <div className="summary-row" key={index}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card dashboard-card-large">
          <div className="dashboard-card-header">
            <div>
              <span className="card-kicker">Archive Facilities</span>
              <h3>Storage locations</h3>
            </div>
          </div>

          <div className="storage-location-list">
            {storageLocations.map((location, index) => (
              <div className="storage-location-item" key={index}>
                <div>
                  <h4>{location.name}</h4>
                  <p>{location.docs}</p>
                </div>

                <span className="location-status">{location.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <div>
              <span className="card-kicker">Recent Activity</span>
              <h3>Latest updates</h3>
            </div>
          </div>

          <div className="activity-feed">
            {recentActivities.map((item, index) => (
              <div className="activity-feed-item" key={index}>
                <div className="activity-feed-icon">
                  <FiCheckCircle />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="alert-panel">
            <div className="alert-panel-icon">
              <FiTrendingUp />
            </div>
            <div>
              <strong>Archive growth remains steady</strong>
              <p>
                Total archived volume increased this month while pending
                retrievals remain manageable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}