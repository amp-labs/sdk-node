# Content

## Example Usage

```typescript
import { Content } from "@amp-labs/sdk-node/models/operations";

let value: Content = {
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
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `displayName`                                        | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `provider`                                           | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `read`                                               | [operations.Read](../../models/operations/read.md)   | :heavy_minus_sign:                                   | N/A                                                  |
| `write`                                              | [operations.Write](../../models/operations/write.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `proxy`                                              | [operations.Proxy](../../models/operations/proxy.md) | :heavy_minus_sign:                                   | N/A                                                  |