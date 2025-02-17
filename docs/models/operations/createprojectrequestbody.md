# CreateProjectRequestBody

## Example Usage

```typescript
import { CreateProjectRequestBody } from "sdk-node/models/operations";

let value: CreateProjectRequestBody = {
  appName: "MailMonkey",
  name: "mailmonkey-staging",
  orgId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `appName`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The app name.                                                                                      | MailMonkey                                                                                         |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | The project name. Must be alphanumerics and hyphens only. Project names will be save in lowercase. | mailmonkey-staging                                                                                 |
| `orgId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | The organization ID.                                                                               |                                                                                                    |