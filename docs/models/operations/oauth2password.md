# Oauth2Password

## Example Usage

```typescript
import { Oauth2Password } from "@amp-labs/sdk-node/models/operations";

let value: Oauth2Password = {
  username: "Donny4",
  password: "RWIQSaF2vTLtLeF",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `username`                                   | *string*                                     | :heavy_check_mark:                           | The username to use for the connection.      |
| `password`                                   | *string*                                     | :heavy_check_mark:                           | The password to use for the connection.      |
| `clientId`                                   | *string*                                     | :heavy_check_mark:                           | The client ID to use for the connection.     |
| `clientSecret`                               | *string*                                     | :heavy_check_mark:                           | The client secret to use for the connection. |
| `scopes`                                     | *string*[]                                   | :heavy_minus_sign:                           | The scopes for the tokens.                   |