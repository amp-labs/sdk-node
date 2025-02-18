# IntegrationObject

## Example Usage

```typescript
import { IntegrationObject } from "@amp-labs/sdk-node/models/operations";

let value: IntegrationObject = {
  objectName: "<value>",
  destination: "<value>",
  schedule: "<value>",
  mapToName: "people",
  mapToDisplayName: "People",
  requiredFields: [
    {
      mapToName: "<value>",
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `objectName`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `destination`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `schedule`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `mapToName`                                                                                | *string*                                                                                   | :heavy_minus_sign:                                                                         | An object name to map to.                                                                  | people                                                                                     |
| `mapToDisplayName`                                                                         | *string*                                                                                   | :heavy_minus_sign:                                                                         | A display name to map to.                                                                  | People                                                                                     |
| `requiredFields`                                                                           | *operations.IntegrationField*[]                                                            | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `optionalFields`                                                                           | *operations.CreateIntegrationIntegrationField*[]                                           | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `optionalFieldsAuto`                                                                       | [operations.OptionalFieldsAutoOption](../../models/operations/optionalfieldsautooption.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `backfill`                                                                                 | [operations.Backfill](../../models/operations/backfill.md)                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |
| `delivery`                                                                                 | [operations.Delivery](../../models/operations/delivery.md)                                 | :heavy_minus_sign:                                                                         | N/A                                                                                        |                                                                                            |