# Write

## Example Usage

```typescript
import { Write } from "@amp-labs/sdk-node/models/operations";

let value: Write = {
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

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `objects`                                                                                    | [operations.CreateIntegrationObjects](../../models/operations/createintegrationobjects.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |