# Data and API

This release has **no HTTP backend API**. Documentation must not be read as a deployed service contract.

## Exported proof

```json
{"hash":"64-character lowercase SHA-256 hex","snapshot":"exact serialized JSON string","createdAt":"ISO-8601 timestamp","network":"none-local-only"}
```

Hash the UTF-8 bytes of `snapshot` exactly. Reformatting JSON changes the digest. This confirms matching bytes, not authorship or the truth of their contents.

## Data export

The journal download includes requests, proposals, local votes and events. Financial CSV includes date, operation, category and amount in KZT. Do not enter real personal or financial information into this demo.

## Proposed API, not implemented

Future endpoints may cover building membership, requests, meeting proposals, expenses and proof receipts. Finalize authorization and entity models before publishing an API contract.
