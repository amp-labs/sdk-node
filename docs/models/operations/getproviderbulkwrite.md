# GetProviderBulkWrite

## Example Usage

```typescript
import { GetProviderBulkWrite } from "@amp-labs/sdk-node/models/operations";

let value: GetProviderBulkWrite = {
  insert: false,
  update: false,
  upsert: false,
  delete: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `insert`           | *boolean*          | :heavy_check_mark: | N/A                |
| `update`           | *boolean*          | :heavy_check_mark: | N/A                |
| `upsert`           | *boolean*          | :heavy_check_mark: | N/A                |
| `delete`           | *boolean*          | :heavy_check_mark: | N/A                |