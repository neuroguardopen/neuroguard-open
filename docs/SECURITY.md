# NeuroGuard Open — Security Policy

## Overview

NeuroGuard Open is an open-source research project.

Security is important because the platform may eventually process publicly available content, evidence, URLs, research data, and community contributions.

This document explains how security concerns should be reported.

---

## Reporting a Security Vulnerability

If you discover a potential security vulnerability in NeuroGuard Open, please avoid publicly sharing technical details until the issue has been reviewed.

Where a private security reporting mechanism is available, use that channel.

If no private reporting mechanism is currently available, open a GitHub issue without including sensitive exploit details and request private communication with the maintainers.

---

## Examples of Security Issues

Security concerns may include:

* Unauthorized access
* Authentication or authorization problems
* Exposure of private information
* Insecure handling of uploaded content
* Malicious file processing
* Cross-site scripting
* Injection vulnerabilities
* Server-side vulnerabilities
* Insecure API behavior
* Accidental exposure of credentials or secrets
* Data integrity problems

This list is not exhaustive.

---

## Do Not Include Secrets

Never commit the following to the repository:

* Passwords
* API keys
* Authentication tokens
* Private credentials
* Database credentials
* Private user information
* Production secrets

Use environment variables or appropriate secret-management systems for sensitive configuration.

---

## Responsible Disclosure

Security researchers and contributors are encouraged to report vulnerabilities responsibly.

Please provide enough information to reproduce and understand the issue without unnecessarily exposing users, contributors, or project infrastructure to additional risk.

---

## Current Project Status

NeuroGuard Open is an early-stage prototype.

Security practices and infrastructure will evolve as the project develops.

Future work may include:

* Formal security review
* Dependency monitoring
* Automated security scanning
* Secure contribution workflows
* Authentication security
* Data protection controls
* API security guidelines
* Infrastructure security documentation

---

## Security Principle

NeuroGuard should aim to protect not only the integrity of its software, but also the integrity and provenance of the evidence researchers use.

**Protect the system. Protect the evidence. Protect the people.**
