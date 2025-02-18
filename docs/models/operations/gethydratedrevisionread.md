# GetHydratedRevisionRead

## Example Usage

```typescript
import { GetHydratedRevisionRead } from "@amp-labs/sdk-node/models/operations";

let value: GetHydratedRevisionRead = {
  objects: [
    {
      objectName: "<value>",
      displayName: "Shannon_Reinger",
      mapToName: "people",
      mapToDisplayName: "People",
      destination: "<value>",
      schedule: "<value>",
      requiredFields: [
        {
          fieldName: "<value>",
          displayName: "Lenna_Gutkowski",
          mapToName: "account_id",
          mapToDisplayName: "Account ID",
        },
      ],
      optionalFields: [
        {
          fieldName: "<value>",
          displayName: "Brice_Marks",
          mapToName: "account_id",
          mapToDisplayName: "Account ID",
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
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `objects`                                                                                        | [operations.GetHydratedRevisionObjects](../../models/operations/gethydratedrevisionobjects.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |