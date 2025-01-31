# CreateConsumerRequestBody

## Example Usage

```typescript
import { CreateConsumerRequestBody } from "openapi/models/operations";

let value: CreateConsumerRequestBody = {
  consumerRef: "consumer-123",
  consumerName: "John doe",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `consumerRef`                                                  | *string*                                                       | :heavy_check_mark:                                             | The consumer reference.                                        | consumer-123                                                   |
| `consumerName`                                                 | *string*                                                       | :heavy_check_mark:                                             | The name of the consumer that has access to this installation. | John doe                                                       |