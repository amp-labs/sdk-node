# UpdateInstallationInstallation

The updated installation

## Example Usage

```typescript
import { UpdateInstallationInstallation } from "@amp-labs/sdk-node/models/operations";

let value: UpdateInstallationInstallation = {
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
      createTime: new Date("2025-10-27T17:07:18.797Z"),
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
  createTime: new Date("2025-04-18T19:06:55.714Z"),
  createdBy: "consumer:consumer-123",
  config: {
    id: "config-123",
    revisionId: "revision-123",
    createTime: new Date("2025-03-31T12:50:52.284Z"),
    createdBy: "builder:builder-123",
    content: {
      provider: "salesforce",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The installation ID.                                                                                                 | installation-123                                                                                                     |
| `projectId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The Ampersand project ID.                                                                                            | project-456                                                                                                          |
| `integrationId`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The integration ID.                                                                                                  | integration-123                                                                                                      |
| `group`                                                                                                              | [operations.UpdateInstallationGroup](../../models/operations/updateinstallationgroup.md)                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `healthStatus`                                                                                                       | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The health status of the installation ("healthy", "unhealthy").                                                      | healthy                                                                                                              |
| `connection`                                                                                                         | [operations.UpdateInstallationConnection](../../models/operations/updateinstallationconnection.md)                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |
| `createTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | The time the integration was first installed.                                                                        |                                                                                                                      |
| `createdBy`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The person who did the installation, in the format of "consumer:{consumer-id}".                                      | consumer:consumer-123                                                                                                |
| `updateTime`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_minus_sign:                                                                                                   | The time the installation was last updated with a new config.                                                        |                                                                                                                      |
| `config`                                                                                                             | [operations.UpdateInstallationInstallationsConfig](../../models/operations/updateinstallationinstallationsconfig.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |