# BatchUpsertIntegrationsWrite

## Example Usage

```typescript
import { BatchUpsertIntegrationsWrite } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsWrite = {
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

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                        | [operations.BatchUpsertIntegrationsIntegrationsObjects](../../models/operations/batchupsertintegrationsintegrationsobjects.md)[] | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |