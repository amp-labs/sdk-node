# Header

Configuration for API key in header. Must be provided if type is in-header.

## Example Usage

```typescript
import { Header } from "sdk-node/models/operations";

let value: Header = {
  name: "X-Api-Key",
  valuePrefix: "Bearer ",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The name of the header to be used for the API key.                         | X-Api-Key                                                                  |
| `valuePrefix`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | The prefix to be added to the API key value when it is sent in the header. | Bearer                                                                     |