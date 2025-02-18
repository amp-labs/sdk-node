# GetProviderResponse


## Supported Types

### `operations.GetProviderProviderInfo`

```typescript
const value: operations.GetProviderProviderInfo = {
  name: "<value>",
  authType: "apiKey",
  baseURL: "https://impure-department.com/",
  oauth2Opts: {
    grantType: "authorizationCode",
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
  },
  apiKeyOpts: {
    attachmentType: "header",
    query: {
      name: "api_key",
    },
    header: {
      name: "X-Api-Key",
      valuePrefix: "Bearer ",
    },
    docsURL: "https://docs.example.com/api-key",
  },
  basicOpts: {
    apiKeyAsBasic: true,
    apiKeyAsBasicOpts: {
      fieldUsed: "username",
      keyFormat: "api:%s",
    },
    docsURL: "https://docs.example.com/api-key",
  },
  support: {
    bulkWrite: {
      insert: false,
      update: false,
      upsert: false,
      delete: false,
    },
    proxy: false,
    read: false,
    subscribe: false,
    write: false,
  },
  providerOpts: {
    "key": "<value>",
  },
  displayName: "Zendesk Chat",
  postAuthInfoNeeded: true,
  media: {
    regular: {
      iconURL: "https://example.com/icon.png",
      logoURL: "https://example.com/logo.png",
    },
    darkMode: {
      iconURL: "https://example.com/icon.png",
      logoURL: "https://example.com/logo.png",
    },
  },
};
```

### `operations.GetProviderAPIProblem`

```typescript
const value: operations.GetProviderAPIProblem = {
  href:
    "https://www.belgif.be/specification/rest/api-guide/#standardized-problem-types",
  title: "Description of the type of problem that occurred",
  status: 400,
  detail: "Description of specific occurrence of the problem",
  instance: "urn:uuid:123e4567-e89b-12d3-a456-426614174000",
};
```

