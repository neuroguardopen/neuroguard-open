import './research-pages.css';

const documentedFields = [
  ['Content', 'A concise account of what is present: format, message, visible edits, and relevant claims.'],
  ['Source', 'The location, account, channel, or archive where the material was encountered, with the source record kept distinct from the content itself.'],
  ['Platform and date', 'The platform context and the date found, published, captured, or otherwise established. Unknown dates remain unknown.'],
  ['Context', 'Audience, surrounding posts, caption, distribution setting, and any relevant production or circulation history.'],
  ['Evidence', 'Links, captures, metadata, comparisons, transcripts, and other material that another researcher could inspect.'],
  ['Potential techniques', 'Tentative labels from the initial taxonomy, used to organize questions rather than certify a finding.'],
  ['Research notes', 'Open questions, alternative explanations, evidence gaps, and observations that do not fit a structured field.'],
  ['Review status', 'A visible indication of whether a record is open for review, needs more evidence, or remains an active research thread.'],
  ['Related research', 'Connections to similar records, taxonomy entries, or questions that may help a later comparison.'],
];

const limits = [
  ['Intent', 'A record cannot establish what a creator, distributor, or audience intended.'],
  ['AI as manipulation', 'The presence of AI generation or modification is not, by itself, evidence of manipulation.'],
  ['Wrongdoing', 'Documentation does not determine whether conduct is unlawful, harmful, or otherwise wrong.'],
  ['Replacement for review', 'A structured record supports human review; it does not replace domain expertise, source checking, or judgment.'],
  ['Labels as proof', 'Taxonomy labels describe a research question or possible pattern. They are not proof that the pattern occurred.'],
];

const evidencePractices = [
  ['Provenance', 'Record where an item came from and when it was captured.'],
  ['Specificity', 'Separate what is visible or recorded from what remains uncertain.'],
  ['Corroboration', 'Keep comparisons and supporting material close to the claim they inform.'],
  ['Alternatives', 'Record plausible explanations that do not rely on an influence hypothesis.'],
];

export default function MethodologyContent() {
  return (
    <article className="research-page research-page-methodology">
      <div className="research-page-inner">
        <header className="research-page-header">
          <div className="research-kicker">NeuroGuard Open / Methodology</div>
          <h1>A record is not a verdict.</h1>
          <p className="research-intro">
            NeuroGuard is early-stage research infrastructure for documenting potential AI-enabled influence with enough context for people to examine it carefully.
          </p>
          <div className="research-boundary" role="note">
            <span className="research-boundary-label">Method boundary</span>
            <p>NeuroGuard helps humans record evidence, potential techniques, uncertainty, and review. It does not detect manipulation, infer intent, or establish wrongdoing.</p>
          </div>
        </header>

        <section className="research-section" aria-labelledby="methodology-record-title">
          <div className="research-section-heading">
            <div className="research-section-index">01 / The case record</div>
            <h2 id="methodology-record-title">What cases document</h2>
            <p>A case is a structured starting point for research. It preserves the source context and the limits of what can be said about the material.</p>
          </div>
          <dl className="research-record-grid">
            {documentedFields.map(([term, description]) => (
              <div className="research-record-item" key={term}>
                <dt><h3>{term}</h3></dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="research-section" aria-labelledby="methodology-observation-title">
          <div className="research-section-heading">
            <div className="research-section-index">02 / Claims and language</div>
            <h2 id="methodology-observation-title">Observation before interpretation</h2>
            <p>The workflow asks contributors to make the step from description to interpretation visible. That distinction keeps a plausible explanation from becoming an unsupported fact.</p>
          </div>
          <div className="research-comparison">
            <article className="research-comparison-card">
              <div className="research-comparison-label">Observation</div>
              <p className="research-quote">“The video contains synthetic visual elements.”</p>
              <p className="research-quote-note">A description of what the record presents or what is visible in the material.</p>
            </article>
            <article className="research-comparison-card">
              <div className="research-comparison-label">Interpretation</div>
              <p className="research-quote">“The content may have been generated or modified using AI.”</p>
              <p className="research-quote-note">A tentative explanation that should remain open to evidence, alternatives, and review.</p>
            </article>
          </div>
        </section>

        <section className="research-section" aria-labelledby="methodology-limits-title">
          <div className="research-limit-layout">
            <div className="research-section-heading">
              <div className="research-section-index">03 / Scope</div>
              <h2 id="methodology-limits-title">What the project does not determine</h2>
              <p className="research-limit-lede">The absence of a conclusion is a deliberate part of the method, not a missing feature.</p>
            </div>
            <ul className="research-limit-list">
              {limits.map(([title, description]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="research-section" aria-labelledby="methodology-evidence-title">
          <div className="research-section-heading">
            <div className="research-section-index">04 / Confidence and traceability</div>
            <h2 id="methodology-evidence-title">Evidence and uncertainty stay together</h2>
            <p>Evidence is useful when its provenance and limits are visible. A record should make it possible to ask what is known, what is inferred, and what would change the assessment.</p>
          </div>
          <div className="research-evidence-layout">
            <aside className="research-evidence-note">
              <h3>Uncertainty is a field</h3>
              <p>Contributors can note missing source material, incomplete context, conflicting accounts, uncertain dates, and other reasons a claim should be treated cautiously. “Unknown” is a valid research state.</p>
            </aside>
            <ul className="research-evidence-list" aria-label="Evidence practices">
              {evidencePractices.map(([title, description]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="research-section" aria-labelledby="methodology-review-title">
          <div className="research-section-heading">
            <div className="research-section-index">05 / Review posture</div>
            <h2 id="methodology-review-title">Community review is an intended workflow</h2>
            <p>Review means reading the record, challenging its assumptions, adding evidence, and making disagreement legible. It is not a vote that turns a tentative label into a finding.</p>
          </div>
          <div className="research-review-grid">
            <article className="research-review-column">
              <div className="research-review-status">
                <span className="research-status research-status-current">Available now</span>
              </div>
              <h3>What this local prototype supports</h3>
              <p>The frontend demo supports local demo notes and interactions against fictional records. Those notes are for interface exploration only. They are not shared submissions, a persistent community queue, or a live review service.</p>
            </article>
            <article className="research-review-column">
              <div className="research-review-status">
                <span className="research-status">Planned</span>
              </div>
              <h3>What shared review would add</h3>
              <p>A future implementation could support attributable review histories, disagreement and evidence requests, careful moderation, and shared records with explicit provenance and permissions. These capabilities are not available in this prototype.</p>
            </article>
          </div>
        </section>
      </div>
    </article>
  );
}