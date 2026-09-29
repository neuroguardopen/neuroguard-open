export type CaseStatus =
  | 'Under Community Review'
  | 'Open Research'
  | 'Under Review'
  | 'Needs More Evidence';

export type CaseRecord = {
  id: string;
  description: string;
  contentType: string;
  technique: string;
  status: CaseStatus;
  date: string;
  platform: string;
  source: string;
  tags: string[];
  context?: string;
  evidence?: string;
};

export const cases: CaseRecord[] = [
  {
    id: 'NG-0024',
    description: 'AI-generated video circulating on a social platform with audience-specific messaging.',
    contentType: 'AI-generated video',
    technique: 'Emotional Influence',
    status: 'Under Community Review',
    date: '18 September 2026',
    platform: 'Social Media',
    source: 'Fictional demonstration source',
    tags: ['Emotional Influence', 'Personalized Persuasion', 'Synthetic Media', 'Context Manipulation'],
  },
  {
    id: 'NG-0023',
    description: 'Synthetic image pairing a familiar landmark with an unverified event caption.',
    contentType: 'Synthetic image',
    technique: 'Context Manipulation',
    status: 'Open Research',
    date: '15 September 2026',
    platform: 'Image board',
    source: 'Fictional demonstration source',
    tags: ['Context Manipulation', 'Synthetic Media'],
  },
  {
    id: 'NG-0022',
    description: 'AI-generated article with different calls to action shown to audience segments.',
    contentType: 'AI-generated article',
    technique: 'Personalized Persuasion',
    status: 'Under Review',
    date: '12 September 2026',
    platform: 'News site',
    source: 'Fictional demonstration source',
    tags: ['Personalized Persuasion', 'Behavioral Targeting'],
  },
  {
    id: 'NG-0021',
    description: 'Synthetic audio clip attributed to a public speaker without a source record.',
    contentType: 'Synthetic audio',
    technique: 'Synthetic media',
    status: 'Needs More Evidence',
    date: '09 September 2026',
    platform: 'Messaging channel',
    source: 'Fictional demonstration source',
    tags: ['Synthetic Media', 'Deceptive Content'],
  },
  {
    id: 'NG-0020',
    description: 'Short-form campaign copy uses urgency cues around a local service disruption.',
    contentType: 'AI-generated text',
    technique: 'Behavioral Targeting',
    status: 'Open Research',
    date: '06 September 2026',
    platform: 'Community forum',
    source: 'Fictional demonstration source',
    tags: ['Behavioral Targeting', 'Emotional Influence'],
  },
  {
    id: 'NG-0019',
    description: 'Edited interview excerpt omits surrounding remarks and shifts the apparent meaning.',
    contentType: 'AI-assisted edit',
    technique: 'Context Manipulation',
    status: 'Under Review',
    date: '02 September 2026',
    platform: 'Video platform',
    source: 'Fictional demonstration source',
    tags: ['Context Manipulation', 'Hidden Influence'],
  },
  {
    id: 'NG-0018',
    description: 'Generated portrait and testimonial appear together in a product recommendation thread.',
    contentType: 'Synthetic image',
    technique: 'Deceptive Content',
    status: 'Needs More Evidence',
    date: '29 August 2026',
    platform: 'Social Media',
    source: 'Fictional demonstration source',
    tags: ['Deceptive Content', 'Synthetic Media'],
  },
  {
    id: 'NG-0017',
    description: 'Conversational assistant repeats reassurance tailored to a user’s stated worry.',
    contentType: 'AI-generated text',
    technique: 'Hidden Influence',
    status: 'Open Research',
    date: '25 August 2026',
    platform: 'Chat interface',
    source: 'Fictional demonstration source',
    tags: ['Hidden Influence', 'Emotional Influence'],
  },
  {
    id: 'NG-0016',
    description: 'Generated explainer presents one policy option with vivid personal anecdotes.',
    contentType: 'AI-generated article',
    technique: 'Emotional Influence',
    status: 'Under Community Review',
    date: '21 August 2026',
    platform: 'Newsletter',
    source: 'Fictional demonstration source',
    tags: ['Emotional Influence', 'Personalized Persuasion'],
  },
  {
    id: 'NG-0015',
    description: 'Voice-over translation changes emphasis in a clip circulated across language groups.',
    contentType: 'AI-generated audio',
    technique: 'Personalized Persuasion',
    status: 'Under Review',
    date: '17 August 2026',
    platform: 'Messaging channel',
    source: 'Fictional demonstration source',
    tags: ['Personalized Persuasion', 'Context Manipulation'],
  },
];

