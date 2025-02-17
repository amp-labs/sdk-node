<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "sdk-node";

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