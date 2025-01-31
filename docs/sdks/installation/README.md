# Installation
(*installation*)

## Overview

### Available Operations

* [listInstallations](#listinstallations) - List installations
* [createInstallation](#createinstallation) - Create a new installation
* [getInstallation](#getinstallation) - Get an installation
* [deleteInstallation](#deleteinstallation) - Delete an installation
* [updateInstallation](#updateinstallation) - Update an installation

## listInstallations

List installations

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.listInstallations({
    projectIdOrName: "<value>",
    integrationId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { installationListInstallations } from "openapi/funcs/installationListInstallations.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationListInstallations(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInstallationsRequest](../../models/operations/listinstallationsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.ListInstallationsResponse](../../models/operations/listinstallationsresponse.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ListInstallationsResponseBody | 400                                  | application/problem+json             |
| errors.APIError                      | 4XX, 5XX                             | \*/\*                                |

## createInstallation

Create a new installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.createInstallation({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    requestBody: {
      groupRef: "<value>",
      config: {
        content: {
          provider: "salesforce",
        },
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { installationCreateInstallation } from "openapi/funcs/installationCreateInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationCreateInstallation(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    requestBody: {
      groupRef: "<value>",
      config: {
        content: {
          provider: "salesforce",
        },
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateInstallationRequest](../../models/operations/createinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.CreateInstallationResponse](../../models/operations/createinstallationresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.CreateInstallationResponseBody             | 400                                               | application/problem+json                          |
| errors.CreateInstallationInstallationResponseBody | 422                                               | application/problem+json                          |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |

## getInstallation

Get an installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.getInstallation({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { installationGetInstallation } from "openapi/funcs/installationGetInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationGetInstallation(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetInstallationRequest](../../models/operations/getinstallationrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.GetInstallationResponse](../../models/operations/getinstallationresponse.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetInstallationResponseBody | 400                                | application/problem+json           |
| errors.APIError                    | 4XX, 5XX                           | \*/\*                              |

## deleteInstallation

Delete an installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.deleteInstallation({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { installationDeleteInstallation } from "openapi/funcs/installationDeleteInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationDeleteInstallation(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteInstallationRequest](../../models/operations/deleteinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.DeleteInstallationResponseBody](../../models/operations/deleteinstallationresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateInstallation

Update an installation

### Example Usage

```typescript
import { SDK } from "openapi";

const sdk = new SDK({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await sdk.installation.updateInstallation({
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      updateMask: [
        "connectionId",
        "config.content.write.objects.account",
      ],
      installation: {
        connectionId: "connection-123",
        config: {
          content: {
            provider: "salesforce",
            read: {
              objects: {
                "key": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
                "key1": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
              },
            },
            write: {
              objects: {
                "key": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": ":",
                    "8": " ",
                    "9": "\"",
                    "10": "5",
                    "11": "5",
                    "12": "5",
                    "13": "-",
                    "14": "5",
                    "15": "5",
                    "16": "5",
                    "17": "-",
                    "18": "5",
                    "19": "5",
                    "20": "5",
                    "21": "5",
                    "22": "\"",
                    "23": " ",
                    "24": " ",
                    "25": "}",
                  },
                },
                "key1": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": ":",
                    "8": " ",
                    "9": "\"",
                    "10": "5",
                    "11": "5",
                    "12": "5",
                    "13": "-",
                    "14": "5",
                    "15": "5",
                    "16": "5",
                    "17": "-",
                    "18": "5",
                    "19": "5",
                    "20": "5",
                    "21": "5",
                    "22": "\"",
                    "23": " ",
                    "24": " ",
                    "25": "}",
                  },
                },
                "key2": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": ":",
                    "8": " ",
                    "9": "\"",
                    "10": "5",
                    "11": "5",
                    "12": "5",
                    "13": "-",
                    "14": "5",
                    "15": "5",
                    "16": "5",
                    "17": "-",
                    "18": "5",
                    "19": "5",
                    "20": "5",
                    "21": "5",
                    "22": "\"",
                    "23": " ",
                    "24": " ",
                    "25": "}",
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SDKCore } from "openapi/core.js";
import { installationUpdateInstallation } from "openapi/funcs/installationUpdateInstallation.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKeyHeader: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await installationUpdateInstallation(sdk, {
    projectIdOrName: "<value>",
    integrationId: "<id>",
    installationId: "<id>",
    requestBody: {
      updateMask: [
        "connectionId",
        "config.content.write.objects.account",
      ],
      installation: {
        connectionId: "connection-123",
        config: {
          content: {
            provider: "salesforce",
            read: {
              objects: {
                "key": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
                "key1": {
                  objectName: "account",
                  schedule: "*/15 * * * *",
                  destination: "accountWebhook",
                  selectedFields: {
                    "0": true,
                    "1": true,
                    "2": true,
                    "3": true,
                    "4": true,
                    "5": true,
                    "6": true,
                    "7": true,
                    "8": true,
                    "9": true,
                    "10": true,
                    "11": true,
                    "12": true,
                    "13": true,
                    "14": true,
                    "15": true,
                    "16": true,
                    "17": true,
                    "18": true,
                    "19": true,
                    "20": true,
                    "21": true,
                    "22": true,
                    "23": true,
                    "24": true,
                    "25": true,
                  },
                  selectedValueMappings: {
                    "stage": {
                      "open": "scheduled",
                      "closedWon": "won",
                      "closedLost": "lost",
                    },
                  },
                  selectedFieldMappings: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": "N",
                    "8": "u",
                    "9": "m",
                    "10": "b",
                    "11": "e",
                    "12": "r",
                    "13": ":",
                    "14": " ",
                    "15": "p",
                    "16": "h",
                    "17": "o",
                    "18": "n",
                    "19": "e",
                    "20": ",",
                    "21": " ",
                    "22": "f",
                    "23": "a",
                    "24": "x",
                    "25": "N",
                    "26": "u",
                    "27": "m",
                    "28": "b",
                    "29": "e",
                    "30": "r",
                    "31": ":",
                    "32": " ",
                    "33": "f",
                    "34": "a",
                    "35": "x",
                    "36": " ",
                    "37": "}",
                  },
                  backfill: {
                    defaultPeriod: {
                      days: 30,
                      fullHistory: false,
                    },
                  },
                },
              },
            },
            write: {
              objects: {
                "key": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": ":",
                    "8": " ",
                    "9": "\"",
                    "10": "5",
                    "11": "5",
                    "12": "5",
                    "13": "-",
                    "14": "5",
                    "15": "5",
                    "16": "5",
                    "17": "-",
                    "18": "5",
                    "19": "5",
                    "20": "5",
                    "21": "5",
                    "22": "\"",
                    "23": " ",
                    "24": " ",
                    "25": "}",
                  },
                },
                "key1": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": ":",
                    "8": " ",
                    "9": "\"",
                    "10": "5",
                    "11": "5",
                    "12": "5",
                    "13": "-",
                    "14": "5",
                    "15": "5",
                    "16": "5",
                    "17": "-",
                    "18": "5",
                    "19": "5",
                    "20": "5",
                    "21": "5",
                    "22": "\"",
                    "23": " ",
                    "24": " ",
                    "25": "}",
                  },
                },
                "key2": {
                  objectName: "account",
                  selectedValueDefaults: {
                    "0": "{",
                    "1": " ",
                    "2": "p",
                    "3": "h",
                    "4": "o",
                    "5": "n",
                    "6": "e",
                    "7": ":",
                    "8": " ",
                    "9": "\"",
                    "10": "5",
                    "11": "5",
                    "12": "5",
                    "13": "-",
                    "14": "5",
                    "15": "5",
                    "16": "5",
                    "17": "-",
                    "18": "5",
                    "19": "5",
                    "20": "5",
                    "21": "5",
                    "22": "\"",
                    "23": " ",
                    "24": " ",
                    "25": "}",
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateInstallationRequest](../../models/operations/updateinstallationrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |
| `options.serverURL`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | An optional server URL to use.                                                                                                                                                 |

### Response

**Promise\<[operations.UpdateInstallationResponse](../../models/operations/updateinstallationresponse.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.UpdateInstallationResponseBody             | 400                                               | application/problem+json                          |
| errors.UpdateInstallationInstallationResponseBody | 422                                               | application/problem+json                          |
| errors.APIError                                   | 4XX, 5XX                                          | \*/\*                                             |