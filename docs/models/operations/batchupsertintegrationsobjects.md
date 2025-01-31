# BatchUpsertIntegrationsObjects

## Example Usage

```typescript
import { BatchUpsertIntegrationsObjects } from "openapi/models/operations";

let value: BatchUpsertIntegrationsObjects = {
  objectName: "<value>",
  destination: "<value>",
  schedule: "<value>",
  mapToName: "people",
  mapToDisplayName: "People",
  requiredFields: [
    {
      fieldName: "<value>",
      mapToName: "account_id",
      mapToDisplayName: "Account ID",
    },
  ],
  optionalFields: [
    {
      fieldName: "<value>",
      mapToName: "account_id",
      mapToDisplayName: "Account ID",
    },
  ],
  backfill: {
    defaultPeriod: {
      days: 30,
      fullHistory: false,
    },
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `destination`                                                                                                                | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `schedule`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `mapToName`                                                                                                                  | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An object name to map to.                                                                                                    | people                                                                                                                       |
| `mapToDisplayName`                                                                                                           | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A display name to map to.                                                                                                    | People                                                                                                                       |
| `requiredFields`                                                                                                             | *operations.BatchUpsertIntegrationsRequiredFields*[]                                                                         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `optionalFields`                                                                                                             | *operations.BatchUpsertIntegrationsOptionalFields*[]                                                                         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `optionalFieldsAuto`                                                                                                         | [operations.BatchUpsertIntegrationsOptionalFieldsAuto](../../models/operations/batchupsertintegrationsoptionalfieldsauto.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `backfill`                                                                                                                   | [operations.BatchUpsertIntegrationsBackfill](../../models/operations/batchupsertintegrationsbackfill.md)                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `delivery`                                                                                                                   | [operations.BatchUpsertIntegrationsDelivery](../../models/operations/batchupsertintegrationsdelivery.md)                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |