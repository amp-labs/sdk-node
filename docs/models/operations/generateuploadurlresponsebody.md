# GenerateUploadUrlResponseBody

Signed URL

## Example Usage

```typescript
import { GenerateUploadUrlResponseBody } from "openapi/models/operations";

let value: GenerateUploadUrlResponseBody = {
  url: "https://overdue-story.info/",
  bucket: "<value>",
  path: "/var/spool",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | The signed URL to upload the zip file to.           |
| `bucket`                                            | *string*                                            | :heavy_check_mark:                                  | The bucket (will match the bucket part of the url). |
| `path`                                              | *string*                                            | :heavy_check_mark:                                  | The path (will match the path part of the url).     |