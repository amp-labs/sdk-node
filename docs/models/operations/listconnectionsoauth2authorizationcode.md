# ListConnectionsOauth2AuthorizationCode

## Example Usage

```typescript
import { ListConnectionsOauth2AuthorizationCode } from "openapi/models/operations";

let value: ListConnectionsOauth2AuthorizationCode = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                    | [operations.ListConnectionsAccessToken](../../models/operations/listconnectionsaccesstoken.md)   | :heavy_minus_sign:                                                                               | The access token for the connection.                                                             |
| `refreshToken`                                                                                   | [operations.ListConnectionsRefreshToken](../../models/operations/listconnectionsrefreshtoken.md) | :heavy_minus_sign:                                                                               | The refresh token to use for the connection.                                                     |
| `scopes`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The scopes for the tokens.                                                                       |