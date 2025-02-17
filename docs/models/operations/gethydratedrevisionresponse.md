# GetHydratedRevisionResponse


## Supported Types

### `operations.GetHydratedRevisionResponseBody`

```typescript
const value: operations.GetHydratedRevisionResponseBody = {
  id: "revision-id-1",
  specVersion: "1.0.0",
  createTime: new Date("2023-07-24T01:37:14.976Z"),
  content: {
    name: "<value>",
    provider: "<value>",
    read: {
      objects: [
        {
          objectName: "<value>",
          displayName: "Tyreek.Kuhn25",
          mapToName: "people",
          mapToDisplayName: "People",
          destination: "<value>",
          schedule: "<value>",
          requiredFields: [
            {
              fieldName: "<value>",
              displayName: "Elvie.Hodkiewicz2",
              mapToName: "account_id",
              mapToDisplayName: "Account ID",
            },
          ],
          optionalFields: [
            {
              mapToName: "<value>",
            },
          ],
          allFields: [
            {
              fieldName: "<value>",
              displayName: "Kaitlin.Zboncak66",
              mapToName: "account_id",
              mapToDisplayName: "Account ID",
            },
          ],
          allFieldsMetadata: {
            "key": {
              fieldName: "Account ID",
              displayName: "Account ID",
              providerType: "timestamp",
              readOnly: false,
              values: [
                {
                  value: "outbound",
                  displayValue: "Outbound Campaign",
                },
              ],
            },
          },
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
          displayName: "Al58",
          valueDefaults: {
            allowAnyFields: true,
          },
        },
      ],
    },
  },
};
```

### `operations.GetHydratedRevisionRevisionsResponseBody`

```typescript
const value: operations.GetHydratedRevisionRevisionsResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

