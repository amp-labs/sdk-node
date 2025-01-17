# WriteRecordsResponseBody

Error encountered while creating records

## Example Usage

```typescript
import { WriteRecordsResponseBody } from "openapi/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `errors`                                                                         | *string*[]                                                                       | :heavy_check_mark:                                                               | Error messages resulted in failures                                              |                                                                                  |
| `result`                                                                         | [errors.Result](../../models/errors/result.md)                                   | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `warnings`                                                                       | *string*[]                                                                       | :heavy_minus_sign:                                                               | Warnings messages when some unexpected event happened, but not blocking failures |                                                                                  |
| `operationId`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | The operation ID                                                                 | acb0d75a-1b59-4aad-a191-48c5b75ea9e4                                             |