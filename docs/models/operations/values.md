# Values

Represents a field value

## Example Usage

```typescript
import { Values } from "openapi/models/operations";

let value: Values = {
  value: "outbound",
  displayValue: "Outbound Campaign",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           | Example                               |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `value`                               | *string*                              | :heavy_check_mark:                    | The internal value used by the system | outbound                              |
| `displayValue`                        | *string*                              | :heavy_check_mark:                    | The human-readable display value      | Outbound Campaign                     |