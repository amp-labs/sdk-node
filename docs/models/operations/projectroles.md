# ProjectRoles

## Example Usage

```typescript
import { ProjectRoles } from "openapi/models/operations";

let value: ProjectRoles = {
  role: "admin",
  principalType: "team",
  principalId: "builder-id-123",
  project: {
    id: "project-id-123",
    name: "mailmonkey-staging",
    appName: "MailMonkey",
    createTime: new Date("2023-10-05T11:56:28.175Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `role`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The role of the builder in the project.                                    | admin                                                                      |
| `principalType`                                                            | [operations.PrincipalType](../../models/operations/principaltype.md)       | :heavy_check_mark:                                                         | The type of the principal.                                                 |                                                                            |
| `principalId`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | The ID of the team or builder.                                             | builder-id-123                                                             |
| `project`                                                                  | [operations.GetMyInfoProject](../../models/operations/getmyinfoproject.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |