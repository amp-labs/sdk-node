# GenerateConnectionOauth2AuthorizationCode

## Example Usage

```typescript
import { GenerateConnectionOauth2AuthorizationCode } from "@amp-labs/sdk-node/models/operations";

let value: GenerateConnectionOauth2AuthorizationCode = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accessToken`                                                                                          | [operations.GenerateConnectionAccessToken](../../models/operations/generateconnectionaccesstoken.md)   | :heavy_minus_sign:                                                                                     | The access token for the connection.                                                                   |
| `refreshToken`                                                                                         | [operations.GenerateConnectionRefreshToken](../../models/operations/generateconnectionrefreshtoken.md) | :heavy_minus_sign:                                                                                     | The refresh token to use for the connection.                                                           |
| `scopes`                                                                                               | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | The scopes for the tokens.                                                                             |