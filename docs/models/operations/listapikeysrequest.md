# ListApiKeysRequest

## Example Usage

```typescript
import { ListApiKeysRequest } from "openapi/models/operations";

let value: ListApiKeysRequest = {
  projectIdOrName: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `projectIdOrName`                                                             | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `active`                                                                      | *boolean*                                                                     | :heavy_minus_sign:                                                            | Whether to include only active API keys. If false, all API keys are included. |