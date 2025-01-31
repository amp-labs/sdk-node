# GetProviderOauth2Opts

Configuration for OAuth2.0. Must be provided if authType is oauth2.

## Example Usage

```typescript
import { GetProviderOauth2Opts } from "openapi/models/operations";

let value: GetProviderOauth2Opts = {
  grantType: "clientCredentials",
  authURL: "https://login.salesforce.com/services/oauth2/authorize",
  tokenURL: "https://login.salesforce.com/services/oauth2/token",
  explicitScopesRequired: true,
  explicitWorkspaceRequired: true,
  audience: [
    "https://api.mparticle.com",
  ],
  tokenMetadataFields: {
    workspaceRefField: "account-id",
    consumerRefField: "user-id",
    scopesField: "scopes",
  },
  docsURL: "https://docs.example.com/client-credentials",
  authURLParams: {
    "access_type": "offline",
    "duration": "permanent",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `grantType`                                                                                                       | [operations.GetProviderGrantType](../../models/operations/getprovidergranttype.md)                                | :heavy_check_mark:                                                                                                | N/A                                                                                                               |                                                                                                                   |
| `authURL`                                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The authorization URL.                                                                                            | https://login.salesforce.com/services/oauth2/authorize                                                            |
| `tokenURL`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The token URL.                                                                                                    | https://login.salesforce.com/services/oauth2/token                                                                |
| `explicitScopesRequired`                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | Whether scopes are required to be known ahead of the OAuth flow.                                                  | true                                                                                                              |
| `explicitWorkspaceRequired`                                                                                       | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | Whether the workspace is required to be known ahead of the OAuth flow.                                            | true                                                                                                              |
| `audience`                                                                                                        | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | A list of URLs that represent the audience for the token, which is needed for some client credential grant flows. | [<br/>"https://api.mparticle.com"<br/>]                                                                           |
| `tokenMetadataFields`                                                                                             | [operations.GetProviderTokenMetadataFields](../../models/operations/getprovidertokenmetadatafields.md)            | :heavy_check_mark:                                                                                                | Fields to be used to extract token metadata from the token response.                                              |                                                                                                                   |
| `docsURL`                                                                                                         | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | URL with more information about where to retrieve Client ID and Client Secret, etc.                               | https://docs.example.com/client-credentials                                                                       |
| `authURLParams`                                                                                                   | Record<string, *string*>                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               | {<br/>"access_type": "offline",<br/>"duration": "permanent"<br/>}                                                 |