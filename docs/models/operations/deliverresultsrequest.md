# DeliverResultsRequest

## Example Usage

```typescript
import { DeliverResultsRequest } from "@amp-labs/sdk-node/models/operations";

let value: DeliverResultsRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  objectName: "<value>",
  requestBody: {
    groupRef: "<value>",
    pages: 715190,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `integrationId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `objectName`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `requestBody`                                                                                                    | [operations.DeliverResultsResultDeliveryRequest](../../models/operations/deliverresultsresultdeliveryrequest.md) | :heavy_check_mark:                                                                                               | ResultDeliveryRequestBody                                                                                        |