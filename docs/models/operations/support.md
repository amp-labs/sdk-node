# Support

The supported features for the provider.

## Example Usage

```typescript
import { Support } from "@amp-labs/sdk-node/models/operations";

let value: Support = {
  bulkWrite: {
    insert: false,
    update: false,
    upsert: false,
    delete: false,
  },
  proxy: false,
  read: false,
  subscribe: false,
  write: false,
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `bulkWrite`                                                                | [operations.BulkWriteSupport](../../models/operations/bulkwritesupport.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `proxy`                                                                    | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `read`                                                                     | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `subscribe`                                                                | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `write`                                                                    | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `subscribeSupport`                                                         | [operations.SubscribeSupport](../../models/operations/subscribesupport.md) | :heavy_minus_sign:                                                         | N/A                                                                        |