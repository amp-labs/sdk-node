# AcceptInviteProjectRoles

## Example Usage

```typescript
import { AcceptInviteProjectRoles } from "openapi/models/operations";

let value: AcceptInviteProjectRoles = {
  role: "admin",
  principalType: "builder",
  principalId: "builder-id-123",
  project: {
    id: "project-id-123",
    name: "mailmonkey-staging",
    appName: "MailMonkey",
    createTime: new Date("2024-07-20T23:16:59.651Z"),
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `role`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The role of the builder in the project.                                                      | admin                                                                                        |
| `principalType`                                                                              | [operations.AcceptInvitePrincipalType](../../models/operations/acceptinviteprincipaltype.md) | :heavy_check_mark:                                                                           | The type of the principal.                                                                   |                                                                                              |
| `principalId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the team or builder.                                                               | builder-id-123                                                                               |
| `project`                                                                                    | [operations.AcceptInviteProject](../../models/operations/acceptinviteproject.md)             | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |