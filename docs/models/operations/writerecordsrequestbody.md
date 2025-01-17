# WriteRecordsRequestBody

Write request

## Example Usage

```typescript
import { WriteRecordsRequestBody } from "openapi/models/operations";

let value: WriteRecordsRequestBody = {
  groupRef: "<value>",
  type: "create",
  mode: "synchronous",
  record: {},
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `groupRef`                                                                                                                               | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The ID of the user group whose SaaS instance you'd like to write data to. This is the ID that was provided during installation creation. |                                                                                                                                          |
| `type`                                                                                                                                   | [operations.Type](../../models/operations/type.md)                                                                                       | :heavy_check_mark:                                                                                                                       | The type of write operation. The only supported types currently are create and update.                                                   | create                                                                                                                                   |
| `mode`                                                                                                                                   | [operations.Mode](../../models/operations/mode.md)                                                                                       | :heavy_minus_sign:                                                                                                                       | The mode of write operation. The only supported mode currently is synchronous.                                                           | synchronous                                                                                                                              |
| `record`                                                                                                                                 | [operations.RecordT](../../models/operations/recordt.md)                                                                                 | :heavy_minus_sign:                                                                                                                       | The record to write                                                                                                                      | {<br/>"email": "david@withampersand.com",<br/>"warmthScore": "ready-for-close"<br/>}                                                     |