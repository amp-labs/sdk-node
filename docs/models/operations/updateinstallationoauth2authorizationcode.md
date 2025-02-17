# UpdateInstallationOauth2AuthorizationCode

## Example Usage

```typescript
import { UpdateInstallationOauth2AuthorizationCode } from "@amp-labs/sdk-node/models/operations";

let value: UpdateInstallationOauth2AuthorizationCode = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                          | [operations.UpdateInstallationAccessToken](../../models/operations/updateinstallationaccesstoken.md)   | :heavy_minus_sign:                                                                                     | The access token for the connection.                                                                   |
| `refreshToken`                                                                                         | [operations.UpdateInstallationRefreshToken](../../models/operations/updateinstallationrefreshtoken.md) | :heavy_minus_sign:                                                                                     | The refresh token to use for the connection.                                                           |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | The scopes for the tokens.                                                                             |