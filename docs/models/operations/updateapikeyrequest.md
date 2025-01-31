# UpdateApiKeyRequest

## Example Usage

```typescript
import { UpdateApiKeyRequest } from "openapi/models/operations";

let value: UpdateApiKeyRequest = {
  projectIdOrName: "<value>",
  apiKey: "<value>",
  requestBody: {
    updateMask: [
      "label",
      "active",
      "scopes",
    ],
    apiKey: {
      label: "MailMonkey API Key",
      active: true,
      scopes: [
        "[\"full\",\"frontend\"]",
      ],
    },
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `apiKey`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.UpdateApiKeyRequestBody](../../models/operations/updateapikeyrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |