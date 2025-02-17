# CreateDestinationRequest

## Example Usage

```typescript
import { CreateDestinationRequest } from "@amp-labs/sdk-node/models/operations";

let value: CreateDestinationRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    name: "leadConvertedWebhook",
    type: "webhook",
    metadata: {
      url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
      headers: {
        "Authorization": "Bearer 1234",
      },
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `requestBody`                                                                                      | [operations.CreateDestinationRequestBody](../../models/operations/createdestinationrequestbody.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |