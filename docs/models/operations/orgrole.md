# OrgRole

## Example Usage

```typescript
import { OrgRole } from "openapi/models/operations";

let value: OrgRole = {
  role: "admin",
  principalType: "team",
  principalId: "builder-id-123",
  org: {
    id: "org-123",
    label: "Acme Inc",
    defaultTeamId: "<id>",
    createTime: new Date("2024-11-08T20:30:17.087Z"),
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `role`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The role of the builder in the org.                                                    | admin                                                                                  |
| `principalType`                                                                        | [operations.GetMyInfoPrincipalType](../../models/operations/getmyinfoprincipaltype.md) | :heavy_check_mark:                                                                     | The type of the principal.                                                             |                                                                                        |
| `principalId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The ID of the team or builder.                                                         | builder-id-123                                                                         |
| `org`                                                                                  | [operations.GetMyInfoOrg](../../models/operations/getmyinfoorg.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |