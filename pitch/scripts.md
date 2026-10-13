# Presentation script, approximately 2–3 minutes

## 1. OSI
I'm Ivan Bukhonin. OSI is a House Management Operating System for condominium communities. We want residents to see what happens after they report a problem and understand how their building makes decisions.

## 2. Problem
A repair can begin in a chat, its cost can sit in a spreadsheet, and its approval can remain in a paper document. Our hypothesis is that connecting these records makes responsibility visible. We are validating that hypothesis rather than claiming measured savings.

## 3. Product
Our deployed prototype lets a resident create a request, follow its status, review a sample budget and vote on a proposal. Managers can update requests and export records. It runs in the browser, with local demo data.

## 4. Technical scope
We also generate a SHA-256 snapshot of the journal and include the exact original payload. That is a working checksum, not a blockchain proof. Our next experiment is anchoring an agreed document hash on Solana devnet and independently verifying the transaction. Personal documents stay off-chain. We still need authenticated membership and a shared database before a real pilot.

## 5. Business model
Our initial buyer is a condominium association or property manager in Kazakhstan. We will test 25,000 tenge per building per month. A scenario of 100 paying buildings would produce 30 million tenge annually before costs. That is an assumption, not current revenue.

## 6. Founder
I bring 19 years of software experience and work in CRM and business automation. I am seeking a Solana engineering collaborator and building communities willing to test the workflow.

## 7. Next experiment
Over the next 90 days, our plan is to interview ten owners and managers, deliver verified access and a devnet receipt, then run three pilots. The decision gate is paid continuation from at least two buildings. If nobody pays after two iterations, we change the offer before scaling.

## 8. Ask
We are looking for three pilot buildings and the engineering collaboration to turn this prototype into a service people use every week.

# Product demo, maximum 3 minutes

0:00–0:20 — State the problem and disclose fictional data.
0:20–0:50 — Create a courtyard-lighting request with a location.
0:50–1:15 — Open the request and change status as demo manager.
1:15–1:40 — Open finances, explain the sample balance and export CSV.
1:40–2:05 — Vote on courtyard lighting. Explain that browser votes are not legal governance.
2:05–2:35 — Generate and download a SHA-256 snapshot. Say explicitly that no transaction is sent.
2:35–2:55 — Show planned devnet anchoring and the pilot ask.

Record the live interface. Do not label this as a blockchain transaction demo or show invented signatures.

# Difficult questions

**Why blockchain?** The proposed narrow use is an independently retrievable commitment to an agreed document. Product-market fit must not depend on speculative tokens.

**Why can't a database do this?** A database is enough for ordinary operations. A public anchor is useful only if owners need a receipt they can verify outside the operator's database. That demand still needs validation.

**What is live?** The local interface and its workflows. No authenticated multi-user backend, on-chain program or real payments.

**What traction exists?** A prototype. No verified users or revenue yet.

**Does a hash prove a repair happened?** No. The physical-world evidence and approval process need their own controls.
