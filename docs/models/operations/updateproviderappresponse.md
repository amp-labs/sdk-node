# UpdateProviderAppResponse


## Supported Types

### `operations.UpdateProviderAppProviderApp`

```typescript
const value: operations.UpdateProviderAppProviderApp = {
  id: "provider-app-123",
  projectId: "project-456",
  externalRef: "external-id-123",
  provider: "salesforce",
  clientId: "client-id-123",
  scopes: [
    "[\"oauth\",\"offline\",\"crm.read\"]",
  ],
  createTime: new Date("2023-04-06T11:50:56.757Z"),
};
```

### `operations.UpdateProviderAppAPIProblem`

```typescript
const value: operations.UpdateProviderAppAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

