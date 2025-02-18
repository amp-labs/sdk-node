# Config

The config of the installation.

## Example Usage

```typescript
import { Config } from "@amp-labs/sdk-node/models/operations";

let value: Config = {
  content: {
    provider: "salesforce",
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `revisionId`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The ID of the revision that this config is based on. If omitted, the latest revision is assumed.        |
| `createdBy`                                                                                             | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The person who created the config, in the format of "consumer:{consumer-id}" or "builder:{builder-id}". |
| `content`                                                                                               | [operations.ConfigContent](../../models/operations/configcontent.md)                                    | :heavy_check_mark:                                                                                      | N/A                                                                                                     |