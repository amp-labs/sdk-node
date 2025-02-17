# DeliverResultsRequest

## Example Usage

```typescript
import { DeliverResultsRequest } from "sdk-node/models/operations";

let value: DeliverResultsRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  objectName: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `integrationId`                                                                              | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `objectName`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [operations.DeliverResultsRequestBody](../../models/operations/deliverresultsrequestbody.md) | :heavy_minus_sign:                                                                           | ResultDeliveryRequestBody                                                                    |