# CreateDestinationRequestBody

## Example Usage

```typescript
import { CreateDestinationRequestBody } from "sdk-node/models/operations";

let value: CreateDestinationRequestBody = {
  name: "leadConvertedWebhook",
  type: "webhook",
  metadata: {
    url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
    headers: {
      "Authorization": "Bearer 1234",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Name for the new destination. Must be unique within the project and can only contain letters, numbers and dashes. | leadConvertedWebhook                                                                                              |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The type of the destination                                                                                       | webhook                                                                                                           |
| `metadata`                                                                                                        | [operations.Metadata](../../models/operations/metadata.md)                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |