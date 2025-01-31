# GetMyInfoResponseBody

Information about the current user and their organizations and projects

## Example Usage

```typescript
import { GetMyInfoResponseBody } from "openapi/models/operations";

let value: GetMyInfoResponseBody = {
  builder: {
    id: "builder-id-123",
    idpProvider: "clerk",
    idpRef: "<value>",
    createTime: new Date("2025-12-03T18:50:07.520Z"),
  },
  projectRoles: {
    "key": {
      role: "admin",
      principalType: "builder",
      principalId: "builder-id-123",
      project: {
        id: "project-id-123",
        name: "mailmonkey-staging",
        appName: "MailMonkey",
        createTime: new Date("2024-03-24T07:45:32.129Z"),
      },
    },
  },
  orgRole: {
    role: "admin",
    principalType: "team",
    principalId: "builder-id-123",
    org: {
      id: "org-123",
      label: "Acme Inc",
      defaultTeamId: "<id>",
      createTime: new Date("2024-12-01T01:59:21.357Z"),
    },
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `builder`                                                                          | [operations.Builder](../../models/operations/builder.md)                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `projectRoles`                                                                     | Record<string, [operations.ProjectRoles](../../models/operations/projectroles.md)> | :heavy_check_mark:                                                                 | A map of project IDs to project roles for the builder.                             |
| `orgRole`                                                                          | [operations.OrgRole](../../models/operations/orgrole.md)                           | :heavy_minus_sign:                                                                 | N/A                                                                                |