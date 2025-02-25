# ListProjectsProject

## Example Usage

```typescript
import { ListProjectsProject } from "@amp-labs/sdk-node/models/operations";

let value: ListProjectsProject = {
  id: "project-id-123",
  name: "mailmonkey-staging",
  appName: "MailMonkey",
  createTime: new Date("2024-10-22T15:05:16.239Z"),
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