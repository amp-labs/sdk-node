# GenerateConnectionAuthScheme

The authentication scheme used for this connection.

## Example Usage

```typescript
import { GenerateConnectionAuthScheme } from "sdk-node/models/operations";

let value: GenerateConnectionAuthScheme = "oauth2/authorizationCode";
```

## Values

```typescript
"none" | "apiKey" | "basic" | "oauth2/authorizationCode" | "oauth2/authorizationCodePKCE" | "oauth2/clientCredentials" | "oauth2/password"
```