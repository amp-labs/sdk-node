# CreateApiKeyRequest

## Example Usage

```typescript
import { CreateApiKeyRequest } from "openapi/models/operations";

let value: CreateApiKeyRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    label: "MailMonkey API Key",
    scopes: [
      "[\"full\",\"frontend\"]",
    ],
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.CreateApiKeyRequestBody](../../models/operations/createapikeyrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |