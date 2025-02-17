# TokenMetadataFields

Fields to be used to extract token metadata from the token response.

## Example Usage

```typescript
import { TokenMetadataFields } from "sdk-node/models/operations";

let value: TokenMetadataFields = {
  workspaceRefField: "account-id",
  consumerRefField: "user-id",
  scopesField: "scopes",
};
```

## Fields

| Field               | Type                | Required            | Description         | Example             |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| `workspaceRefField` | *string*            | :heavy_minus_sign:  | N/A                 | account-id          |
| `consumerRefField`  | *string*            | :heavy_minus_sign:  | N/A                 | user-id             |
| `scopesField`       | *string*            | :heavy_minus_sign:  | N/A                 | scopes              |