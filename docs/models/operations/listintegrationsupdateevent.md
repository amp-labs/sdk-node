# ListIntegrationsUpdateEvent

## Example Usage

```typescript
import { ListIntegrationsUpdateEvent } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsUpdateEvent = {
  requiredWatchFields: [
    "[\"name\",\"domain\"]",
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `enabled`                                                 | *boolean*                                                 | :heavy_minus_sign:                                        | If true, the integration will subscribe to update events. |
| `requiredWatchFields`                                     | *string*[]                                                | :heavy_minus_sign:                                        | N/A                                                       |