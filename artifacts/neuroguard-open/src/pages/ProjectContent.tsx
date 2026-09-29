import './research-pages.css';

const workflowSteps = [
  ['01', 'Document', 'Capture the content, source, platform, date, context, and evidence without collapsing them into a conclusion.'],
  ['02', 'Describe', 'Separate direct observations from interpretations, uncertainties, and questions for further research.'],
  ['03', 'Review', 'Make a record available for careful reading, challenge, evidence requests, and alternative explanations.'],
  ['04', 'Research', 'Compare records and patterns while keeping taxonomy labels tentative and the underlying evidence visible.'],
];

const roadmap: Array<[string, string[]]> = [
  ['Now', ['Working prototype', 'Case documentation', 'Evidence workflow', 'Initial taxonomy']],
  ['Next', ['Structured database', 'Community review', 'Open datasets', 'Methodology publication']],
  ['Later', ['Public API', 'Research integrations', 'Advanced research tooling', 'Multilingual resources']],
];

export default function ProjectContent() {
  return (
    <article className="research-page research-page-project">
      <div className="research-page-inner">
        <header className="research-page-header">
          <div className="research-kicker">NeuroGuard Open / Project</div>
          <h1>Infrastructure for careful records about AI-enabled influence.</h1>
          <p className="research-intro">
            NeuroGuard is an early-stage open-source research project for documenting potential influence patterns, the evidence around them, and the uncertainty that remains.
          </p>
          <div className="research-boundary" role="note">
            <span className="research-boundary-label">Status</span>
            <p>This is a frontend-only prototype with fictional data and local demo interactions. It is not an AI detector, a shared database, or a functioning submission service.</p>
          </div>
        </header>

        <section className="research-section" aria-labelledby="project-purpose-title">
          <div className="research-project-intent">
            <div className="research-section-heading">
              <div className="research-section-index">01 / Purpose</div>
              <h2 id="project-purpose-title">Why NeuroGuard exists</h2>
            </div>
            <div className="research-intent-aside">
              <h3>A gap in the record</h3>
              <p>Public conversations about AI-enabled influence often move faster than the evidence. NeuroGuard proposes a disciplined place to preserve what was encountered, what can be checked, and what should not yet be claimed.</p>
            </div>
          </div>
          <div className="research-project-intent" style={{ marginTop: '38px' }}>
            <p>It is designed for researchers, journalists, civil-society investigators, educators, and other people who need to examine potentially influential content without treating an automated label as a final answer.</p>
            <p>Its purpose is modest and practical: improve the quality of documentation so later review can be more informed, more transparent, and more honest about uncertainty.</p>
          </div>
        </section>

        <section className="research-section" aria-labelledby="project-workflow-title">
          <div className="research-section-heading">
            <div className="research-section-index">02 / Working model</div>
            <h2 id="project-workflow-title">From documentation to review</h2>
            <p>The proposed workflow keeps evidence and interpretation adjacent, while leaving room for people to disagree about what a record means.</p>
          </div>
          <div className="research-workflow">
            {workflowSteps.map(([number, title, description]) => (
              <article className="research-workflow-step" key={title}>
                <div className="research-workflow-number">{number}</div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" aria-labelledby="project-philosophy-title">
          <div className="research-philosophy">
            <div>
              <div className="research-section-index">03 / Philosophy</div>
              <h2 id="project-philosophy-title">Open by default, careful by design</h2>
            </div>
            <div className="research-philosophy-copy">
              <p className="research-philosophy-statement">The project favors inspectable records over confident-looking conclusions.</p>
              <p>Open-source means the assumptions, field definitions, taxonomy, and review practices should be available for scrutiny and revision. It does not mean every record is automatically public, complete, or correct.</p>
              <p>Human judgment remains responsible for interpreting evidence. NeuroGuard can organize a research process; it cannot infer intent, decide that content is manipulative, or establish wrongdoing.</p>
            </div>
          </div>
        </section>

        <section className="research-section" aria-labelledby="project-research-title">
          <div className="research-section-heading">
            <div className="research-section-index">04 / Research and open data</div>
            <h2 id="project-research-title">A research question before a product roadmap.</h2>
            <p>NeuroGuard is intended to become open research infrastructure, not simply a web application with a case list.</p>
          </div>
          <div className="research-research-grid">
            <article>
              <div className="research-label">Research question</div>
              <h3>How can people document AI-enabled influence without turning uncertain evidence into an automated verdict?</h3>
              <p>The project treats structured records, provenance, disagreement, and uncertainty as first-class research material.</p>
            </article>
            <article>
              <div className="research-label">Why open source?</div>
              <h3>Methods should be inspectable before they are trusted.</h3>
              <p>Open code, field definitions, taxonomy decisions, and review practices give researchers and contributors a way to challenge the assumptions behind the tool.</p>
            </article>
            <article>
              <div className="research-research-status">Planned direction</div>
              <h3>Open datasets with provenance and context.</h3>
              <p>Future public datasets would need careful consent, source protection, moderation, and explicit uncertainty. No shared dataset exists in this prototype.</p>
            </article>
            <article>
              <div className="research-research-status">How to contribute</div>
              <h3>Start with a better record.</h3>
              <p>In this demo, explore the cases, inspect the methodology, use the taxonomy, and submit a fictional local record. A public contribution process is planned, not yet available.</p>
            </article>
          </div>
        </section>

        <section className="research-section" aria-labelledby="project-status-title">
          <div className="research-prototype">
            <div className="research-prototype-copy">
              <div className="research-section-index">05 / Honest prototype status</div>
              <h2 id="project-status-title">A useful interface, not a finished service.</h2>
              <p>The current build is a frontend-only demonstration. Its records are fictional, and interactions are local to the demo. Nothing here should be read as a live dataset or as evidence about real-world content.</p>
            </div>
            <ul className="research-prototype-list">
              <li>Local demo notes only</li>
              <li>No backend or persistent database</li>
              <li>No shared submissions or community queue</li>
              <li>No automated AI detector</li>
              <li>No claim of actual research findings</li>
            </ul>
          </div>
        </section>

        <section className="research-section" aria-labelledby="project-roadmap-title">
          <div className="research-section-heading">
            <div className="research-section-index">06 / Direction</div>
            <h2 id="project-roadmap-title">Roadmap</h2>
            <p>The following items describe intended future work. They are planned, not available in this prototype.</p>
          </div>
          <div className="research-roadmap">
            {roadmap.map(([phase, items]) => (
              <article className="research-roadmap-row" key={phase}>
                <div className="research-roadmap-phase">{phase}</div>
                <div>
                  <h3>{phase === 'Now' ? 'The foundation' : phase === 'Next' ? 'The shared layer' : 'The wider research surface'}</h3>
                  <ul className="research-roadmap-list">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {phase !== 'Now' && <p className="research-planned">Planned — not available</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section" aria-labelledby="project-next-title">
          <div className="research-closing">
            <div className="research-section-index">07 / Where it stands</div>
            <h2 id="project-next-title">A small project with a deliberately clear boundary.</h2>
            <p>NeuroGuard is being shaped as research infrastructure, not as a promise of certainty. The next useful step is to make the method and data model more explicit before adding scale.</p>
            <p className="research-repository-note">The GitHub repository is not configured yet. No repository URL or credentials are presented here; the main application owns the single replaceable URL constant when one is ready.</p>
          </div>
        </section>
      </div>
    </article>
  );
}