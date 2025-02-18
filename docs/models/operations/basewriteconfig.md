# BaseWriteConfig

## Example Usage

```typescript
import { BaseWriteConfig } from "@amp-labs/sdk-node/models/operations";

let value: BaseWriteConfig = {
  objects: {
    "key": {
      objectName: "account",
    },
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `objects`                                                                                            | Record<string, [operations.BaseWriteConfigObject](../../models/operations/basewriteconfigobject.md)> | :heavy_minus_sign:                                                                                   | This is a map of object names to their configuration.                                                |