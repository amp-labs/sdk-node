# OptionalFields1

## Example Usage

```typescript
import { OptionalFields1 } from "sdk-node/models/operations";

let value: OptionalFields1 = {
  fieldName: "<value>",
  mapToName: "account_id",
  mapToDisplayName: "Account ID",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `fieldName`                 | *string*                    | :heavy_check_mark:          | N/A                         |                             |
| `mapToName`                 | *string*                    | :heavy_minus_sign:          | The field name to map to.   | account_id                  |
| `mapToDisplayName`          | *string*                    | :heavy_minus_sign:          | The display name to map to. | Account ID                  |