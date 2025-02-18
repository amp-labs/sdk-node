# GetConnectionOAuth2AuthorizationCodeToken

## Example Usage

```typescript
import { GetConnectionOAuth2AuthorizationCodeToken } from "@amp-labs/sdk-node/models/operations";

let value: GetConnectionOAuth2AuthorizationCodeToken = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                | [operations.GetConnectionAccessToken](../../models/operations/getconnectionaccesstoken.md)   | :heavy_minus_sign:                                                                           | The access token for the connection.                                                         |
| `refreshToken`                                                                               | [operations.GetConnectionRefreshToken](../../models/operations/getconnectionrefreshtoken.md) | :heavy_minus_sign:                                                                           | The refresh token to use for the connection.                                                 |
| `scopes`                                                                                     | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The scopes for the tokens.                                                                   |