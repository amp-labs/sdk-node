# UpdateDestinationRequestBody

## Example Usage

```typescript
import { UpdateDestinationRequestBody } from "sdk-node/models/operations";

let value: UpdateDestinationRequestBody = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `updateMask`                                                     | *string*[]                                                       | :heavy_check_mark:                                               | N/A                                                              | [<br/>"name",<br/>"metadata.url",<br/>"metadata.headers"<br/>]   |
| `destination`                                                    | [operations.Destination](../../models/operations/destination.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |