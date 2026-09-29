import { type FormEvent, type ReactNode, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Clipboard,
  ExternalLink,
  FileDown,
  Github,
  Menu,
  MessageSquarePlus,
  Search,
  Share2,
  X,
} from 'lucide-react';
import { Link, Route, Switch, useLocation, useParams, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { getDemoCases, saveDemoCase, taxonomy, timeline, type CaseRecord } from '@/data/demo';
import MethodologyContent from '@/pages/MethodologyContent';
import ProjectContent from '@/pages/ProjectContent';
import '@/index.css';

const queryClient = new QueryClient();
const GITHUB_REPO_URL = 'https://github.com/';

function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return <button className={`button ${className}`} {...props}>{children}</button>;
}

function StatusBadge({ status }: { status: string }) {
  return <span className="status-badge" data-testid={`status-${status.toLowerCase().replaceAll(' ', '-')}`}>{status}</span>;
}

function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/cases', label: 'Cases' },
    { href: '/submit', label: 'Submit' },
    { href: '/taxonomy', label: 'Taxonomy' },
    { href: '/methodology', label: 'Methodology' },
    { href: '/project', label: 'Project' },
  ];
  const closeMenu = () => setOpen(false);
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand" data-testid="link-brand" onClick={closeMenu}>
          <img src="/images/neuroguard-logo.jpg" alt="NeuroGuard official logo" />
          <div className="brand-lockup"><div className="brand-name">NeuroGuard <span>Open</span></div><span className="prototype-label">Early-stage prototype</span></div>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" aria-current={location === link.href || (link.href === '/cases' && location.startsWith('/cases/')) ? 'page' : undefined} data-testid={`link-nav-${link.label.toLowerCase()}`}>{link.label}</Link>
          ))}
        </nav>
        <a className="github-link" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" data-testid="link-github" aria-label="View on GitHub. Repository URL is a placeholder.">
          <Github size={16} /> GitHub <ExternalLink size={12} />
        </a>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation menu" data-testid="button-mobile-menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link" onClick={closeMenu} data-testid={`link-mobile-${link.label.toLowerCase()}`}>{link.label}</Link>
          ))}
          <a className="nav-link" href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" onClick={closeMenu} data-testid="link-mobile-github">View on GitHub <span className="muted">(placeholder URL)</span></a>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-project"><strong>NeuroGuard Open</strong><span>Early-stage prototype · Demo Dataset</span></div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/methodology" data-testid="link-footer-methodology">Methodology</Link>
          <Link href="/project" data-testid="link-footer-project">Project</Link>
          <Link href="/cases" data-testid="link-footer-dataset">Research Dataset</Link>
          <Link href="/submit" data-testid="link-footer-contribute">Contribute</Link>
          <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" data-testid="link-footer-github">View on GitHub <span className="muted">(not configured)</span></a>
        </nav>
        <span className="footer-principle">AI can assist analysis. Humans remain responsible for judgment.</span>
      </div>
    </footer>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return <div className="app-shell"><Navbar /><main className="main"><div className="container">{children}</div></main><Footer /></div>;
}

function CaseCard({ item }: { item: CaseRecord }) {
  return (
    <Link href={`/cases/${item.id}`} className="case-card" data-testid={`card-case-${item.id}`}>
      <div className="case-top"><span className="case-id">{item.id}</span><StatusBadge status={item.status} /></div>
      <h3>{item.contentType}</h3>
      <p>{item.description}</p>
      <div className="case-meta"><span className="tag">{item.technique}</span><span>{item.date}</span></div>
    </Link>
  );
}

function Home() {
  const latestCases = getDemoCases();
  return (
    <Shell>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">Open-source research infrastructure</div>
          <h1>Understand how AI influences people.</h1>
          <p className="lede">NeuroGuard Open is an open-source platform for documenting, studying, and reporting potentially manipulative AI-generated content.</p>
          <div className="hero-actions">
            <Link href="/cases" className="button button-primary" data-testid="link-hero-explore">Explore Cases <ArrowRight size={16} /></Link>
            <Link href="/submit" className="button button-secondary" data-testid="link-hero-submit">Submit a Case</Link>
            <a href={GITHUB_REPO_URL} target="_blank" rel="noreferrer" className="button button-quiet" data-testid="link-hero-github">View on GitHub <ExternalLink size={15} /></a>
          </div>
          <div className="demo-strip">Early-stage prototype · Demo Dataset · Fictional records for interface review, not real-world findings.</div>
        </div>
        <div className="hero-mark" aria-label="Human-led research workflow">
          <div className="mark-label">
            <strong>AI can assist analysis.<br />Humans remain responsible for judgment.</strong>
            <ol className="hero-workflow">
              <li><span>01</span> Document the content and context</li>
              <li><span>02</span> Record evidence and open questions</li>
              <li><span>03</span> Invite careful human review</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principle-title">
        <div className="section-heading"><div><div className="eyebrow">The problem</div><h2 id="principle-title">Why NeuroGuard?</h2></div></div>
        <div className="prose-block">
          <p>AI-generated content is increasingly easy to create, modify, personalize, and distribute. Understanding its potential influence requires more than determining whether a file was generated by AI.</p>
          <p>NeuroGuard provides an open framework for documenting what happened, what evidence exists, what techniques may be involved, what remains uncertain, and how others can independently review the case.</p>
        </div>
        <div className="principles">
          <article className="principle"><div className="principle-number">01 / RECORD</div><h3>Document Evidence</h3><p>Keep sources, observations, context, and evidence gaps visible.</p></article>
          <article className="principle"><div className="principle-number">02 / DESCRIBE</div><h3>Identify Potential Techniques</h3><p>Use a working taxonomy without treating labels as findings.</p></article>
          <article className="principle"><div className="principle-number">03 / REVIEW</div><h3>Enable Human Review</h3><p>Make room for alternative interpretations and independent review.</p></article>
        </div>
      </section>

      <section className="section" aria-labelledby="workflow-title">
        <div className="section-heading"><div><div className="eyebrow">The working model</div><h2 id="workflow-title">From record to research.</h2></div><p>The same evidence stays visible as a case moves through documentation, review, and reporting.</p></div>
        <div className="process process-five">
          {['Document', 'Understand', 'Review', 'Research', 'Report'].map((step, index) => <div className="process-step" key={step}><strong>0{index + 1}</strong><span>{step}</span></div>)}
        </div>
      </section>

      <section className="section build-section" aria-labelledby="build-title">
        <div className="section-heading"><div><div className="eyebrow">Open by design</div><h2 id="build-title">Build with NeuroGuard.</h2></div><p>Shared tools and transparent methods can make careful research easier to inspect and extend.</p></div>
        <div className="build-list">
          <Link href="/project"><span>01</span> Open-source code <ArrowRight size={15} /></Link>
          <Link href="/methodology"><span>02</span> Open methodology <ArrowRight size={15} /></Link>
          <Link href="/taxonomy"><span>03</span> Research taxonomy <ArrowRight size={15} /></Link>
          <Link href="/cases"><span>04</span> Future datasets <ArrowRight size={15} /></Link>
          <Link href="/submit"><span>05</span> Community contributions <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="section" aria-labelledby="agency-title">
        <div className="agency"><div className="eyebrow">Human agency</div><h2 id="agency-title">Analysis is not a verdict.</h2><p>NeuroGuard does not automatically determine whether content is manipulative or infer creator intent. It helps people document evidence, identify potential techniques, investigate cases, and conduct review.</p><p className="agency-footnote">AI can assist analysis. Humans remain responsible for judgment.</p></div>
      </section>

      <section className="section" aria-labelledby="preview-title">
        <div className="section-heading"><div><div className="eyebrow">Recent records</div><h2 id="preview-title">Cases worth a closer look.</h2></div><Link href="/cases" className="button button-secondary" data-testid="link-explore-all">Explore all cases <ArrowRight size={15} /></Link></div>
        <div className="case-grid">{latestCases.slice(0, 3).map((item) => <CaseCard key={item.id} item={item} />)}</div>
      </section>
    </Shell>
  );
}

function CountBars({ title, data, testId }: { title: string; data: { label: string; value: number }[]; testId: string }) {
  const max = Math.max(1, ...data.map((entry) => entry.value));
  return (
    <section className="panel chart-panel" data-testid={testId}>
      <h3>{title}</h3>
      <p className="panel-subtitle">Counts from fictional demo records in this browser.</p>
      <div className="bar-list">
        {data.map((entry) => (
          <div className="bar-row" key={entry.label}>
            <span className="bar-label">{entry.label}</span>
            <span className="bar-track" aria-hidden="true"><span style={{ width: `${(entry.value / max) * 100}%` }} /></span>
            <strong className="bar-value">{entry.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Dashboard() {
  const [, setLocation] = useLocation();
  const records = getDemoCases();
  const recent = records.slice(0, 4);
  const countBy = (field: 'technique' | 'contentType') => {
    const counts = new Map<string, number>();
    records.forEach((item) => counts.set(item[field], (counts.get(item[field]) ?? 0) + 1));
    return [...counts].map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));
  };
  const byMonth = new Map<string, number>();
  records.forEach((item) => {
    const month = item.date.split(' ')[1] ?? 'Unknown';
    byMonth.set(month, (byMonth.get(month) ?? 0) + 1);
  });
  const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthly = [...byMonth].map(([label, value]) => ({ label, value })).sort((a, b) => monthOrder.indexOf(a.label) - monthOrder.indexOf(b.label));
  const underReview = records.filter((item) => item.status.toLowerCase().includes('review')).length;
  const openResearch = records.filter((item) => item.status === 'Open Research').length;
  return (
    <Shell>
      <div className="page-header"><div className="page-header-copy"><div className="eyebrow">Overview / demo dataset</div><h1>Research Dashboard</h1><p>A view of documented demo records, potential techniques, and review status.</p></div><div className="demo-strip">Early-stage prototype · Demo Dataset</div></div>
      <div className="notice dashboard-notice">All records and counts shown here are fictional interface examples. Counts describe this browser’s demo data only—not real-world activity, research participation, or automated findings.</div>
      <div className="stats">
        {[
          ['Documented Demo Cases', records.length],
          ['Cases Under Review', underReview],
          ['Open Research Cases', openResearch],
          ['Taxonomy Categories', taxonomy.length],
        ].map(([label, value]) => <article className="stat" key={label} data-testid={`stat-${String(label).toLowerCase().replaceAll(' ', '-')}`}><div className="stat-label">{label}</div><div className="stat-value">{value}</div></article>)}
      </div>
      <div className="dashboard-charts">
        <CountBars title="Cases by Potential Technique" data={countBy('technique')} testId="chart-cases-by-technique" />
        <CountBars title="Cases by Content Type" data={countBy('contentType')} testId="chart-cases-by-content-type" />
        <CountBars title="Cases Added Over Time" data={monthly} testId="chart-cases-over-time" />
      </div>
      <section className="panel table-panel" aria-labelledby="recent-title"><h3 id="recent-title">Recent cases</h3><p className="panel-subtitle">Select a row to open the investigation record.</p><div className="table-scroll"><table><thead><tr><th>Case ID</th><th>Content</th><th>Potential Technique</th><th>Status</th><th>Date</th></tr></thead><tbody>{recent.map((item) => <tr key={item.id} onClick={() => setLocation(`/cases/${item.id}`)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setLocation(`/cases/${item.id}`); }} tabIndex={0} role="button" data-testid={`row-case-${item.id}`}><td className="table-id">{item.id}</td><td>{item.contentType}</td><td>{item.technique}</td><td><StatusBadge status={item.status} /></td><td>{item.date}</td></tr>)}</tbody></table></div></section>
    </Shell>
  );
}

function dateInputValue(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? '' : `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}-${String(parsed.getDate()).padStart(2, '0')}`;
}

function CasesPage() {
  const [query, setQuery] = useState('');
  const [contentType, setContentType] = useState('');
  const [platform, setPlatform] = useState('');
  const [technique, setTechnique] = useState('');
  const [status, setStatus] = useState('');
  const [foundDate, setFoundDate] = useState('');
  const records = getDemoCases();
  const filtered = useMemo(() => records.filter((item) => {
    const haystack = `${item.id} ${item.description} ${item.contentType} ${item.platform} ${item.source} ${item.technique} ${item.status}`.toLowerCase();
    return (!query || haystack.includes(query.toLowerCase())) &&
      (!contentType || item.contentType === contentType) &&
      (!platform || item.platform === platform) &&
      (!technique || item.technique === technique) &&
      (!status || item.status === status) &&
      (!foundDate || dateInputValue(item.date) === foundDate);
  }), [records, query, contentType, platform, technique, status, foundDate]);
  const unique = (key: keyof CaseRecord) => [...new Set(records.map((item) => item[key] as string))];
  return (
    <Shell>
      <div className="page-header"><div className="page-header-copy"><div className="eyebrow">Library / {records.length} demo records</div><h1>Documented Cases</h1><p>Search records and inspect evidence, context, open questions, and review status.</p></div><div className="demo-strip">Early-stage prototype · Demo Dataset</div></div>
      <div className="filters">
        <div className="field"><label htmlFor="case-search">Search documented cases</label><div style={{ position: 'relative' }}><Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: 'var(--muted-text)' }} /><input id="case-search" className="input" style={{ paddingLeft: 36 }} placeholder="Search documented cases..." value={query} onChange={(event) => setQuery(event.target.value)} data-testid="input-case-search" /></div></div>
        <div className="field"><label htmlFor="content-filter">Content Type</label><select id="content-filter" className="select" value={contentType} onChange={(event) => setContentType(event.target.value)} data-testid="select-content-type"><option value="">All types</option>{unique('contentType').map((value) => <option key={value}>{value}</option>)}</select></div>
        <div className="field"><label htmlFor="platform-filter">Platform</label><select id="platform-filter" className="select" value={platform} onChange={(event) => setPlatform(event.target.value)} data-testid="select-platform"><option value="">All platforms</option>{unique('platform').map((value) => <option key={value}>{value}</option>)}</select></div>
        <div className="field"><label htmlFor="technique-filter">Potential Technique</label><select id="technique-filter" className="select" value={technique} onChange={(event) => setTechnique(event.target.value)} data-testid="select-technique"><option value="">All techniques</option>{unique('technique').map((value) => <option key={value}>{value}</option>)}</select></div>
        <div className="field"><label htmlFor="status-filter">Review Status</label><select id="status-filter" className="select" value={status} onChange={(event) => setStatus(event.target.value)} data-testid="select-status"><option value="">All statuses</option>{unique('status').map((value) => <option key={value}>{value}</option>)}</select></div>
        <div className="field"><label htmlFor="date-filter">Date found</label><input id="date-filter" className="input" type="date" value={foundDate} onChange={(event) => setFoundDate(event.target.value)} data-testid="input-date-filter" /></div>
      </div>
      <div className="results-line"><span>{filtered.length} demo {filtered.length === 1 ? 'case' : 'cases'}</span><span>Potential techniques are not findings.</span></div>
      <div className="library-grid">{filtered.length ? filtered.map((item) => <CaseCard key={item.id} item={item} />) : <div className="empty">No records match these filters.<br /><Button className="button-quiet" onClick={() => { setQuery(''); setContentType(''); setPlatform(''); setTechnique(''); setStatus(''); setFoundDate(''); }} data-testid="button-clear-filters">Clear filters</Button></div>}</div>
    </Shell>
  );
}

function Modal({ title, children, onClose }: { title: string; children: ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal-header"><h2 id="modal-title">{title}</h2><button className="close-button" onClick={onClose} aria-label="Close dialog" data-testid="button-close-modal"><X size={19} /></button></div>{children}</div></div>;
}

function DetailTab({ tab, item, notes, onAddNote }: { tab: string; item: CaseRecord; notes: string[]; onAddNote: () => void }) {
  if (tab === 'What Was Observed') return <div className="observation-stack">
    <section className="observation-block" aria-labelledby="observed-title">
      <div className="eyebrow">Observation</div>
      <h2 id="observed-title">What Was Observed?</h2>
      <p data-testid="text-observation">{item.id === 'NG-0024'
        ? 'The submitted video contains synthetic visual elements and messaging directed toward a specific audience. Available evidence suggests that some media elements may have been generated or modified using AI-based tools.'
        : item.description}</p>
      <p className="small-note">This description records what the demo case presents. It does not establish a conclusion about intent or effect.</p>
    </section>
    <section className="uncertainty-block" aria-labelledby="uncertainty-title">
      <div className="eyebrow">Open questions</div>
      <h2 id="uncertainty-title">What Remains Uncertain?</h2>
      <p>The available evidence does not establish the creator’s intent or the precise audience-targeting mechanism. Additional contextual evidence may be required.</p>
    </section>
  </div>;
  if (tab === 'Evidence') return <div className="evidence-stack">
    {item.evidence && <div className="notice evidence-user-note"><strong>Contributor evidence note</strong><p>{item.evidence}</p></div>}
    <div className="evidence-grid">{[
      ['Evidence E-001', 'Source record', item.source],
      ['Evidence E-002', 'Metadata', 'No independently verified metadata is included with this fictional demo record.'],
      ['Evidence E-003', 'Contextual comparison', item.context || 'Additional comparison material is not included in this demo record.'],
    ].map(([id, title, text]) => <article className="evidence-card" key={id}><strong>{id}</strong><h3>{title}</h3><p>{text}</p></article>)}</div>
    <div className="notice">Evidence items in this prototype are illustrative. They should not be treated as verified source material.</div>
  </div>;
  if (tab === 'Analysis') return <div className="analysis-wrap">
    <div className="analysis-grid">{[
      ['Potential technique', `${item.technique} is a tentative organizing label, not a finding.`],
      ['Supporting evidence', 'The source field and any contributor notes are presented for inspection; no independent verification is claimed.'],
      ['Research note', 'Additional audience and production context would help future review.'],
    ].map(([title, text]) => <div className="analysis-item" key={title}><strong>{title}</strong><span>{text}</span></div>)}</div>
    <section className="alternative-block" aria-labelledby="alternative-title">
      <div className="eyebrow">Alternative interpretation</div>
      <h2 id="alternative-title">A different explanation remains possible.</h2>
      <p>The observed emotional framing may reflect ordinary persuasive communication rather than intentional manipulation. Additional context is needed.</p>
    </section>
    <Link href={`/taxonomy?category=${encodeURIComponent(item.technique)}`} className="button button-secondary" data-testid="link-case-taxonomy">Review the working taxonomy <ArrowRight size={15} /></Link>
  </div>;
  return <div className="community-review">
    <div className="community-review-heading"><div><div className="eyebrow">Review status</div><h2>Under Community Review</h2></div><span className="demo-strip">Local demo notes only</span></div>
    <div className="community-note-list">{notes.map((note, index) => <article className="comment" key={`${note}-${index}`}><div className="sample-note-label">{index < 2 ? 'Example review note · demo' : 'Local demo contribution'}</div><p>{note}</p></article>)}</div>
    <Button className="button-secondary" onClick={onAddNote} data-testid="button-add-review-note"><MessageSquarePlus size={15} /> Add Review Note</Button>
    <p className="small-note">Notes are held in this page session only. They are not shared or sent to a review queue.</p>
  </div>;
}

function CaseDetail() {
  const { caseId } = useParams<{ caseId: string }>();
  const item = getDemoCases().find((record) => record.id === caseId);
  const [tab, setTab] = useState('What Was Observed');
  const [noteOpen, setNoteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(['The emotional framing appears notable, but additional information about the intended audience would be useful.', 'The synthetic-media indicators are documented, but intent cannot be established from the available evidence.']);
  const [toast, setToast] = useState('');
  if (!item) return <NotFound />;
  const relatedResearch = [...new Set(taxonomy.filter((entry) => entry.related.includes(item.id)).flatMap((entry) => entry.related).filter((id) => id !== item.id))].slice(0, 4);
  const evidenceStatus = item.status === 'Needs More Evidence' || item.id === 'NG-0024' ? 'Additional Evidence Needed' : 'Evidence documented';
  const showToast = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2400); };
  const share = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showToast('Case link copied to clipboard.');
    } catch {
      const copied = window.prompt('Clipboard access is unavailable. Copy this case link:', url);
      showToast(copied === null ? 'Sharing canceled.' : 'Case link ready to copy.');
    }
  };
  const download = () => {
    const report = `NeuroGuard Open — ${item.id}\nEarly-stage prototype · fictional demo record\n\nObservation: ${item.description}\nSource: ${item.source}\nStatus: ${item.status}\nPotential technique: ${item.technique}\n\nWhat remains uncertain: The available evidence does not establish creator intent or the precise audience-targeting mechanism.\n\nAI can assist analysis. Humans remain responsible for judgment.`;
    const blobUrl = URL.createObjectURL(new Blob([report], { type: 'text/plain' }));
    const anchor = document.createElement('a'); anchor.href = blobUrl; anchor.download = `${item.id}-research-record.txt`; anchor.click(); URL.revokeObjectURL(blobUrl);
    showToast('Report download prepared.');
  };
  const submitNote = (event: FormEvent) => { event.preventDefault(); if (note.trim()) { setNotes((current) => [...current, note.trim()]); setNote(''); setNoteOpen(false); showToast('Review note added.'); } };
  return (
    <Shell>
      <div className="detail-header"><div><div className="eyebrow">CASE #{item.id} / DEMO DATASET</div><div className="detail-title"><h1>{item.id === 'NG-0024' ? 'AI-generated video circulating on a social platform' : item.contentType}</h1><StatusBadge status={item.status} /></div><p className="detail-description">{item.description}</p></div><div className="detail-actions"><Button className="button-secondary" onClick={download} data-testid="button-download-report"><FileDown size={15} /> Download Report</Button><Button className="button-secondary" onClick={share} data-testid="button-share-case"><Share2 size={15} /> Share Case</Button><Button className="button-secondary" onClick={() => setEditOpen(true)} data-testid="button-suggest-edit"><Clipboard size={15} /> Suggest Edit</Button></div></div>
      <div className="detail-layout">
        <section className="panel case-overview"><div className="preview"><div className="preview-lines" /><div className="preview-label">Fictional demonstration record<br />No source media included</div></div><dl className="metadata"><div><dt>Content Type</dt><dd>{item.contentType}</dd></div><div><dt>Platform</dt><dd>{item.platform}</dd></div><div><dt>Date Found</dt><dd>{item.date}</dd></div><div><dt>Source</dt><dd>{item.source}</dd></div><div><dt>Evidence Status</dt><dd><span className="status-inline">{evidenceStatus}</span></dd></div></dl><div className="source-record"><strong>Sources</strong><p>{item.source}. This prototype does not include an external archive or independently verified media source.</p></div></section>
        <aside className="panel"><h3>Potential Techniques</h3><div className="tag-list">{item.tags.map((tag) => <Link className="tag tag-link" href={`/taxonomy?category=${encodeURIComponent(tag)}`} key={tag} data-testid={`link-technique-${tag.toLowerCase().replaceAll(' ', '-')}`}>{tag}</Link>)}</div><div className="notice">These labels are tentative research prompts. They do not constitute findings about manipulation or creator intent.</div><h3 className="timeline-heading">Evidence Timeline</h3>{item.id === 'NG-0024' ? <ol className="timeline timeline-expandable">{timeline.map((entry) => <li key={`${entry.date}-${entry.event}`}><details><summary><strong>{entry.date.replace(' 2026', '')}</strong>{entry.event}</summary><div className="timeline-detail"><span><b>Contributor</b>{entry.contributor}</span><span><b>Evidence / note</b>{entry.note}</span></div></details></li>)}</ol> : <p className="small-note">A detailed sample timeline is available on NG-0024. This record has no additional timeline events in the demo data.</p>}</aside>
      </div>
      <section className="panel tabs-panel"><div className="tabs" role="tablist" aria-label="Case detail sections">{['What Was Observed', 'Evidence', 'Analysis', 'Community Review'].map((name) => <button className="tab" role="tab" aria-selected={tab === name} key={name} onClick={() => setTab(name)} data-testid={`tab-${name.toLowerCase().replaceAll(' ', '-')}`}>{name}</button>)}</div><div className="tab-content"><DetailTab tab={tab} item={item} notes={notes} onAddNote={() => setNoteOpen(true)} /></div></section>
      <section className="panel related-research" aria-labelledby="related-research-title"><div><div className="eyebrow">Further reading in the demo dataset</div><h2 id="related-research-title">Related Research</h2><p>Compare this record with other cases linked by overlapping potential techniques.</p></div><div className="related-research-links">{relatedResearch.length ? relatedResearch.map((id) => <Link href={`/cases/${id}`} className="related-case-link" key={id} data-testid={`link-related-case-${id}`}>{id}<ArrowRight size={14} /></Link>) : <span className="small-note">No related demo records are available.</span>}</div></section>
      {noteOpen && <Modal title="Add Review Note" onClose={() => setNoteOpen(false)}><form onSubmit={submitNote}><div className="field"><label htmlFor="review-note">Research note</label><textarea id="review-note" className="textarea" value={note} onChange={(event) => setNote(event.target.value)} placeholder="Record an observation or question for other reviewers..." required data-testid="textarea-review-note" /></div><div className="modal-footer"><Button type="button" className="button-secondary" onClick={() => setNoteOpen(false)} data-testid="button-cancel-note">Cancel</Button><Button type="submit" className="button-primary" data-testid="button-save-note">Save Note</Button></div></form></Modal>}
      {editOpen && <Modal title="Suggest an Edit" onClose={() => setEditOpen(false)}><form onSubmit={(event) => { event.preventDefault(); setEditOpen(false); showToast('Edit suggestion saved for this prototype.'); }}><div className="field"><label htmlFor="edit-note">What should be clarified?</label><textarea id="edit-note" className="textarea" placeholder="Describe a source, context, or metadata clarification..." required data-testid="textarea-suggest-edit" /></div><div className="modal-footer"><Button type="button" className="button-secondary" onClick={() => setEditOpen(false)} data-testid="button-cancel-edit">Cancel</Button><Button type="submit" className="button-primary" data-testid="button-save-edit">Suggest Edit</Button></div></form></Modal>}
      {toast && <div className="toast" role="status" data-testid="status-toast">{toast}</div>}
    </Shell>
  );
}

type Submission = { url: string; contentType: string; platform: string; date: string; description: string; reason: string; technique: string; evidence: string };
const blankSubmission: Submission = { url: '', contentType: '', platform: '', date: '', description: '', reason: '', technique: '', evidence: '' };

function SubmitPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(blankSubmission);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const update = (key: keyof Submission, value: string) => setData((current) => ({ ...current, [key]: value }));
  const validate = () => {
    const next: Record<string, string> = {};
    if (step === 1) { if (!data.url.trim() || !/^https?:\/\//i.test(data.url)) next.url = 'Enter a full URL beginning with http:// or https://.'; if (!data.contentType) next.contentType = 'Choose a content type.'; if (!data.platform) next.platform = 'Choose a platform.'; }
    if (step === 2) { if (!data.date) next.date = 'Add the date found.'; if (!data.description.trim()) next.description = 'Describe what was observed.'; if (!data.reason.trim()) next.reason = 'Add context or an open research question.'; }
    if (step === 3 && !data.technique) next.technique = 'Choose a potential technique.';
    if (step === 4 && !data.evidence.trim()) next.evidence = 'Add at least one evidence note or identify an evidence gap.';
    setErrors(next); return Object.keys(next).length === 0;
  };
  const next = () => { if (validate()) { setErrors({}); setStep((current) => Math.min(5, current + 1)); } };
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const currentRecords = getDemoCases();
    const nextNumber = Math.max(24, ...currentRecords.map((record) => Number(record.id.replace('NG-', '')) || 0)) + 1;
    const id = `NG-${String(nextNumber).padStart(4, '0')}`;
    const found = new Date(`${data.date}T12:00:00`);
    const formattedDate = Number.isNaN(found.getTime()) ? data.date : found.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const record: CaseRecord = {
      id,
      description: data.description.trim(),
      contentType: data.contentType,
      technique: data.technique,
      status: 'Under Community Review',
      date: formattedDate,
      platform: data.platform,
      source: data.url.trim(),
      tags: [data.technique],
      context: data.reason.trim(),
      evidence: data.evidence.trim(),
    };
    try {
      saveDemoCase(record);
      setSubmissionId(id);
      setSubmissionError('');
      setSubmitted(true);
    } catch {
      setSubmissionError('This browser could not save the demo case. Check local storage settings and try again.');
    }
  };
  const field = (key: keyof Submission, label: string, type = 'text', placeholder = '') => <div className="field"><label htmlFor={`submit-${key}`}>{label}</label><input id={`submit-${key}`} className="input" type={type} value={data[key]} placeholder={placeholder} onChange={(event) => update(key, event.target.value)} data-testid={`input-submit-${key}`} />{errors[key] && <span className="error-text">{errors[key]}</span>}</div>;
  const formattedDate = data.date ? new Date(`${data.date}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not provided';
  return (
    <Shell>
      <div className="form-shell"><div className="page-header"><div className="page-header-copy"><div className="eyebrow">Contribution / local demo workflow</div><h1>Submit a Case</h1><p>Document content and context for research and human review.</p></div><div className="demo-strip">Early-stage prototype · Demo Dataset</div></div>
        <div className="notice-strong submission-boundary">Submitting a case does not mean that manipulation has been established. Cases are documented for research and review. This prototype saves submissions only in this browser.</div>
        {submitted ? <div className="form-card success" data-testid="submission-success"><div className="success-mark"><Check size={27} /></div><div className="eyebrow">Case submitted for review.</div><div className="case-number">{submissionId}</div><p>Your demo case is saved in this browser’s dataset. No external service was contacted.</p><div className="success-actions"><Link href={`/cases/${submissionId}`} className="button button-secondary" data-testid="link-success-detail">Open demo case</Link><Link href="/cases" className="button button-primary" data-testid="link-success-cases">Return to Cases</Link></div></div> : <><div className="stepper" aria-label={`Submission step ${step} of 5`}>{['Content', 'Context', 'Potential Techniques', 'Evidence', 'Review'].map((label, index) => <div className="step" key={label}><div className={step >= index + 1 ? 'step active' : 'step'}><span className="step-index">{String(index + 1).padStart(2, '0')}</span>{label}</div>{index < 4 && <div className="step-line" />}</div>)}</div>
          <form className="form-card" onSubmit={submit} noValidate>
            {step === 1 && <><h2>01 / Content</h2><p>Start with the content format and its source location.</p><div className="form-fields">{field('url', 'Content URL', 'url', 'https://example.org/content')}<div className="form-two"><div className="field"><label htmlFor="submit-contentType">Content Type</label><select id="submit-contentType" className="select" value={data.contentType} onChange={(event) => update('contentType', event.target.value)} data-testid="select-submit-content-type"><option value="">Choose a type</option><option>AI-generated video</option><option>Synthetic image</option><option>AI-generated article</option><option>Synthetic audio</option><option>AI-generated text</option><option>AI-assisted edit</option></select>{errors.contentType && <span className="error-text">{errors.contentType}</span>}</div><div className="field"><label htmlFor="submit-platform">Platform</label><select id="submit-platform" className="select" value={data.platform} onChange={(event) => update('platform', event.target.value)} data-testid="select-submit-platform"><option value="">Choose a platform</option><option>Social Media</option><option>Video platform</option><option>News site</option><option>Messaging channel</option><option>Community forum</option><option>Chat interface</option><option>Other</option></select>{errors.platform && <span className="error-text">{errors.platform}</span>}</div></div></div></>}
            {step === 2 && <><h2>02 / Context</h2><p>Record what you observed and what context would help someone else assess it.</p><div className="form-fields">{field('date', 'Date Found', 'date')}<div className="field"><label htmlFor="submit-description">Observation</label><textarea id="submit-description" className="textarea" value={data.description} onChange={(event) => update('description', event.target.value)} placeholder="Describe visible content without inferring intent." data-testid="textarea-submit-description" />{errors.description && <span className="error-text">{errors.description}</span>}</div><div className="field"><label htmlFor="submit-reason">Context / Open Question</label><textarea id="submit-reason" className="textarea" value={data.reason} onChange={(event) => update('reason', event.target.value)} placeholder="Record relevant context, uncertainties, or what needs further investigation." data-testid="textarea-submit-reason" />{errors.reason && <span className="error-text">{errors.reason}</span>}</div></div></>}
            {step === 3 && <><h2>03 / Potential Techniques</h2><p>Choose a tentative research label. The label is not evidence or a finding.</p><div className="form-fields"><div className="field"><label htmlFor="submit-technique">Potential Technique</label><select id="submit-technique" className="select" value={data.technique} onChange={(event) => update('technique', event.target.value)} data-testid="select-submit-technique"><option value="">Choose a potential technique</option>{taxonomy.map((entry) => <option key={entry.name}>{entry.name}</option>)}</select>{errors.technique && <span className="error-text">{errors.technique}</span>}</div><div className="notice">Categories may overlap. Select the closest question for review, not a definitive classification.</div></div></>}
            {step === 4 && <><h2>04 / Evidence</h2><p>List what another reviewer could inspect—or identify what is not available.</p><div className="form-fields"><div className="field"><label htmlFor="submit-evidence">Evidence / Notes</label><textarea id="submit-evidence" className="textarea" value={data.evidence} onChange={(event) => update('evidence', event.target.value)} placeholder="List source captures, metadata, comparison material, or evidence gaps." data-testid="textarea-submit-evidence" />{errors.evidence && <span className="error-text">{errors.evidence}</span>}</div></div></>}
            {step === 5 && <><h2>05 / Review</h2><p>Check the structured record before saving a local demo case.</p><dl className="submission-summary">
              <div><dt>Content</dt><dd>{data.contentType} · {data.platform}</dd></div>
              <div><dt>Source</dt><dd>{data.url}</dd></div>
              <div><dt>Date found</dt><dd>{formattedDate}</dd></div>
              <div><dt>Observation</dt><dd>{data.description}</dd></div>
              <div><dt>Context / open question</dt><dd>{data.reason}</dd></div>
              <div><dt>Potential technique</dt><dd>{data.technique}</dd></div>
              <div><dt>Evidence / notes</dt><dd>{data.evidence}</dd></div>
            </dl><div className="notice-strong">Submitting a case does not mean that manipulation has been established. This local demo case is not shared with other users.</div>{submissionError && <p className="error-text" role="alert">{submissionError}</p>}</>}
            <div className="form-footer">{step > 1 ? <Button type="button" className="button-secondary" onClick={() => { setErrors({}); setStep((current) => current - 1); }} data-testid="button-submit-back"><ArrowLeft size={15} /> Back</Button> : <span />}{step < 5 ? <Button type="button" className="button-primary" onClick={next} data-testid="button-submit-next">Continue <ArrowRight size={15} /></Button> : <Button type="submit" className="button-primary" data-testid="button-submit-review">Submit Case <Check size={15} /></Button>}</div>
          </form></>}
      </div>
    </Shell>
  );
}

function TaxonomyPage() {
  const selected = new URLSearchParams(window.location.search).get('category');
  const [expanded, setExpanded] = useState<string | null>(() => taxonomy.find((entry) => entry.name.toLowerCase() === selected?.toLowerCase())?.name ?? null);
  return <Shell>
    <div className="page-header"><div className="page-header-copy"><div className="eyebrow">Shared language / working framework</div><h1>Potential Technique Taxonomy</h1><p>A research framework for describing questions about potential AI-enabled influence.</p></div><div className="demo-strip">Early-stage prototype · Working taxonomy</div></div>
    <div className="notice taxonomy-notice">This is a working research taxonomy. Categories may overlap and should not be interpreted as definitive findings.</div>
    <div className="taxonomy-grid">{taxonomy.map((entry) => {
      const isOpen = expanded === entry.name;
      const id = `taxonomy-details-${entry.name.toLowerCase().replaceAll(' ', '-')}`;
      return <article className="taxonomy-card" key={entry.name} data-testid={`card-taxonomy-${entry.name.toLowerCase().replaceAll(' ', '-')}`}>
        <button className="taxonomy-toggle" type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setExpanded(isOpen ? null : entry.name)} data-testid={`button-taxonomy-${entry.name.toLowerCase().replaceAll(' ', '-')}`}>
          <span className="taxonomy-top"><span><span className="taxonomy-number">{String(taxonomy.indexOf(entry) + 1).padStart(2, '0')}</span><span className="taxonomy-toggle-title">{entry.name}</span></span>{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
          <span className="taxonomy-definition">{entry.definition}</span>
        </button>
        {isOpen && <div className="taxonomy-expanded" id={id}>
          <div className="taxonomy-detail-columns">
            <div><strong>Examples</strong><p>{entry.examples}</p></div>
            <div><strong>Indicators</strong><p>{entry.indicators}</p></div>
            <div><strong>Limitations</strong><p>{entry.limitations}</p></div>
            <div><strong>Research References</strong><p>{entry.references.length ? entry.references.join(' · ') : 'No citable research references are attached to this prototype category. Add a stable source before using this category as support for a research claim.'}</p></div>
          </div>
          <div><strong>Related Cases</strong><div className="related-links">{entry.related.map((id) => <Link href={`/cases/${id}`} key={id} data-testid={`link-related-${id}`}>{id}</Link>)}</div></div>
        </div>}
      </article>;
    })}</div>
    <div className="notice" style={{ marginTop: 24 }}>Taxonomy labels are prompts for human research, not automated classifications, proof of intent, or findings about a case.</div>
  </Shell>;
}

function NotFound() {
  return <Shell><div className="empty"><div className="eyebrow">404 / record not found</div><h2 style={{ margin: '12px 0' }}>This page is not in the research set.</h2><Link href="/" className="button button-primary">Return home</Link></div></Shell>;
}

function Router() {
  return <ErrorBoundary resetKey={useLocation()[0]}><Switch><Route path="/" component={Home} /><Route path="/dashboard" component={Dashboard} /><Route path="/cases" component={CasesPage} /><Route path="/cases/:caseId" component={CaseDetail} /><Route path="/submit" component={SubmitPage} /><Route path="/taxonomy" component={TaxonomyPage} /><Route path="/methodology">{() => <Shell><MethodologyContent /></Shell>}</Route><Route path="/project">{() => <Shell><ProjectContent /></Shell>}</Route><Route component={NotFound} /></Switch></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;