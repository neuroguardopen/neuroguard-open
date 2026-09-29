# NeuroGuard Open — Data Model

## Purpose

The NeuroGuard data model defines the basic structure used to document, investigate, review, and research cases involving potentially manipulative AI-generated or AI-assisted content.

The model is designed to preserve context, evidence, uncertainty, and human review rather than reducing cases to a single automated classification.

---

## Core Case Record

Each documented case should contain the following information where available.

### Case Identification

* Case ID
* Title
* Date created
* Last updated
* Case status
* Review status

Example:

```text
Case ID: NG-0024
Status: Under Review
Review Status: Community Review
```

---

## Content Information

A case may include:

* Content type
* Content URL
* Platform
* Publication or discovery date
* Content description
* Archived or preserved copy where appropriate
* Relevant screenshots or media references

Possible content types include:

* Text
* Image
* Audio
* Video
* Mixed media
* Advertisement
* Social media post
* Website content
* Other

---

## Context

Cases should record the available context surrounding the content.

This may include:

* Where the content was discovered
* Intended or apparent audience
* Relevant surrounding events
* Distribution context
* Related content
* Known publication information
* Available information about authorship or sponsorship

Context should be recorded separately from interpretation.

---

## Potential Techniques

Cases may be associated with one or more taxonomy categories.

Possible categories include:

* Emotional Influence
* Personalized Persuasion
* Behavioral Targeting
* Deceptive Content
* Synthetic Media
* Hidden Influence
* Context Manipulation

A category indicates an area for investigation.

It does not automatically establish that manipulation, deception, malicious intent, or harm occurred.

---

## Evidence

Evidence should be recorded as individual evidence items.

Each evidence item may contain:

* Evidence ID
* Description
* Source
* Source URL
* Date collected
* Contributor
* Evidence type
* Reliability notes
* Related observation

Possible evidence types include:

* Original content
* Screenshot
* Archived page
* Metadata
* Public statement
* Research publication
* Platform information
* Technical analysis
* Related content

---

## Analysis

Analysis should separate observation from interpretation.

Each analysis record may include:

### What Was Observed?

A factual description of what can be directly established.

### Potential Interpretation

A possible explanation of what the evidence may indicate.

### Supporting Evidence

Evidence supporting the interpretation.

### Alternative Interpretation

Other reasonable explanations that should be considered.

### Open Questions

Important questions that remain unresolved.

This structure helps prevent premature conclusions.

---

## Review

Cases may receive community or expert review.

A review record may include:

* Reviewer
* Review date
* Reviewer role
* Key observations
* Evidence concerns
* Alternative interpretations
* Suggested changes
* Review status

Reviewers should be able to disagree with an interpretation while preserving the original record.

---

## Research References

Cases may be connected to:

* Academic papers
* Research reports
* Datasets
* Policy documents
* Methodological resources
* Related NeuroGuard cases

References should be recorded with enough information for other researchers to locate the original source.

---

## Uncertainty

NeuroGuard should make uncertainty visible.

Cases may contain uncertainty fields such as:

* Evidence completeness
* Confidence in individual observations
* Unresolved questions
* Missing context
* Conflicting evidence

Uncertainty should describe the state of the evidence rather than produce a simplified overall score.

---

## Privacy

The platform should minimize unnecessary personal information.

Where possible:

* Avoid collecting unnecessary personally identifiable information.
* Do not expose private information through public case records.
* Store only information necessary for research and documentation.
* Consider anonymization or redaction where appropriate.
* Respect applicable legal and ethical requirements.

---

## Example Case Structure

A simplified case may look like:

```json
{
  "case_id": "NG-0024",
  "title": "Example documented case",
  "status": "under_review",
  "content_type": "social_media_post",
  "platform": "Example Platform",
  "potential_techniques": [
    "emotional_influence",
    "context_manipulation"
  ],
  "evidence": [],
  "analysis": {
    "observed": "",
    "potential_interpretation": "",
    "alternative_interpretation": "",
    "open_questions": []
  },
  "review": [],
  "research_references": []
}
```

This example is illustrative and does not represent a real case.

---

## Data Principles

The NeuroGuard data model follows several principles:

1. **Evidence before conclusions**
2. **Context should be preserved**
3. **Observation should be separated from interpretation**
4. **Alternative explanations should remain possible**
5. **Uncertainty should be visible**
6. **Human review should remain possible**
7. **Personal data should be minimized**
8. **Research sources should be traceable**
9. **Cases should be reproducible where ethically and legally possible**
10. **The data model should remain extensible as research develops**

---

## Future Development

Future versions may introduce:

* Structured provenance records
* Evidence versioning
* Dataset export formats
* API schemas
* Research annotations
* Contributor attribution
* Review histories
* Machine-readable taxonomy identifiers
* Interoperability with other open research projects

The data model should evolve through documented research and community contribution.

---

## Guiding Principle

> A NeuroGuard case should preserve the evidence and uncertainty needed for people to investigate a question — not pretend that a complex question can always be reduced to a single label.
