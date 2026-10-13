# OSI — House Management Operating System
Interactive hackathon prototype for condominium management. Russian-language product with an English project brief available in Documents.

## Run
Serve `frontend/` with any static HTTPS server. No build or runtime dependencies. `python3 -m http.server 8080 --directory frontend` is sufficient for localhost development.

## Implemented
- Create and search requests; priority, category, location, details and status transitions.
- Demo manager/resident views (not authentication).
- Local polls, one vote per proposal per browser state.
- Balanced sample financial ledger and CSV/text export.
- Maintenance cards, document downloads, event log.
- SHA-256 snapshots including original serialized data for independent hash checking.
- Browser-local persistence; mobile layout.

## Limits
All data are fictional. No shared server persistence, access control, verified ownership, legally binding voting, payment rail, blockchain transaction, wallet integration or AI. Browser data are editable and removable. SHA-256 is an integrity checksum, not independent attestation. Do not enter sensitive resident data. Role selection is presentation only. This is a demonstrable prototype, not a production condominium management service or complete crypto hackathon submission.

## Next product milestone
Implement verified users + shared database, then one genuine testnet workflow anchoring a meeting-protocol hash. Add transaction receipt verification before claiming on-chain functionality. Keep resident identities and documents off-chain. Legal governance and ownership verification require local jurisdiction review.

## Submission
Disclose AI-assisted development and development dates accurately. Attach repository, pitch video and demo video required by the selected competition. Do not claim pilots or traction without evidence.
