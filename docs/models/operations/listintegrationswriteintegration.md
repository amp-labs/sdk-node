# ListIntegrationsWriteIntegration

## Example Usage

```typescript
import { ListIntegrationsWriteIntegration } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsWriteIntegration = {
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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `objects`                                                                                                                | [operations.ListIntegrationsIntegrationWriteObject](../../models/operations/listintegrationsintegrationwriteobject.md)[] | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |