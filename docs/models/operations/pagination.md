# Pagination

## Example Usage

```typescript
import { Pagination } from "openapi/models/operations";

let value: Pagination = {
  done: false,
  nextPageToken: "Q9JT+2qfys28V4ODN+UayA==",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `done`                                                                                                                                                       | *boolean*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | If set to true, this is the last page of results for the given operation. There are no more results & there will be no nextPageToken sent when done is true. | false                                                                                                                                                        |
| `nextPageToken`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | If present, set this value against your 'pageToken' query parameter in the next API call, which will retrieve the next set of results.                       | Q9JT+2qfys28V4ODN+UayA==                                                                                                                                     |