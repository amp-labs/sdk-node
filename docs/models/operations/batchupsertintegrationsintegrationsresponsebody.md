# BatchUpsertIntegrationsIntegrationsResponseBody

## Example Usage

```typescript
import { BatchUpsertIntegrationsIntegrationsResponseBody } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsIntegrationsResponseBody = {
  id: "integration-123",
  projectId: "project-456",
  name: "read-accounts",
  provider: "salesforce",
  createTime: new Date("2023-10-05T14:34:56.327Z"),
  latestRevision: {
    id: "revision-id-1",
    specVersion: "1.0.0",
    createTime: new Date("2024-05-26T01:50:18.849Z"),
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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The integration ID.                                                                                                  | integration-123                                                                                                      |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The Ampersand project ID.                                                                                            | project-456                                                                                                          |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The integration name.                                                                                                | read-accounts                                                                                                        |
| `provider`                                                                                                           | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The SaaS provider that this integration connects to.                                                                 | salesforce                                                                                                           |
| `createTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | The time the integration was created.                                                                                |                                                                                                                      |
| `updateTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The time the integration was last updated.                                                                           |                                                                                                                      |
| `latestRevision`                                                                                                     | [operations.BatchUpsertIntegrationsLatestRevision](../../models/operations/batchupsertintegrationslatestrevision.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |