# ProviderApp

The provider app fields to update. (Only include the fields you'd like to update.)

## Example Usage

```typescript
import { ProviderApp } from "openapi/models/operations";

let value: ProviderApp = {
  externalRef: "external-id-123",
  provider: "salesforce",
  clientId: "client-id-123",
  clientSecret: "client-secret-123",
  scopes: [
    "[\"read\",\"write\"]",
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `externalRef`                                               | *string*                                                    | :heavy_minus_sign:                                          | The ID used by the provider to identify the app (optional). | external-id-123                                             |
| `provider`                                                  | *string*                                                    | :heavy_minus_sign:                                          | The SaaS provider that this app connects to.                | salesforce                                                  |
| `clientId`                                                  | *string*                                                    | :heavy_minus_sign:                                          | The OAuth client ID for this app.                           | client-id-123                                               |
| `clientSecret`                                              | *string*                                                    | :heavy_minus_sign:                                          | The OAuth client secret for this app.                       | client-secret-123                                           |
| `scopes`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | The OAuth scopes for this app.                              |                                                             |