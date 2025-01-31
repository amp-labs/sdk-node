# UpdateProviderAppRequest

## Example Usage

```typescript
import { UpdateProviderAppRequest } from "openapi/models/operations";

let value: UpdateProviderAppRequest = {
  projectIdOrName: "<value>",
  providerAppId: "<id>",
  requestBody: {
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
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `providerAppId`                                                                                    | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.UpdateProviderAppRequestBody](../../models/operations/updateproviderapprequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |