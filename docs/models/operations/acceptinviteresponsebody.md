# AcceptInviteResponseBody

Information about the current user and their organizations and projects

## Example Usage

```typescript
import { AcceptInviteResponseBody } from "openapi/models/operations";

let value: AcceptInviteResponseBody = {
  builder: {
    id: "builder-id-123",
    idpProvider: "clerk",
    idpRef: "<value>",
    createTime: new Date("2024-03-30T16:23:42.327Z"),
  },
  projectRoles: {
    "key": {
      role: "admin",
      principalType: "team",
      principalId: "builder-id-123",
      project: {
        id: "project-id-123",
        name: "mailmonkey-staging",
        appName: "MailMonkey",
        createTime: new Date("2025-06-27T04:59:29.330Z"),
      },
    },
  },
  orgRole: {
    role: "admin",
    principalType: "builder",
    principalId: "builder-id-123",
    org: {
      id: "org-123",
      label: "Acme Inc",
      defaultTeamId: "<id>",
      createTime: new Date("2023-02-20T10:10:34.700Z"),
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `builder`                                                                                                  | [operations.AcceptInviteBuilder](../../models/operations/acceptinvitebuilder.md)                           | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `projectRoles`                                                                                             | Record<string, [operations.AcceptInviteProjectRoles](../../models/operations/acceptinviteprojectroles.md)> | :heavy_check_mark:                                                                                         | A map of project IDs to project roles for the builder.                                                     |
| `orgRole`                                                                                                  | [operations.AcceptInviteOrgRole](../../models/operations/acceptinviteorgrole.md)                           | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |