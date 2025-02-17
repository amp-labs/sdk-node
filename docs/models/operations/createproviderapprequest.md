# CreateProviderAppRequest

## Example Usage

```typescript
import { CreateProviderAppRequest } from "sdk-node/models/operations";

let value: CreateProviderAppRequest = {
  projectIdOrName: "<value>",
  requestBody: {
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

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.CreateProviderAppRequestBody](../../models/operations/createproviderapprequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |