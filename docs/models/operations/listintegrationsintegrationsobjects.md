# ListIntegrationsIntegrationsObjects

## Example Usage

```typescript
import { ListIntegrationsIntegrationsObjects } from "sdk-node/models/operations";

let value: ListIntegrationsIntegrationsObjects = {
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
      mapToName: "<value>",
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

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `destination`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `schedule`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `mapToName`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | An object name to map to.                                                                                      | people                                                                                                         |
| `mapToDisplayName`                                                                                             | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A display name to map to.                                                                                      | People                                                                                                         |
| `requiredFields`                                                                                               | *operations.ListIntegrationsRequiredFields*[]                                                                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `optionalFields`                                                                                               | *operations.ListIntegrationsOptionalFields*[]                                                                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `optionalFieldsAuto`                                                                                           | [operations.ListIntegrationsOptionalFieldsAuto](../../models/operations/listintegrationsoptionalfieldsauto.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `backfill`                                                                                                     | [operations.ListIntegrationsBackfill](../../models/operations/listintegrationsbackfill.md)                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |
| `delivery`                                                                                                     | [operations.ListIntegrationsDelivery](../../models/operations/listintegrationsdelivery.md)                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |                                                                                                                |