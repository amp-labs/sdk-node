# UpdateInstallationOAuth2AuthorizationCodeToken

## Example Usage

```typescript
import { UpdateInstallationOAuth2AuthorizationCodeToken } from "@amp-labs/sdk-node/models/operations";

let value: UpdateInstallationOAuth2AuthorizationCodeToken = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                          | [operations.UpdateInstallationAccessToken](../../models/operations/updateinstallationaccesstoken.md)   | :heavy_minus_sign:                                                                                     | The access token for the connection.                                                                   |
| `refreshToken`                                                                                         | [operations.UpdateInstallationRefreshToken](../../models/operations/updateinstallationrefreshtoken.md) | :heavy_minus_sign:                                                                                     | The refresh token to use for the connection.                                                           |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | The scopes for the tokens.                                                                             |