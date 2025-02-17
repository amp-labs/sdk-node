# UpdateDestinationRequest

## Example Usage

```typescript
import { UpdateDestinationRequest } from "sdk-node/models/operations";

let value: UpdateDestinationRequest = {
  projectIdOrName: "<value>",
  destination: "<value>",
  requestBody: {
    updateMask: [
      "name",
      "metadata.url",
      "metadata.headers",
    ],
    destination: {
      name: "leadConvertedWebhook",
      metadata: {
        url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
        headers: {
          "Authorization": "Bearer 1234",
        },
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `destination`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The destination ID                                                                                 |
| `requestBody`                                                                                      | [operations.UpdateDestinationRequestBody](../../models/operations/updatedestinationrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |