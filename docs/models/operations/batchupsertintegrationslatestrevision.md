# BatchUpsertIntegrationsLatestRevision

## Example Usage

```typescript
import { BatchUpsertIntegrationsLatestRevision } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsLatestRevision = {
  id: "revision-id-1",
  specVersion: "1.0.0",
  createTime: new Date("2023-08-17T22:17:39.092Z"),
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
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The revision ID.                                                                                       | revision-id-1                                                                                          |
| `specVersion`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The spec version string.                                                                               | 1.0.0                                                                                                  |
| `createTime`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | The time the revision was created.                                                                     |                                                                                                        |
| `content`                                                                                              | [operations.BatchUpsertIntegrationsContent](../../models/operations/batchupsertintegrationscontent.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |