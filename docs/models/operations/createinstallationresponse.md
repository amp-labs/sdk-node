# CreateInstallationResponse


## Supported Types

### `operations.CreateInstallationInstallation`

```typescript
const value: operations.CreateInstallationInstallation = {
  id: "installation-123",
  projectId: "project-456",
  integrationId: "integration-123",
  group: {
    groupRef: "group-123",
    groupName: "Super Customer",
    projectId: "project-456",
    createTime: new Date("2023-07-13T21:34:44.816Z"),
    updateTime: new Date("2023-07-13T21:34:44.816Z"),
  },
  healthStatus: "healthy",
  connection: {
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
      createTime: new Date("2023-08-22T18:57:29.709Z"),
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
  },
  createTime: new Date("2024-07-21T22:45:05.685Z"),
  createdBy: "consumer:consumer-123",
  config: {
    id: "config-123",
    revisionId: "revision-123",
    createTime: new Date("2023-01-29T03:01:55.688Z"),
    createdBy: "builder:builder-123",
    content: {
      provider: "salesforce",
    },
  },
};
```

### `operations.CreateInstallationAPIProblem`

```typescript
const value: operations.CreateInstallationAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

