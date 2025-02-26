# Integration

## Example Usage

```typescript
import { Integration } from "@amp-labs/sdk-node/models/operations";

let value: Integration = {
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
            mapToName: "<value>",
          },
        ],
        optionalFields: [
          {
            fieldName: "<value>",
            mapToName: "account_id",
            mapToDisplayName: "Account ID",
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
  subscribe: {
    objects: [
      {
        objectName: "<value>",
        destination: "<value>",
        updateEvent: {
          requiredWatchFields: [
            "[\"name\",\"domain\"]",
          ],
        },
        otherEvents: [
          "[\"object.merged\",\"object.restored\"]",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `displayName`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `provider`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `read`                                                                             | [operations.ReadIntegration](../../models/operations/readintegration.md)           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `write`                                                                            | [operations.WriteIntegration](../../models/operations/writeintegration.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `proxy`                                                                            | [operations.ProxyIntegration](../../models/operations/proxyintegration.md)         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `subscribe`                                                                        | [operations.SubscribeIntegration](../../models/operations/subscribeintegration.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |