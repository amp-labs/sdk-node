# BatchUpsertIntegrationsContent

## Example Usage

```typescript
import { BatchUpsertIntegrationsContent } from "openapi/models/operations";

let value: BatchUpsertIntegrationsContent = {
  name: "<value>",
  provider: "<value>",
  read: {
    objects: [
      {
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
      },
    ],
  },
  write: {
    objects: [
      {
        objectName: "<value>",
        inheritMapping: true,
        valueDefaults: {
          allowAnyFields: true,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `displayName`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `provider`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `read`                                                                                             | [operations.BatchUpsertIntegrationsRead](../../models/operations/batchupsertintegrationsread.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `write`                                                                                            | [operations.BatchUpsertIntegrationsWrite](../../models/operations/batchupsertintegrationswrite.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `proxy`                                                                                            | [operations.BatchUpsertIntegrationsProxy](../../models/operations/batchupsertintegrationsproxy.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |