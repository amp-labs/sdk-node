# UpdateInstallationWrite

## Example Usage

```typescript
import { UpdateInstallationWrite } from "openapi/models/operations";

let value: UpdateInstallationWrite = {
  objects: {
    "key": {
      objectName: "account",
    },
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `objects`                                                                                                                            | Record<string, [operations.UpdateInstallationInstallationObjects](../../models/operations/updateinstallationinstallationobjects.md)> | :heavy_minus_sign:                                                                                                                   | This is a map of object names to their configuration.                                                                                |