# ReadIntegration

## Example Usage

```typescript
import { ReadIntegration } from "@amp-labs/sdk-node/models/operations";

let value: ReadIntegration = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `objects`                                                                      | [operations.IntegrationObject](../../models/operations/integrationobject.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |