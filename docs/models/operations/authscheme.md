# AuthScheme

The authentication scheme used for this connection.

## Example Usage

```typescript
import { AuthScheme } from "@amp-labs/sdk-node/models/operations";

let value: AuthScheme = "oauth2/authorizationCode";
```

## Values

```typescript
"none" | "apiKey" | "basic" | "oauth2/authorizationCode" | "oauth2/authorizationCodePKCE" | "oauth2/clientCredentials" | "oauth2/password"
```