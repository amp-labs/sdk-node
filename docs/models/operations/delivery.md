# Delivery

## Example Usage

```typescript
import { Delivery } from "openapi/models/operations";

let value: Delivery = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `mode`                                                                               | [operations.CreateIntegrationMode](../../models/operations/createintegrationmode.md) | :heavy_minus_sign:                                                                   | The data delivery mode for this object. If not specified, defaults to automatic.     |
| `pageSize`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | The number of records to receive per data delivery.                                  |