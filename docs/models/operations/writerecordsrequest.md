# WriteRecordsRequest

## Example Usage

```typescript
import { WriteRecordsRequest } from "openapi/models/operations";

let value: WriteRecordsRequest = {
  projectIdOrName: "<value>",
  integrationId: "<id>",
  objectName: "<value>",
  requestBody: {
    groupRef: "<value>",
    type: "create",
    mode: "synchronous",
    record: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `projectIdOrName`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `integrationId`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `objectName`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [operations.WriteRecordsRequestBody](../../models/operations/writerecordsrequestbody.md) | :heavy_minus_sign:                                                                       | Write request                                                                            |