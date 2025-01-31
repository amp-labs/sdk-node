# UpdateInstallationProviderApp

## Example Usage

```typescript
import { UpdateInstallationProviderApp } from "openapi/models/operations";

let value: UpdateInstallationProviderApp = {
  id: "provider-app-123",
  projectId: "project-456",
  externalRef: "external-id-123",
  provider: "salesforce",
  clientId: "client-id-123",
  scopes: [
    "[\"oauth\",\"offline\",\"crm.read\"]",
  ],
  createTime: new Date("2023-07-20T20:59:34.122Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The provider app ID.                                                                          | provider-app-123                                                                              |
| `projectId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The Ampersand project ID.                                                                     | project-456                                                                                   |
| `externalRef`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID used by the provider to identify the app (optional).                                   | external-id-123                                                                               |
| `provider`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The SaaS provider that this app connects to.                                                  | salesforce                                                                                    |
| `clientId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The OAuth client ID for this app.                                                             | client-id-123                                                                                 |
| `scopes`                                                                                      | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | The OAuth scopes for this app.                                                                |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the provider app was created.                                                        |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the provider app was updated.                                                        |                                                                                               |