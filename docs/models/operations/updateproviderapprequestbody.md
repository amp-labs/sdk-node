# UpdateProviderAppRequestBody

## Example Usage

```typescript
import { UpdateProviderAppRequestBody } from "openapi/models/operations";

let value: UpdateProviderAppRequestBody = {
  updateMask: [
    "externalRef",
    "provider",
    "clientId",
    "clientSecret",
  ],
  providerApp: {
    externalRef: "external-id-123",
    provider: "salesforce",
    clientId: "client-id-123",
    clientSecret: "client-secret-123",
    scopes: [
      "[\"read\",\"write\"]",
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `updateMask`                                                                       | *string*[]                                                                         | :heavy_check_mark:                                                                 | N/A                                                                                | [<br/>"externalRef",<br/>"provider",<br/>"clientId",<br/>"clientSecret"<br/>]      |
| `providerApp`                                                                      | [operations.ProviderApp](../../models/operations/providerapp.md)                   | :heavy_check_mark:                                                                 | The provider app fields to update. (Only include the fields you'd like to update.) |                                                                                    |