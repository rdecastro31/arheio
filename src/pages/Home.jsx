import { Link } from "react-router-dom";
import {
  FiFileText,
  FiSearch,
  FiArchive,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="dms-home">
      <header className="dms-header">
        <div className="dms-container dms-nav">
          <Link to="/" className="dms-brand">
            <span className="dms-brand-mark">D</span>
            <span>DocuTrack</span>
          </Link>

          <nav className="dms-menu">
            <a href="#dms-features">Features</a>
            <a href="#dms-why">Why Subscribe</a>
            <a href="#dms-pricing">Pricing</a>
          </nav>

          <Link to="/login" className="dms-login-btn">
            Login
          </Link>
        </div>
      </header>

      <main>
        <section className="dms-hero">
          <div className="dms-container dms-hero-content">
            <span className="dms-pill">Document Tracking System with OCR</span>

            <h1>Manage, track, and search documents with confidence.</h1>

            <p>
              A premium document tracking platform built for offices that need
              faster document routing, secure archiving, and OCR-powered search.
            </p>

            <div className="dms-hero-actions">
              <a href="#dms-pricing" className="dms-btn dms-btn-primary">
                View Plans <FiArrowRight />
              </a>
              <a href="#dms-features" className="dms-btn dms-btn-secondary">
                See Features
              </a>
            </div>

            <div className="dms-overview-card">
              <div className="dms-overview-head">
                <div>
                  <span>Document Control Center</span>
                  <strong>Today’s Overview</strong>
                </div>
                <small>Live</small>
              </div>

              <div className="dms-stats-grid">
                <div>
                  <span>Received</span>
                  <strong>1,284</strong>
                </div>
                <div>
                  <span>For Routing</span>
                  <strong>326</strong>
                </div>
                <div>
                  <span>OCR Indexed</span>
                  <strong>8,742</strong>
                </div>
                <div>
                  <span>Archived</span>
                  <strong>14,980</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dms-section" id="dms-features">
          <div className="dms-container">
            <div className="dms-section-heading">
              <span className="dms-pill">Core Features</span>
              <h2>Built for document-heavy operations.</h2>
              <p>
                Keep every file visible, searchable, and accountable from
                receiving to final archive.
              </p>
            </div>

            <div className="dms-feature-grid">
              <div className="dms-feature-card">
                <FiFileText />
                <h3>Document Receiving</h3>
                <p>
                  Register incoming documents with tracking numbers, sender
                  details, document type, and current status.
                </p>
              </div>

              <div className="dms-feature-card">
                <FiSearch />
                <h3>OCR Search</h3>
                <p>
                  Convert scanned documents into searchable text so users can
                  find records by keyword, name, or reference number.
                </p>
              </div>

              <div className="dms-feature-card">
                <FiArchive />
                <h3>Digital Archiving</h3>
                <p>
                  Store completed documents securely with retention details,
                  archive status, and fast retrieval.
                </p>
              </div>

              <div className="dms-feature-card">
                <FiShield />
                <h3>Access Control</h3>
                <p>
                  Limit access by role, department, or document category to keep
                  sensitive records protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dms-section dms-soft-section" id="dms-why">
          <div className="dms-container dms-split">
            <div className="dms-split-copy">
              <span className="dms-pill">Why Subscribe</span>
              <h2>Replace manual logs and scattered folders.</h2>
              <p>
                DocuTrack helps your team reduce missing files, improve
                accountability, and speed up document retrieval using one
                centralized system.
              </p>
            </div>

            <div className="dms-benefit-list">
              <div>
                <FiCheckCircle />
                <span>Track document movement per department</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Search scanned files using OCR text</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Monitor pending, completed, and archived files</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Generate reports for management review</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dms-section" id="dms-pricing">
          <div className="dms-container">
            <div className="dms-section-heading">
              <span className="dms-pill">Pricing</span>
              <h2>Simple plans for every office size.</h2>
              <p>
                Sample pricing for document tracking, OCR indexing, archiving,
                and workflow monitoring.
              </p>
            </div>

            <div className="dms-pricing-grid">
              <div className="dms-pricing-card">
                <h3>Basic</h3>
                <p className="dms-price">
                  ₱4,999 <span>/ month</span>
                </p>
                <ul>
                  <li>Up to 5 users</li>
                  <li>1,000 documents monthly</li>
                  <li>Document tracking</li>
                  <li>Manual upload</li>
                  <li>Basic reports</li>
                </ul>
                <button>Get Basic</button>
              </div>

              <div className="dms-pricing-card dms-featured-plan">
                <span className="dms-popular">Most Popular</span>
                <h3>Pro</h3>
                <p className="dms-price">
                  ₱12,999 <span>/ month</span>
                </p>
                <ul>
                  <li>Up to 25 users</li>
                  <li>10,000 documents monthly</li>
                  <li>OCR text extraction</li>
                  <li>Routing workflow</li>
                  <li>Advanced reports</li>
                </ul>
                <button>Get Pro</button>
              </div>

              <div className="dms-pricing-card">
                <h3>Enterprise</h3>
                <p className="dms-price">Custom</p>
                <ul>
                  <li>Unlimited users</li>
                  <li>Custom document volume</li>
                  <li>Custom approval workflow</li>
                  <li>Role-based access</li>
                  <li>Cloud or on-premise setup</li>
                </ul>
                <button>Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        <section className="dms-cta-section">
          <div className="dms-container">
            <div className="dms-cta-box">
              <h2>Start organizing your documents the smarter way.</h2>
              <p>
                Move from manual tracking to a secure and searchable document
                management platform.
              </p>
              <Link to="/login" className="dms-btn dms-btn-primary">
                Go to Login
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="dms-footer">
        <div className="dms-container">
          <p>© 2026 DocuTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}