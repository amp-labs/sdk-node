# Refresh

Whether to refresh the access token. If value is `ifExpired`, the access token will be refreshed only if it has expired. If value is `force`, the access token will be refreshed regardless of its expiration.

## Example Usage

```typescript
import { Refresh } from "@amp-labs/sdk-node/models/operations";

let value: Refresh = "ifExpired";
```

## Values

```typescript
"force" | "ifExpired"
```