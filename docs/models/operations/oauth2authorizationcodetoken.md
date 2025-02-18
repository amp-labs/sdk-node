# OAuth2AuthorizationCodeToken

## Example Usage

```typescript
import { OAuth2AuthorizationCodeToken } from "@amp-labs/sdk-node/models/operations";

let value: OAuth2AuthorizationCodeToken = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                    | [operations.ListConnectionsAccessToken](../../models/operations/listconnectionsaccesstoken.md)   | :heavy_minus_sign:                                                                               | The access token for the connection.                                                             |
| `refreshToken`                                                                                   | [operations.ListConnectionsRefreshToken](../../models/operations/listconnectionsrefreshtoken.md) | :heavy_minus_sign:                                                                               | The refresh token to use for the connection.                                                     |
| `scopes`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The scopes for the tokens.                                                                       |