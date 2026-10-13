# Architecture

## Implemented

`frontend/index.html` loads `style.css` and `app.js`. Hash routes select seven screens. The in-memory state contains requests, proposals, votes and events. Changes persist to browser localStorage under `osi-house-v1`. The financial ledger is fixed demonstration data.

SHA-256 uses `crypto.subtle.digest`. A proof export includes the exact `snapshot` string, its hash, creation time and `network: none-local-only`. Verify by hashing the UTF-8 bytes of the snapshot string without parsing or reformatting it.

## Trust boundary

There is no server, authenticated user, ownership registry or remote audit anchor. The client and all local records can be modified. Switching roles does not enforce authorization. A vote-per-browser check is not a Sybil-resistant voting system.

## Proposed next architecture

1. Authenticated users and verified building membership.
2. Shared database with building-scoped authorization and append-only audit records.
3. Private document storage with access controls and backups.
4. Solana devnet anchoring of an agreed protocol hash, signed outside the app's custody.
5. Independent retrieval and verification of the transaction receipt.

On-chain anchoring is planned only. No program ID, transaction signature or wallet integration exists in this release. Evaluate governance, dispute handling and data minimization before production use.
