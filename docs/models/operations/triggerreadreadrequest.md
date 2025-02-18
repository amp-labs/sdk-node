# TriggerReadReadRequest

Read Request

## Example Usage

```typescript
import { TriggerReadReadRequest } from "@amp-labs/sdk-node/models/operations";

let value: TriggerReadReadRequest = {
  groupRef: "<value>",
  mode: "async",
  sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `groupRef`                                                                                                                                | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The ID of the user group whose SaaS instance you'd like to read data from. This is the ID that was provided during installation creation. |                                                                                                                                           |
| `mode`                                                                                                                                    | [operations.Mode](../../models/operations/mode.md)                                                                                        | :heavy_check_mark:                                                                                                                        | The mode of read operation. Currently only asynchronus operation is supported.                                                            | async                                                                                                                                     |
| `sinceTimestamp`                                                                                                                          | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The UTC timestamp from which to read data. If omitted, we will read all data.                                                             | 2024-07-01T18:22:30.323771761Z                                                                                                            |