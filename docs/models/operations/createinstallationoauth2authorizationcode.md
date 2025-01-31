# CreateInstallationOauth2AuthorizationCode

## Example Usage

```typescript
import { CreateInstallationOauth2AuthorizationCode } from "openapi/models/operations";

let value: CreateInstallationOauth2AuthorizationCode = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                          | [operations.CreateInstallationAccessToken](../../models/operations/createinstallationaccesstoken.md)   | :heavy_minus_sign:                                                                                     | The access token for the connection.                                                                   |
| `refreshToken`                                                                                         | [operations.CreateInstallationRefreshToken](../../models/operations/createinstallationrefreshtoken.md) | :heavy_minus_sign:                                                                                     | The refresh token to use for the connection.                                                           |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | The scopes for the tokens.                                                                             |