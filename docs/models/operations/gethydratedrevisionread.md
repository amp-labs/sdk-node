# GetHydratedRevisionRead

## Example Usage

```typescript
import { GetHydratedRevisionRead } from "openapi/models/operations";

let value: GetHydratedRevisionRead = {
  objects: [
    {
      objectName: "<value>",
      displayName: "Verlie_Kassulke1",
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
          displayName: "Liana.Collins",
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