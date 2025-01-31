# CreateProviderAppResponse


## Supported Types

### `operations.CreateProviderAppResponseBody`

```typescript
const value: operations.CreateProviderAppResponseBody = {
  id: "provider-app-123",
  projectId: "project-456",
  externalRef: "external-id-123",
  provider: "salesforce",
  clientId: "client-id-123",
  scopes: [
    "[\"oauth\",\"offline\",\"crm.read\"]",
  ],
  createTime: new Date("2024-09-14T13:50:38.886Z"),
};
```

### `operations.CreateProviderAppProviderAppResponseBody`

```typescript
const value: operations.CreateProviderAppProviderAppResponseBody = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

