# ListOperationsRequest

## Example Usage

```typescript
import { ListOperationsRequest } from "@amp-labs/sdk-node/models/operations";

let value: ListOperationsRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  installationId: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectIdOrName`                                                             | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `integrationId`                                                               | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `installationId`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `pageSize`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | The number of operations to return.                                           |
| `pageToken`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | A cursor that can be passed to paginate through multiple pages of operations. |