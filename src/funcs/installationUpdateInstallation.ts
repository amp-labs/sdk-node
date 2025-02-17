/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { UpdateInstallationServerList } from "../models/operations/updateinstallation.js";
import { Result } from "../types/fp.js";

export enum UpdateInstallationAcceptEnum {
  applicationJson = "application/json",
  applicationProblemPlusJson = "application/problem+json",
}

/**
 * Update an installation
 */
export async function installationUpdateInstallation(
  client: SDKCore,
  request: operations.UpdateInstallationRequest,
  options?: RequestOptions & {
    acceptHeaderOverride?: UpdateInstallationAcceptEnum;
  },
): Promise<
  Result<
    operations.UpdateInstallationResponse,
    | errors.UpdateInstallationResponseBody
    | errors.UpdateInstallationInstallationResponseBody
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => operations.UpdateInstallationRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.RequestBody, { explode: true });

  const baseURL = options?.serverURL
    || pathToFunc(UpdateInstallationServerList[0], {
      charEncoding: "percent",
    })();

  const pathParams = {
    installationId: encodeSimple("installationId", payload.installationId, {
      explode: false,
      charEncoding: "percent",
    }),
    integrationId: encodeSimple("integrationId", payload.integrationId, {
      explode: false,
      charEncoding: "percent",
    }),
    projectIdOrName: encodeSimple("projectIdOrName", payload.projectIdOrName, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/projects/{projectIdOrName}/integrations/{integrationId}/installations/{installationId}",
  )(pathParams);

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/problem+json;q=0",
  }));

  const secConfig = await extractSecurity(client._options.apiKeyHeader);
  const securityInput = secConfig == null ? {} : { apiKeyHeader: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: baseURL ?? "",
    operationID: "updateInstallation",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKeyHeader,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PATCH",
    baseURL: baseURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.UpdateInstallationResponse,
    | errors.UpdateInstallationResponseBody
    | errors.UpdateInstallationInstallationResponseBody
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.UpdateInstallationResponse$inboundSchema),
    M.jsonErr(400, errors.UpdateInstallationResponseBody$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.jsonErr(
      422,
      errors.UpdateInstallationInstallationResponseBody$inboundSchema,
      { ctype: "application/problem+json" },
    ),
    M.fail("4XX"),
    M.fail("5XX"),
    M.json("default", operations.UpdateInstallationResponse$inboundSchema, {
      ctype: "application/problem+json",
    }),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
