# GetHydratedRevisionObjects

## Example Usage

```typescript
import { GetHydratedRevisionObjects } from "openapi/models/operations";

let value: GetHydratedRevisionObjects = {
  objectName: "<value>",
  displayName: "Dominique.Windler",
  mapToName: "people",
  mapToDisplayName: "People",
  destination: "<value>",
  schedule: "<value>",
  requiredFields: [
    {
      mapToName: "<value>",
    },
  ],
  optionalFields: [
    {
      fieldName: "<value>",
      displayName: "Veda29",
      mapToName: "account_id",
      mapToDisplayName: "Account ID",
    },
  ],
  allFields: [
    {
      fieldName: "<value>",
      displayName: "Shaniya_Tillman",
      mapToName: "account_id",
      mapToDisplayName: "Account ID",
    },
  ],
  allFieldsMetadata: {
    "key": {
      fieldName: "Account ID",
      displayName: "Account ID",
      providerType: "timestamp",
      readOnly: false,
      values: [
        {
          value: "outbound",
          displayValue: "Outbound Campaign",
        },
      ],
    },
  },
  backfill: {
    defaultPeriod: {
      days: 30,
      fullHistory: false,
    },
  },
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `objectName`                                                                                                                                 | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `displayName`                                                                                                                                | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `mapToName`                                                                                                                                  | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | An object name to map to.                                                                                                                    | people                                                                                                                                       |
| `mapToDisplayName`                                                                                                                           | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | A display name to map to.                                                                                                                    | People                                                                                                                                       |
| `destination`                                                                                                                                | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `schedule`                                                                                                                                   | *string*                                                                                                                                     | :heavy_check_mark:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `requiredFields`                                                                                                                             | *operations.GetHydratedRevisionRequiredFields*[]                                                                                             | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `optionalFields`                                                                                                                             | *operations.GetHydratedRevisionOptionalFields*[]                                                                                             | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `optionalFieldsAuto`                                                                                                                         | [operations.GetHydratedRevisionOptionalFieldsAuto](../../models/operations/gethydratedrevisionoptionalfieldsauto.md)                         | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |
| `allFields`                                                                                                                                  | *operations.AllFields*[]                                                                                                                     | :heavy_minus_sign:                                                                                                                           | This is a list of all fields on the object for a particular SaaS instance, including their display names.                                    |                                                                                                                                              |
| `allFieldsMetadata`                                                                                                                          | Record<string, [operations.AllFieldsMetadata](../../models/operations/allfieldsmetadata.md)>                                                 | :heavy_minus_sign:                                                                                                                           | This is a map of all fields on the object including their metadata (such as display name and type), the keys of the map are the field names. |                                                                                                                                              |
| `backfill`                                                                                                                                   | [operations.GetHydratedRevisionBackfill](../../models/operations/gethydratedrevisionbackfill.md)                                             | :heavy_minus_sign:                                                                                                                           | N/A                                                                                                                                          |                                                                                                                                              |