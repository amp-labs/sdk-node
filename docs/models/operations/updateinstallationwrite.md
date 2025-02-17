# UpdateInstallationWrite

## Example Usage

```typescript
import { UpdateInstallationWrite } from "@amp-labs/sdk-node/models/operations";

let value: UpdateInstallationWrite = {
  objects: {
    "key": {
      objectName: "account",
    },
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                              | Record<string, [operations.UpdateInstallationInstallationsObjects](../../models/operations/updateinstallationinstallationsobjects.md)> | :heavy_minus_sign:                                                                                                                     | This is a map of object names to their configuration.                                                                                  |