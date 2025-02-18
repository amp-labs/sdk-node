# CreateIntegrationRequestBody

## Example Usage

```typescript
import { CreateIntegrationRequestBody } from "@amp-labs/sdk-node/models/operations";

let value: CreateIntegrationRequestBody = {
  name: "<value>",
  provider: "<value>",
  latestRevision: {
    specVersion: "1.0.0",
    content: {
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
    },
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The integration name.                                                  |
| `provider`                                                             | *string*                                                               | :heavy_check_mark:                                                     | The provider name (e.g. "salesforce", "hubspot")                       |
| `latestRevision`                                                       | [operations.LatestRevision](../../models/operations/latestrevision.md) | :heavy_check_mark:                                                     | N/A                                                                    |