# ListIntegrationsIntegrationsResponseBody

## Example Usage

```typescript
import { ListIntegrationsIntegrationsResponseBody } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsIntegrationsResponseBody = {
  id: "integration-123",
  projectId: "project-456",
  name: "read-accounts",
  provider: "salesforce",
  createTime: new Date("2023-06-07T02:45:53.539Z"),
  latestRevision: {
    id: "revision-id-1",
    specVersion: "1.0.0",
    createTime: new Date("2025-11-01T08:34:16.299Z"),
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
    },
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The integration ID.                                                                                    | integration-123                                                                                        |
| `projectId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The Ampersand project ID.                                                                              | project-456                                                                                            |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | The integration name.                                                                                  | read-accounts                                                                                          |
| `provider`                                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | The SaaS provider that this integration connects to.                                                   | salesforce                                                                                             |
| `createTime`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | The time the integration was created.                                                                  |                                                                                                        |
| `updateTime`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_minus_sign:                                                                                     | The time the integration was last updated.                                                             |                                                                                                        |
| `latestRevision`                                                                                       | [operations.ListIntegrationsLatestRevision](../../models/operations/listintegrationslatestrevision.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |