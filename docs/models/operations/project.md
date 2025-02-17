# Project

The project fields to update. (Only include the fields you'd like to update.)

## Example Usage

```typescript
import { Project } from "@amp-labs/sdk-node/models/operations";

let value: Project = {
  appName: "MailMonkey",
  name: "mailmonkey-staging",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `appName`          | *string*           | :heavy_minus_sign: | The app name.      | MailMonkey         |
| `name`             | *string*           | :heavy_minus_sign: | The project name.  | mailmonkey-staging |