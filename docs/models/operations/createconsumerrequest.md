# CreateConsumerRequest

## Example Usage

```typescript
import { CreateConsumerRequest } from "@amp-labs/sdk-node/models/operations";

let value: CreateConsumerRequest = {
  projectIdOrName: "<value>",
  requestBody: {
    consumerRef: "consumer-123",
    consumerName: "John doe",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [operations.CreateConsumerRequestBody](../../models/operations/createconsumerrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |