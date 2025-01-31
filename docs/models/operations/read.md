# Read

## Example Usage

```typescript
import { Read } from "openapi/models/operations";

let value: Read = {
  objects: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `objects`                                                  | [operations.Objects](../../models/operations/objects.md)[] | :heavy_minus_sign:                                         | N/A                                                        |