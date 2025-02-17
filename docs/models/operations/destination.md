# Destination

## Example Usage

```typescript
import { Destination } from "@amp-labs/sdk-node/models/operations";

let value: Destination = {
  name: "leadConvertedWebhook",
  metadata: {
    url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
    headers: {
      "Authorization": "Bearer 1234",
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `name`                                                                                       | *string*                                                                                     | :heavy_minus_sign:                                                                           | User-friendly name for the destination                                                       | leadConvertedWebhook                                                                         |
| `metadata`                                                                                   | [operations.UpdateDestinationMetadata](../../models/operations/updatedestinationmetadata.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |                                                                                              |