# ListInstallationsOAuth2AuthorizationCodeToken

## Example Usage

```typescript
import { ListInstallationsOAuth2AuthorizationCodeToken } from "@amp-labs/sdk-node/models/operations";

let value: ListInstallationsOAuth2AuthorizationCodeToken = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                        | [operations.ListInstallationsAccessToken](../../models/operations/listinstallationsaccesstoken.md)   | :heavy_minus_sign:                                                                                   | The access token for the connection.                                                                 |
| `refreshToken`                                                                                       | [operations.ListInstallationsRefreshToken](../../models/operations/listinstallationsrefreshtoken.md) | :heavy_minus_sign:                                                                                   | The refresh token to use for the connection.                                                         |
| `scopes`                                                                                             | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | The scopes for the tokens.                                                                           |