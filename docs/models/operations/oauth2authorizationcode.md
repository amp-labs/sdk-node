# OAuth2AuthorizationCode

## Example Usage

```typescript
import { OAuth2AuthorizationCode } from "@amp-labs/sdk-node/models/operations";

let value: OAuth2AuthorizationCode = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accessToken`                                                      | [operations.AccessToken](../../models/operations/accesstoken.md)   | :heavy_minus_sign:                                                 | The access token for the connection.                               |
| `refreshToken`                                                     | [operations.RefreshToken](../../models/operations/refreshtoken.md) | :heavy_minus_sign:                                                 | The refresh token to use for the connection.                       |
| `scopes`                                                           | *string*[]                                                         | :heavy_minus_sign:                                                 | The scopes for the tokens.                                         |