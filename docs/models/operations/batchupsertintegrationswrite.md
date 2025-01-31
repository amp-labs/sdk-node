# BatchUpsertIntegrationsWrite

## Example Usage

```typescript
import { BatchUpsertIntegrationsWrite } from "openapi/models/operations";

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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `objects`                                                                                                                      | [operations.BatchUpsertIntegrationsIntegrationObjects](../../models/operations/batchupsertintegrationsintegrationobjects.md)[] | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |