# GetInstallationOauth2AuthorizationCode

## Example Usage

```typescript
import { GetInstallationOauth2AuthorizationCode } from "sdk-node/models/operations";

let value: GetInstallationOauth2AuthorizationCode = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                    | [operations.GetInstallationAccessToken](../../models/operations/getinstallationaccesstoken.md)   | :heavy_minus_sign:                                                                               | The access token for the connection.                                                             |
| `refreshToken`                                                                                   | [operations.GetInstallationRefreshToken](../../models/operations/getinstallationrefreshtoken.md) | :heavy_minus_sign:                                                                               | The refresh token to use for the connection.                                                     |
| `scopes`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | The scopes for the tokens.                                                                       |