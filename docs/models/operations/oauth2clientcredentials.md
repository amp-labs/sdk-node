# Oauth2ClientCredentials

## Example Usage

```typescript
import { Oauth2ClientCredentials } from "sdk-node/models/operations";

let value: Oauth2ClientCredentials = {
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `clientId`                                   | *string*                                     | :heavy_check_mark:                           | The client ID to use for the connection.     |
| `clientSecret`                               | *string*                                     | :heavy_check_mark:                           | The client secret to use for the connection. |
| `scopes`                                     | *string*[]                                   | :heavy_minus_sign:                           | The scopes for the tokens.                   |