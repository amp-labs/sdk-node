# UpdateProjectRequestBody

## Example Usage

```typescript
import { UpdateProjectRequestBody } from "sdk-node/models/operations";

let value: UpdateProjectRequestBody = {
  updateMask: [
    "appName",
  ],
  project: {
    appName: "MailMonkey",
    name: "mailmonkey-staging",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `updateMask`                                                                  | *string*[]                                                                    | :heavy_check_mark:                                                            | N/A                                                                           | [<br/>"appName"<br/>]                                                         |
| `project`                                                                     | [operations.Project](../../models/operations/project.md)                      | :heavy_check_mark:                                                            | The project fields to update. (Only include the fields you'd like to update.) |                                                                               |