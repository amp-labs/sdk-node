# CreateDestinationResponseBody

Created

## Example Usage

```typescript
import { CreateDestinationResponseBody } from "@amp-labs/sdk-node/models/operations";

let value: CreateDestinationResponseBody = {
  id: "<id>",
  name: "leadConvertedWebhook",
  type: "webhook",
  metadata: {
    url: "https://webhooks.mailmonkey.com/salesforce-lead-converted",
    headers: {
      "Authorization": "Bearer 1234",
    },
  },
  createTime: new Date("2025-05-22T20:16:52.845Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The destination ID.                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | User-defined name for the destination                                                         | leadConvertedWebhook                                                                          |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of the destination                                                                   | webhook                                                                                       |
| `metadata`                                                                                    | [operations.CreateDestinationMetadata](../../models/operations/createdestinationmetadata.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the destination was created.                                                         |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the destination was updated.                                                         |                                                                                               |