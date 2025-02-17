# ListOperationsResponse


## Supported Types

### `operations.ListOperationsResponseBody`

```typescript
const value: operations.ListOperationsResponseBody = {
  results: [
    {
      projectId: "project-456",
      integrationId: "integration-123",
      configId: "config-123",
      actionType: "read",
      id: "operation-123",
      installationId: "installation-123",
      status: "success",
      result: "[object] No changes",
      metadata: {},
      createTime: new Date("2023-07-13T21:34:44.816Z"),
    },
  ],
  pagination: {
    done: false,
    nextPageToken: "Q9JT+2qfys28V4ODN+UayA==",
  },
};
```

### `operations.ListOperationsOperationResponseBody`

```typescript
const value: operations.ListOperationsOperationResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

