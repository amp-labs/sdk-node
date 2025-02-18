# WriteIntegration

## Example Usage

```typescript
import { WriteIntegration } from "@amp-labs/sdk-node/models/operations";

let value: WriteIntegration = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `objects`                                                                                | [operations.IntegrationWriteObject](../../models/operations/integrationwriteobject.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |