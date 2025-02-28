# ListIntegrationsAssociationChangeEvent

## Example Usage

```typescript
import { ListIntegrationsAssociationChangeEvent } from "@amp-labs/sdk-node/models/operations";

let value: ListIntegrationsAssociationChangeEvent = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `enabled`                                                                | *boolean*                                                                | :heavy_minus_sign:                                                       | If true, the integration will subscribe to association change events.    |
| `includeFullRecords`                                                     | *boolean*                                                                | :heavy_minus_sign:                                                       | If true, the integration will include full records in the event payload. |