# ListIntegrationsDelivery

## Example Usage

```typescript
import { ListIntegrationsDelivery } from "openapi/models/operations";

let value: ListIntegrationsDelivery = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `mode`                                                                             | [operations.ListIntegrationsMode](../../models/operations/listintegrationsmode.md) | :heavy_minus_sign:                                                                 | The data delivery mode for this object. If not specified, defaults to automatic.   |
| `pageSize`                                                                         | *number*                                                                           | :heavy_minus_sign:                                                                 | The number of records to receive per data delivery.                                |