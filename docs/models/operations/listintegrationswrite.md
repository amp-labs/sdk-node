# ListIntegrationsWrite

## Example Usage

```typescript
import { ListIntegrationsWrite } from "sdk-node/models/operations";

let value: ListIntegrationsWrite = {
  objects: [
    {
      objectName: "<value>",
      inheritMapping: true,
      valueDefaults: {
        allowAnyFields: true,
      },
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `objects`                                                                                  | [operations.ListIntegrationsObjects](../../models/operations/listintegrationsobjects.md)[] | :heavy_minus_sign:                                                                         | N/A                                                                                        |