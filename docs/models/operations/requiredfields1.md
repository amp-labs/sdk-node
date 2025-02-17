# RequiredFields1

## Example Usage

```typescript
import { RequiredFields1 } from "@amp-labs/sdk-node/models/operations";

let value: RequiredFields1 = {
  fieldName: "<value>",
  displayName: "Cleveland.Schuster83",
  mapToName: "account_id",
  mapToDisplayName: "Account ID",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `fieldName`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `displayName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |                                                |
| `mapToName`                                    | *string*                                       | :heavy_minus_sign:                             | The field name to map to in the destination.   | account_id                                     |
| `mapToDisplayName`                             | *string*                                       | :heavy_minus_sign:                             | The display name to map to in the destination. | Account ID                                     |