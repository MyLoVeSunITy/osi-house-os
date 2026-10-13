# OSI · House Management Operating System

A transparent workspace for condominium communities, starting in Kazakhstan.

[Interactive demo](https://osi-house-os.apttrout64.chatgpt.site) · [Pitch deck](https://docs.google.com/presentation/d/1vTlbUepz8zktoqxUN8jf4oQgW5a4aPmT93GSWsi3xOo/edit) · [Product](docs/product.md) · [Architecture](docs/architecture.md) · [Roadmap](docs/roadmap.md)

> **Prototype status:** browser-local demo. No blockchain deployment, backend authentication, real payments or legally binding voting. The current Sites demo is owner-private; reviewers need a public deployment or a recorded walkthrough.

## Founder

| Name | Role | Contact |
|---|---|---|
| Ivan Bukhonin | Founder, product and engineering | [Telegram](https://t.me/ivan_bukhonin) |

Founder-provided background: 19 years in software, CRM and business automation, based in Kazakhstan. AI-assisted implementation and documentation. No unverified team members or traction claimed.

## Problem and solution

Residents, managers and service providers need a visible path from an issue to a documented outcome. OSI consolidates repair requests, sample financial records, polls, maintenance and documents. Fragmented workflows and willingness to pay are hypotheses to validate in interviews and pilots.

## What works

- Create and search repair requests, record location and priority, update status.
- View sample building finances and export CSV.
- Submit a demo vote per proposal per browser state.
- View a maintenance schedule and download sample documents.
- Export an event log and a SHA-256 snapshot with its exact source payload.
- Keep demo state in `localStorage`; responsive desktop and mobile layouts.

## Why a blockchain layer is proposed

The next technical experiment is a Solana devnet commitment to a meeting protocol or audit snapshot. An independent party could compare a document against a published hash and transaction receipt. The current application does **not** do this. A hash alone cannot prove the underlying work happened, establish legal owner identity or prevent operator fraud.

Keep names, apartment numbers, documents and access credentials off-chain. Verified ownership and governance rules require a separate design and jurisdiction review. No token, custody or mainnet payments are part of this demo.

## Tech stack

| Layer | Implemented |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript |
| Persistence | Browser localStorage |
| Integrity snapshot | Web Crypto SHA-256 |
| Hosting | Static hosting; GitHub Pages workflow included |
| Tests | Node.js built-in test runner and VM smoke harness |
| Blockchain / backend | Not implemented |

## Quick start

Node.js 22+ for checks. Python 3 for the optional development server.

```bash
npm test
python3 -m http.server 8080 --directory frontend
```

Open http://localhost:8080. No npm install or API keys are required. HTTPS or localhost is necessary for Web Crypto.

## Deploy on GitHub Pages

After creating the repository, upload these files. In repository Settings → Pages, select **GitHub Actions** as the source. Run the **Deploy demo to Pages** workflow manually. The workflow publishes only `frontend/`; it does not publish account credentials or local demo storage. It requires Pages availability for the chosen account/repository visibility. A working deployment does not add authentication or a backend.

## Business model hypothesis

25,000 KZT per building per month, to test with condominium associations and property managers. An illustrative 100-building scenario equals 2.5M KZT MRR or 30M KZT annual revenue before costs. This is neither traction nor a market-size estimate. No customer or revenue evidence has been supplied.

## Pilot decision

Interview 10 owners/managers, seek three pilot buildings, and measure repeat manager usage. Proposed success gate: two of three pilots choose paid continuation. If none chooses to pay after two iterations, reconsider the buyer or offer before scaling.

## Submission materials

- [Three-minute pitch and demo scripts](pitch/scripts.md)
- [Submission draft](docs/submission.md)
- [Evidence and gaps](docs/evidence.md)
- [Implementation status](docs/implementation-status.md)

The deck is complete as a prototype pitch. Competition eligibility, live integrations, access, videos and final form details must still be verified. The project has not been submitted to Colosseum.

## Template attribution

Repository structure adapted from [Marakaya/colosseum_example](https://github.com/Marakaya/colosseum_example), commit `315695b07dbf4c2fff3c0144a31c9153ddc0fdce`. All BBM-specific code, claims and contributor identities were excluded. Upstream MIT copyright is preserved in [LICENSE](LICENSE). Deck uses the supplied Superteam / Spacekayak template. Neither attribution implies endorsement.
