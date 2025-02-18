# GenerateUploadURLSignedURL

Signed URL

## Example Usage

```typescript
import { GenerateUploadURLSignedURL } from "@amp-labs/sdk-node/models/operations";

let value: GenerateUploadURLSignedURL = {
  url: "https://sugary-thongs.net",
  bucket: "<value>",
  path: "/etc/periodic",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `url`                                               | *string*                                            | :heavy_check_mark:                                  | The signed URL to upload the zip file to.           |
| `bucket`                                            | *string*                                            | :heavy_check_mark:                                  | The bucket (will match the bucket part of the url). |
| `path`                                              | *string*                                            | :heavy_check_mark:                                  | The path (will match the path part of the url).     |