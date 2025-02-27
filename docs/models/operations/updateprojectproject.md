# UpdateProjectProject

The updated project

## Example Usage

```typescript
import { UpdateProjectProject } from "@amp-labs/sdk-node/models/operations";

let value: UpdateProjectProject = {
  id: "project-id-123",
  name: "mailmonkey-staging",
  appName: "MailMonkey",
  createTime: new Date("2025-11-22T04:11:06.908Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The project ID.                                                                               | project-id-123                                                                                |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The project name.                                                                             | mailmonkey-staging                                                                            |
| `appName`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the application, which is displayed to end users.                                 | MailMonkey                                                                                    |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The organization ID that this project belongs to.                                             |                                                                                               |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the project was created.                                                             |                                                                                               |
| `updateTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the project was updated.                                                             |                                                                                               |