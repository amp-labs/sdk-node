<br/>
<div align="center">
    <a href="https://www.withampersand.com/?utm_source=github&utm_medium=readme&utm_campaign=connectors-repo&utm_content=logo">
    <img src="https://res.cloudinary.com/dycvts6vp/image/upload/v1723671980/ampersand-logo-black.svg" height="30" align="center" alt="Ampersand logo" >
    </a>
<br/>
<br/>

<div align="center">

[![Star us on GitHub](https://img.shields.io/github/stars/amp-labs/connectors?color=FFD700&label=Stars&logo=Github)](https://github.com/amp-labs/connectors) [![Discord](https://img.shields.io/badge/Join%20The%20Community-black?logo=discord)](https://discord.gg/BWP4BpKHvf) [![Documentation](https://img.shields.io/badge/Read%20our%20Documentation-black?logo=book)](https://docs.withampersand.com) ![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=white" alt="License">
</div>

</div>

# Overview

[Ampersand](https://withampersand.com?trk=readme-github) is a declarative platform for SaaS builders who are creating product integrations. It allows you to:

* Read data from your customer’s SaaS
* Write data to your customer’s SaaS
* Coming soon: subscribe to events (creates, deletes, and field changes) in your customer’s SaaS

This repo hosts a developer-friendly & type-safe Typescript SDK specifically catered to leverage the Ampersand API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/amp-labs/sdk-node
```

### PNPM

```bash
pnpm add https://github.com/amp-labs/sdk-node
```

### Bun

```bash
bun add https://github.com/amp-labs/sdk-node
```

### Yarn

```bash
yarn add https://github.com/amp-labs/sdk-node zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.read.records({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    objectName: "<value>",
    requestBody: {
      groupRef: "<value>",
      mode: "async",
      sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type   | Scheme  |
| -------------- | ------ | ------- |
| `apiKeyHeader` | apiKey | API key |

To authenticate with the API the `apiKeyHeader` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.read.records({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    objectName: "<value>",
    requestBody: {
      groupRef: "<value>",
      mode: "async",
      sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiKey](docs/sdks/apikey/README.md)

* [listApiKeys](docs/sdks/apikey/README.md#listapikeys) - List API keys
* [createApiKey](docs/sdks/apikey/README.md#createapikey) - Create a new API key
* [getApiKey](docs/sdks/apikey/README.md#getapikey) - Get an API key
* [deleteApiKey](docs/sdks/apikey/README.md#deleteapikey) - Delete an API key
* [updateApiKey](docs/sdks/apikey/README.md#updateapikey) - Update an API key

### [billingAccount](docs/sdks/billingaccount/README.md)

* [getOrgBillingAccount](docs/sdks/billingaccount/README.md#getorgbillingaccount) - Get the billing account for an organization
* [createBillingAccountSession](docs/sdks/billingaccount/README.md#createbillingaccountsession) - Create a portal session for a billing account

### [connection](docs/sdks/connection/README.md)

* [listConnections](docs/sdks/connection/README.md#listconnections) - List connections
* [generateConnection](docs/sdks/connection/README.md#generateconnection) - Generate a new connection
* [getConnection](docs/sdks/connection/README.md#getconnection) - Get a connection
* [deleteConnection](docs/sdks/connection/README.md#deleteconnection) - Delete a connection

### [consumer](docs/sdks/consumer/README.md)

* [createConsumer](docs/sdks/consumer/README.md#createconsumer) - Create a new consumer

### [destination](docs/sdks/destination/README.md)

* [createDestination](docs/sdks/destination/README.md#createdestination) - Create a new destination
* [listDestinations](docs/sdks/destination/README.md#listdestinations) - List destinations
* [getDestination](docs/sdks/destination/README.md#getdestination) - Get a destination
* [updateDestination](docs/sdks/destination/README.md#updatedestination) - Update a destination
* [deleteDestination](docs/sdks/destination/README.md#deletedestination) - Delete a destination

### [group](docs/sdks/group/README.md)

* [createGroup](docs/sdks/group/README.md#creategroup) - Create a new group

### [installation](docs/sdks/installation/README.md)

* [listInstallations](docs/sdks/installation/README.md#listinstallations) - List installations
* [createInstallation](docs/sdks/installation/README.md#createinstallation) - Create a new installation
* [getInstallation](docs/sdks/installation/README.md#getinstallation) - Get an installation
* [deleteInstallation](docs/sdks/installation/README.md#deleteinstallation) - Delete an installation
* [updateInstallation](docs/sdks/installation/README.md#updateinstallation) - Update an installation

### [integration](docs/sdks/integration/README.md)

* [listIntegrations](docs/sdks/integration/README.md#listintegrations) - List integrations
* [createIntegration](docs/sdks/integration/README.md#createintegration) - Create a new integration
* [deleteIntegration](docs/sdks/integration/README.md#deleteintegration) - Delete an integration
* [batchUpsertIntegrations](docs/sdks/integration/README.md#batchupsertintegrations) - Batch upsert a group of integrations

### [oAuth](docs/sdks/oauth/README.md)

* [oauthConnect](docs/sdks/oauth/README.md#oauthconnect) - Get URL for OAuth flow

### [objectsAndFields](docs/sdks/objectsandfields/README.md)

* [getObjectMetadata](docs/sdks/objectsandfields/README.md#getobjectmetadata) - Get object and field data

### [operation](docs/sdks/operation/README.md)

* [listOperations](docs/sdks/operation/README.md#listoperations) - List operations
* [getOperation](docs/sdks/operation/README.md#getoperation) - Get an operation
* [listOperationLogs](docs/sdks/operation/README.md#listoperationlogs) - List logs for an operation

### [org](docs/sdks/org/README.md)

* [createOrg](docs/sdks/org/README.md#createorg) - Create a new organization
* [getOrg](docs/sdks/org/README.md#getorg) - Get an organization
* [updateOrg](docs/sdks/org/README.md#updateorg) - Update an organization
* [listOrgBuilders](docs/sdks/org/README.md#listorgbuilders) - List builders for an organization
* [createOrgInvite](docs/sdks/org/README.md#createorginvite) - Invite a user to an organization
* [listOrgInvites](docs/sdks/org/README.md#listorginvites) - List invites for an organization
* [getOrgInvite](docs/sdks/org/README.md#getorginvite) - Get an invite
* [deleteOrgInvite](docs/sdks/org/README.md#deleteorginvite) - Revoke an invite

### [project](docs/sdks/project/README.md)

* [listProjects](docs/sdks/project/README.md#listprojects) - List all projects that the API key or user credential has access to
* [createProject](docs/sdks/project/README.md#createproject) - Create a new project
* [getProject](docs/sdks/project/README.md#getproject) - Get a project
* [deleteProject](docs/sdks/project/README.md#deleteproject) - Delete a project
* [updateProject](docs/sdks/project/README.md#updateproject) - Update a project

### [provider](docs/sdks/provider/README.md)

* [listProviders](docs/sdks/provider/README.md#listproviders) - List providers
* [getProvider](docs/sdks/provider/README.md#getprovider) - Get provider

### [providerApp](docs/sdks/providerapp/README.md)

* [listProviderApps](docs/sdks/providerapp/README.md#listproviderapps) - List provider apps
* [createProviderApp](docs/sdks/providerapp/README.md#createproviderapp) - Create a new provider app
* [deleteProviderApp](docs/sdks/providerapp/README.md#deleteproviderapp) - Delete a provider app
* [updateProviderApp](docs/sdks/providerapp/README.md#updateproviderapp) - Update a provider app

### [read](docs/sdks/read/README.md)

* [records](docs/sdks/read/README.md#records) - Trigger a read
* [deliverResults](docs/sdks/read/README.md#deliverresults) - Deliver results

### [revision](docs/sdks/revision/README.md)

* [createRevision](docs/sdks/revision/README.md#createrevision) - Create a new revision
* [getHydratedRevision](docs/sdks/revision/README.md#gethydratedrevision) - Hydrate a revision


### [uploadURL](docs/sdks/uploadurl/README.md)

* [generateUploadUrl](docs/sdks/uploadurl/README.md#generateuploadurl) - Generate a signed URL to upload a zip file to.

### [user](docs/sdks/user/README.md)

* [getMyInfo](docs/sdks/user/README.md#getmyinfo) - Get information about the current user
* [acceptInvite](docs/sdks/user/README.md#acceptinvite) - Accept an invite

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiKeyCreateAPIKey`](docs/sdks/apikey/README.md#createapikey) - Create a new API key
- [`apiKeyDeleteAPIKey`](docs/sdks/apikey/README.md#deleteapikey) - Delete an API key
- [`apiKeyGetAPIKey`](docs/sdks/apikey/README.md#getapikey) - Get an API key
- [`apiKeyListAPIKeys`](docs/sdks/apikey/README.md#listapikeys) - List API keys
- [`apiKeyUpdateAPIKey`](docs/sdks/apikey/README.md#updateapikey) - Update an API key
- [`billingAccountCreateBillingAccountSession`](docs/sdks/billingaccount/README.md#createbillingaccountsession) - Create a portal session for a billing account
- [`billingAccountGetOrgBillingAccount`](docs/sdks/billingaccount/README.md#getorgbillingaccount) - Get the billing account for an organization
- [`connectionDeleteConnection`](docs/sdks/connection/README.md#deleteconnection) - Delete a connection
- [`connectionGenerateConnection`](docs/sdks/connection/README.md#generateconnection) - Generate a new connection
- [`connectionGetConnection`](docs/sdks/connection/README.md#getconnection) - Get a connection
- [`connectionListConnections`](docs/sdks/connection/README.md#listconnections) - List connections
- [`consumerCreateConsumer`](docs/sdks/consumer/README.md#createconsumer) - Create a new consumer
- [`destinationCreateDestination`](docs/sdks/destination/README.md#createdestination) - Create a new destination
- [`destinationDeleteDestination`](docs/sdks/destination/README.md#deletedestination) - Delete a destination
- [`destinationGetDestination`](docs/sdks/destination/README.md#getdestination) - Get a destination
- [`destinationListDestinations`](docs/sdks/destination/README.md#listdestinations) - List destinations
- [`destinationUpdateDestination`](docs/sdks/destination/README.md#updatedestination) - Update a destination
- [`groupCreateGroup`](docs/sdks/group/README.md#creategroup) - Create a new group
- [`installationCreateInstallation`](docs/sdks/installation/README.md#createinstallation) - Create a new installation
- [`installationDeleteInstallation`](docs/sdks/installation/README.md#deleteinstallation) - Delete an installation
- [`installationGetInstallation`](docs/sdks/installation/README.md#getinstallation) - Get an installation
- [`installationListInstallations`](docs/sdks/installation/README.md#listinstallations) - List installations
- [`installationUpdateInstallation`](docs/sdks/installation/README.md#updateinstallation) - Update an installation
- [`integrationBatchUpsertIntegrations`](docs/sdks/integration/README.md#batchupsertintegrations) - Batch upsert a group of integrations
- [`integrationCreateIntegration`](docs/sdks/integration/README.md#createintegration) - Create a new integration
- [`integrationDeleteIntegration`](docs/sdks/integration/README.md#deleteintegration) - Delete an integration
- [`integrationListIntegrations`](docs/sdks/integration/README.md#listintegrations) - List integrations
- [`oAuthOauthConnect`](docs/sdks/oauth/README.md#oauthconnect) - Get URL for OAuth flow
- [`objectsAndFieldsGetObjectMetadata`](docs/sdks/objectsandfields/README.md#getobjectmetadata) - Get object and field data
- [`operationGetOperation`](docs/sdks/operation/README.md#getoperation) - Get an operation
- [`operationListOperationLogs`](docs/sdks/operation/README.md#listoperationlogs) - List logs for an operation
- [`operationListOperations`](docs/sdks/operation/README.md#listoperations) - List operations
- [`orgCreateOrg`](docs/sdks/org/README.md#createorg) - Create a new organization
- [`orgCreateOrgInvite`](docs/sdks/org/README.md#createorginvite) - Invite a user to an organization
- [`orgDeleteOrgInvite`](docs/sdks/org/README.md#deleteorginvite) - Revoke an invite
- [`orgGetOrg`](docs/sdks/org/README.md#getorg) - Get an organization
- [`orgGetOrgInvite`](docs/sdks/org/README.md#getorginvite) - Get an invite
- [`orgListOrgBuilders`](docs/sdks/org/README.md#listorgbuilders) - List builders for an organization
- [`orgListOrgInvites`](docs/sdks/org/README.md#listorginvites) - List invites for an organization
- [`orgUpdateOrg`](docs/sdks/org/README.md#updateorg) - Update an organization
- [`projectCreateProject`](docs/sdks/project/README.md#createproject) - Create a new project
- [`projectDeleteProject`](docs/sdks/project/README.md#deleteproject) - Delete a project
- [`projectGetProject`](docs/sdks/project/README.md#getproject) - Get a project
- [`projectListProjects`](docs/sdks/project/README.md#listprojects) - List all projects that the API key or user credential has access to
- [`projectUpdateProject`](docs/sdks/project/README.md#updateproject) - Update a project
- [`providerAppCreateProviderApp`](docs/sdks/providerapp/README.md#createproviderapp) - Create a new provider app
- [`providerAppDeleteProviderApp`](docs/sdks/providerapp/README.md#deleteproviderapp) - Delete a provider app
- [`providerAppListProviderApps`](docs/sdks/providerapp/README.md#listproviderapps) - List provider apps
- [`providerAppUpdateProviderApp`](docs/sdks/providerapp/README.md#updateproviderapp) - Update a provider app
- [`providerGetProvider`](docs/sdks/provider/README.md#getprovider) - Get provider
- [`providerListProviders`](docs/sdks/provider/README.md#listproviders) - List providers
- [`readDeliverResults`](docs/sdks/read/README.md#deliverresults) - Deliver results
- [`readRecords`](docs/sdks/read/README.md#records) - Trigger a read
- [`revisionCreateRevision`](docs/sdks/revision/README.md#createrevision) - Create a new revision
- [`revisionGetHydratedRevision`](docs/sdks/revision/README.md#gethydratedrevision) - Hydrate a revision
- [`uploadURLGenerateUploadURL`](docs/sdks/uploadurl/README.md#generateuploadurl) - Generate a signed URL to upload a zip file to.
- [`userAcceptInvite`](docs/sdks/user/README.md#acceptinvite) - Accept an invite
- [`userGetMyInfo`](docs/sdks/user/README.md#getmyinfo) - Get information about the current user

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.read.records({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    objectName: "<value>",
    requestBody: {
      groupRef: "<value>",
      mode: "async",
      sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
    },
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.read.records({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    objectName: "<value>",
    requestBody: {
      groupRef: "<value>",
      mode: "async",
      sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `records` method may throw the following errors:

| Error Type                         | Status Code | Content Type     |
| ---------------------------------- | ----------- | ---------------- |
| errors.TriggerReadResponseBody     | 400         | application/json |
| errors.TriggerReadReadResponseBody | 500         | application/json |
| errors.APIError                    | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { SDK } from "openapi";
import {
  SDKValidationError,
  TriggerReadReadResponseBody,
  TriggerReadResponseBody,
} from "openapi/models/errors";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  let result;
  try {
    result = await sdk.read.records({
      projectIdOrName: "<value>",
      integrationId: "<id>",
      objectName: "<value>",
      requestBody: {
        groupRef: "<value>",
        mode: "async",
        sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof TriggerReadResponseBody): {
        // Handle err.data$: TriggerReadResponseBodyData
        console.error(err);
        return;
      }
      case (err instanceof TriggerReadReadResponseBody): {
        // Handle err.data$: TriggerReadReadResponseBodyData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  serverURL: "https://read.withampersand.com/v1",
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.read.records({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    objectName: "<value>",
    requestBody: {
      groupRef: "<value>",
      mode: "async",
      sinceTimestamp: "2024-07-01T18:22:30.323771761Z",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:
```typescript
import { SDK } from "openapi";

const sdk = new SDK();

async function run() {
  const result = await sdk.oAuth.oauthConnect({
    providerWorkspaceRef: "salesforce-instance-domain",
    projectId: "<id>",
    groupRef: "<value>",
    consumerRef: "<value>",
    provider: "salesforce",
  }, {
    serverURL: "https://api.withampersand.com/v1",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SDK } from "openapi";
import { HTTPClient } from "openapi/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { SDK } from "openapi";

const sdk = new SDK({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 
