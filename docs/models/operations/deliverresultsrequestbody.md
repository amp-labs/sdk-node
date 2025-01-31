# DeliverResultsRequestBody

ResultDeliveryRequestBody

## Example Usage

```typescript
import { DeliverResultsRequestBody } from "openapi/models/operations";

let value: DeliverResultsRequestBody = {
  groupRef: "<value>",
  pages: 548814,
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupRef`                                                                                                                                      | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The ID of the user group whose SaaS instance you'd like to receive results from. This is the ID that was provided during installation creation. |
| `pages`                                                                                                                                         | *number*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The number of pages you are ready to receive from the group's SaaS instance.                                                                    |