export const taxonomy = [
  {
    name: 'Emotional Influence',
    definition: 'Content designed or adapted to evoke emotional responses.',
    examples: 'Urgency cues, fear appeals, reassurance, or emotionally loaded framing.',
    indicators: 'Emotionally salient language; urgency or threat framing; a marked change in tone across audience-specific versions.',
    limitations: 'Emotion is common in ordinary communication. These indicators do not establish intent, audience effect, or wrongdoing.',
    references: [],
    related: ['NG-0024', 'NG-0016'],
  },
  {
    name: 'Personalized Persuasion',
    definition: 'Messaging adapted to specific audiences or individuals.',
    examples: 'Audience-specific language, tailored calls to action, or profile-informed copy.',
    indicators: 'Comparable versions with materially different messages; evidence of audience segmentation or personalization.',
    limitations: 'Differences may reflect translation, accessibility, editorial testing, or user choice. A target audience alone is not evidence of harm.',
    references: [],
    related: ['NG-0024', 'NG-0022', 'NG-0015'],
  },
  {
    name: 'Behavioral Targeting',
    definition: 'Content designed around predicted or desired audience behavior.',
    examples: 'Prompts intended to increase a click, share, purchase, or immediate response.',
    indicators: 'Behavior-contingent prompts, repeated calls to action, or documented use of behavioral signals.',
    limitations: 'Calls to action are widespread. Evidence of a prompt does not show how it was selected or what effect it had.',
    references: [],
    related: ['NG-0022', 'NG-0020'],
  },
  {
    name: 'Deceptive Content',
    definition: 'Content that may create misleading impressions through generated or altered material.',
    examples: 'Unverified attribution, fabricated testimonials, or synthetic media presented as ordinary media.',
    indicators: 'A mismatch between a claim and its source record; altered attribution; missing provenance or contradictory context.',
    limitations: 'Missing provenance is not proof of deception. Verify material against reliable primary sources before making claims.',
    references: [],
    related: ['NG-0021', 'NG-0018'],
  },
  {
    name: 'Synthetic Media',
    definition: 'AI-generated or AI-modified images, audio or video.',
    examples: 'Generated portraits, voice synthesis, face replacement, or altered footage.',
    indicators: 'Provenance records, production disclosures, source files, or independently corroborated technical analysis.',
    limitations: 'Visual artifacts and detector outputs can be unreliable. Synthetic media is not inherently manipulative.',
    references: [],
    related: ['NG-0024', 'NG-0021', 'NG-0018'],
  },
  {
    name: 'Hidden Influence',
    definition: 'Influence mechanisms that may not be immediately visible to audiences.',
    examples: 'Subtle conversational steering, undisclosed targeting, or buried framing choices.',
    indicators: 'Repeated steering patterns, undocumented targeting, or material information hidden from the intended audience.',
    limitations: 'A mechanism may be difficult to observe from a single artifact. Do not infer concealment or intent without contextual evidence.',
    references: [],
    related: ['NG-0019', 'NG-0017'],
  },
  {
    name: 'Context Manipulation',
    definition: 'Changing, removing or selectively presenting context.',
    examples: 'Cropping an exchange, changing a caption, or presenting an excerpt without its source.',
    indicators: 'A source excerpt that omits surrounding material; captions that conflict with original context; missing dates or attribution.',
    limitations: 'Editing and summarization can be routine. Compare against the original record and document what remains unavailable.',
    references: [],
    related: ['NG-0024', 'NG-0023', 'NG-0019'],
  },
];

export const timeline = [
  { date: '18 September 2026', event: 'Content discovered', contributor: 'Demo contributor', note: 'A fictional discovery record was created to demonstrate the documentation workflow.' },
  { date: '18 September 2026', event: 'Source archived', contributor: 'Demo contributor', note: 'The source field is marked as fictional. No original media or external source is included in this prototype.' },
  { date: '19 September 2026', event: 'Metadata reviewed', contributor: 'Demo contributor', note: 'Metadata review is represented as a sample event; no forensic verification is claimed.' },
  { date: '20 September 2026', event: 'Contextual comparison added', contributor: 'Demo contributor', note: 'A comparison note is included to show where related context would be recorded.' },
  { date: '21 September 2026', event: 'Community review opened', contributor: 'Demo contributor', note: 'This sample status does not indicate review by an actual community or researcher.' },
  { date: '23 September 2026', event: 'Research note added', contributor: 'Demo contributor', note: 'The example note records an evidence gap and leaves creator intent unresolved.' },
];

const submissionStorageKey = 'neuroguard-open-demo-cases';

export function getDemoCases(): CaseRecord[] {
  if (typeof window === 'undefined') return cases;
  try {
    const stored: unknown = JSON.parse(window.localStorage.getItem(submissionStorageKey) ?? '[]');
    if (!Array.isArray(stored)) return cases;
    const valid = stored.filter((entry): entry is CaseRecord =>
      !!entry &&
      typeof entry === 'object' &&
      typeof entry.id === 'string' &&
      typeof entry.description === 'string' &&
      typeof entry.contentType === 'string' &&
      typeof entry.technique === 'string' &&
      typeof entry.status === 'string' &&
      typeof entry.date === 'string' &&
      typeof entry.platform === 'string' &&
      typeof entry.source === 'string' &&
      Array.isArray(entry.tags),
    );
    return [...valid, ...cases];
  } catch {
    return cases;
  }
}

export function saveDemoCase(record: CaseRecord): void {
  if (typeof window === 'undefined') throw new Error('Demo submissions require a browser session.');
  const saved = getDemoCases().filter((item) => !cases.some((demoCase) => demoCase.id === item.id));
  window.localStorage.setItem(submissionStorageKey, JSON.stringify([record, ...saved]));
}

export const chartPoints = [
  { label: 'May', value: 128 },
  { label: 'Jun', value: 151 },
  { label: 'Jul', value: 174 },
  { label: 'Aug', value: 211 },
  { label: 'Sep', value: 248 },
];
