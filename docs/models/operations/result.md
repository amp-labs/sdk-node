# Result

## Example Usage

```typescript
import { Result } from "openapi/models/operations";

let value: Result = {
  success: true,
  data: {},
  recordId: "003Dp0X#@RG7IAP",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | Whether the operation was successful               | true                                               |
| `data`                                             | [operations.Data](../../models/operations/data.md) | :heavy_minus_sign:                                 | The data returned by the operation                 | {<br/>"email": "david@ampersand.com"<br/>}         |
| `recordId`                                         | *string*                                           | :heavy_minus_sign:                                 | The ID of the object                               | 003Dp0X#@RG7IAP                                    |