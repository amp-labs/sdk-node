# GetHydratedRevisionContent

## Example Usage

```typescript
import { GetHydratedRevisionContent } from "@amp-labs/sdk-node/models/operations";

let value: GetHydratedRevisionContent = {
  name: "<value>",
  provider: "<value>",
  read: {
    objects: [
      {
        objectName: "<value>",
        displayName: "Zoila.Stroman61",
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
            mapToName: "<value>",
          },
        ],
        allFields: [
          {
            mapToName: "<value>",
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
      },
    ],
  },
  write: {
    objects: [
      {
        objectName: "<value>",
        displayName: "Gwendolyn72",
        valueDefaults: {
          allowAnyFields: true,
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `displayName`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `provider`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `read`                                                                                     | [operations.GetHydratedRevisionRead](../../models/operations/gethydratedrevisionread.md)   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `write`                                                                                    | [operations.GetHydratedRevisionWrite](../../models/operations/gethydratedrevisionwrite.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `proxy`                                                                                    | [operations.GetHydratedRevisionProxy](../../models/operations/gethydratedrevisionproxy.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |