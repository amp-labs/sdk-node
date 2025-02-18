# Write

## Example Usage

```typescript
import { Write } from "@amp-labs/sdk-node/models/operations";

let value: Write = {
  objects: [
    {
      objectName: "<value>",
      displayName: "Mckenna_VonRueden99",
      valueDefaults: {
        allowAnyFields: true,
      },
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `objects`                                                  | [operations.Objects](../../models/operations/objects.md)[] | :heavy_minus_sign:                                         | N/A                                                        |