# BackfillConfig

## Example Usage

```typescript
import { BackfillConfig } from "@amp-labs/sdk-node/models/operations";

let value: BackfillConfig = {
  defaultPeriod: {
    days: 30,
    fullHistory: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `defaultPeriod`                                                                  | [operations.DefaultPeriodConfig](../../models/operations/defaultperiodconfig.md) | :heavy_check_mark:                                                               | N/A                                                                              |