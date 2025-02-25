# DeliverResultsResultDeliveryRequest

ResultDeliveryRequestBody

## Example Usage

```typescript
import { DeliverResultsResultDeliveryRequest } from "@amp-labs/sdk-node/models/operations";

let value: DeliverResultsResultDeliveryRequest = {
  groupRef: "<value>",
  pages: 548814,
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `groupRef`                                                                                                                                      | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The ID of the user group whose SaaS instance you'd like to receive results from. This is the ID that was provided during installation creation. |
| `pages`                                                                                                                                         | *number*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | The number of pages you are ready to receive from the group's SaaS instance.                                                                    |