# GenerateConnectionResponse


## Supported Types

### `operations.GenerateConnectionConnection`

```typescript
const value: operations.GenerateConnectionConnection = {
  id: "connection-123",
  projectId: "project-456",
  provider: "salesforce",
  providerApp: {
    id: "provider-app-123",
    projectId: "project-456",
    externalRef: "external-id-123",
    provider: "salesforce",
    clientId: "client-id-123",
    scopes: [
      "[\"oauth\",\"offline\",\"crm.read\"]",
    ],
    createTime: new Date("2025-02-05T18:51:30.654Z"),
  },
  group: {
    groupRef: "group-123",
    groupName: "Super Customer",
    projectId: "project-456",
    createTime: new Date("2023-07-13T21:34:44.816Z"),
    updateTime: new Date("2023-07-13T21:34:44.816Z"),
  },
  consumer: {
    consumerRef: "consumer-123",
    consumerName: "Super Customer",
    projectId: "project-456",
    createTime: new Date("2023-07-13T21:34:44.816Z"),
    updateTime: new Date("2023-07-13T21:34:44.816Z"),
  },
  providerWorkspaceRef: "provider-workspace-123",
  providerConsumerRef: "provider-consumer-123",
  createTime: new Date("2023-07-13T21:34:44.816Z"),
  updateTime: new Date("2023-07-13T21:34:44.816Z"),
  authScheme: "oauth2/authorizationCode",
  status: "working",
  apiKey: "api-key-123",
};
```

### `operations.GenerateConnectionAPIProblem`

```typescript
const value: operations.GenerateConnectionAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

