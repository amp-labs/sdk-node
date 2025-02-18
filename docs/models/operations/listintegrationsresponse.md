# ListIntegrationsResponse


## Supported Types

### `operations.ListIntegrationsIntegration[]`

```typescript
const value: operations.ListIntegrationsIntegration[] = [
  {
    id: "integration-123",
    projectId: "project-456",
    name: "read-accounts",
    provider: "salesforce",
    createTime: new Date("2023-10-17T22:52:14.955Z"),
    latestRevision: {
      id: "revision-id-1",
      specVersion: "1.0.0",
      createTime: new Date("2025-04-28T13:26:34.681Z"),
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
  },
];
```

### `operations.ListIntegrationsAPIProblem`

```typescript
const value: operations.ListIntegrationsAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

