# GetHydratedRevisionDefaultPeriod

## Example Usage

```typescript
import { GetHydratedRevisionDefaultPeriod } from "@amp-labs/sdk-node/models/operations";

let value: GetHydratedRevisionDefaultPeriod = {
  days: 30,
  fullHistory: false,
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `days`                                                                                                                                         | *number*                                                                                                                                       | :heavy_minus_sign:                                                                                                                             | Number of days in past to backfill from. 0 is no backfill. e.g) if 10, then backfill last 10 days of data. Required if fullHistory is not set. | 30                                                                                                                                             |
| `fullHistory`                                                                                                                                  | *boolean*                                                                                                                                      | :heavy_minus_sign:                                                                                                                             | If true, backfill all history. Required if days is not set.                                                                                    | false                                                                                                                                          |