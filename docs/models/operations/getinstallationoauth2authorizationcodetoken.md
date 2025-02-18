# GetInstallationOAuth2AuthorizationCodeToken

## Example Usage

```typescript
import { GetInstallationOAuth2AuthorizationCodeToken } from "@amp-labs/sdk-node/models/operations";

let value: GetInstallationOAuth2AuthorizationCodeToken = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                    | [operations.GetInstallationAccessToken](../../models/operations/getinstallationaccesstoken.md)   | :heavy_minus_sign:                                                                               | The access token for the connection.                                                             |
| `refreshToken`                                                                                   | [operations.GetInstallationRefreshToken](../../models/operations/getinstallationrefreshtoken.md) | :heavy_minus_sign:                                                                               | The refresh token to use for the connection.                                                     |
| `scopes`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The scopes for the tokens.                                                                       |