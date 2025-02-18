# BatchUpsertIntegrationsWriteIntegration

## Example Usage

```typescript
import { BatchUpsertIntegrationsWriteIntegration } from "@amp-labs/sdk-node/models/operations";

let value: BatchUpsertIntegrationsWriteIntegration = {
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

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `objects`                                                                                                                              | [operations.BatchUpsertIntegrationsIntegrationWriteObject](../../models/operations/batchupsertintegrationsintegrationwriteobject.md)[] | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |