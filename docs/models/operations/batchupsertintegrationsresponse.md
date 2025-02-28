# BatchUpsertIntegrationsResponse


## Supported Types

### `operations.BatchUpsertIntegrationsIntegration[]`

```typescript
const value: operations.BatchUpsertIntegrationsIntegration[] = [
  {
    id: "integration-123",
    projectId: "project-456",
    name: "read-accounts",
    provider: "salesforce",
    createTime: new Date("2023-05-01T23:18:27.767Z"),
    latestRevision: {
      id: "revision-id-1",
      specVersion: "1.0.0",
      createTime: new Date("2024-12-20T08:05:36.677Z"),
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
      },
    },
  },
];
```

### `operations.BatchUpsertIntegrationsAPIProblem`

```typescript
const value: operations.BatchUpsertIntegrationsAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

