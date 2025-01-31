/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const UpdateApiKeyServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type ApiKey = {
  /**
   * A short name for the API key.
   */
  label?: string | undefined;
  /**
   * Whether the API key is active.
   */
  active?: boolean | undefined;
  /**
   * The scopes for the API key.
   */
  scopes?: Array<string> | undefined;
};

export type UpdateApiKeyRequestBody = {
  updateMask: Array<string>;
  apiKey: ApiKey;
};

export type UpdateApiKeyRequest = {
  projectIdOrName: string;
  apiKey: string;
  requestBody: UpdateApiKeyRequestBody;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type UpdateAPIKeyAPIKeyResponseBody = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string | undefined;
  /**
   * An absolute URI that, when dereferenced, provides human-readable documentation for the problem type (e.g. using HTML).
   */
  href?: string | undefined;
  /**
   * A short summary of the problem type. Written in English and readable for engineers (usually not suited for non technical stakeholders and not localized).
   */
  title?: string | undefined;
  /**
   * The HTTP status code generated by the origin server for this occurrence of the problem.
   */
  status?: number | undefined;
  /**
   * A human-readable explanation specific to this occurrence of the problem
   */
  detail?: string | undefined;
  /**
   * An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
   */
  instance?: string | undefined;
  /**
   * The subsystem that generated the problem
   */
  subsystem?: string | undefined;
  /**
   * The time the problem occurred, formatted as RFC-3339
   */
  time?: Date | undefined;
  /**
   * A unique identifier for the request, useful for debugging
   */
  requestId?: string | undefined;
  /**
   * A list of problems that caused this problem. This can be used to represent multiple
   *
   * @remarks
   * root causes. There is no guaranteed ordering of the causes.
   */
  causes?: Array<string> | undefined;
  /**
   * A brief description of how to resolve the problem
   */
  remedy?: string | undefined;
  /**
   * An email address to contact for support
   */
  supportEmail?: string | undefined;
  /**
   * A phone number to contact for support
   */
  supportPhone?: string | undefined;
  /**
   * A URL to contact for support
   */
  supportUrl?: string | undefined;
  /**
   * Whether the request can be retried
   */
  retryable?: boolean | undefined;
  /**
   * A timestamp after which the request can be retried, formatted as RFC-3339
   */
  retryAfter?: Date | undefined;
  /**
   * Additional context for the problem
   */
  context?: { [k: string]: any } | undefined;
};

/**
 * API key updated
 */
export type UpdateApiKeyResponseBody = {
  /**
   * The API key.
   */
  key: string;
  /**
   * A short name for the API key.
   */
  label: string;
  /**
   * The scopes for the API key.
   */
  scopes: Array<string>;
  /**
   * The project ID.
   */
  projectId: string;
  /**
   * Whether the API key is active.
   */
  active?: boolean | undefined;
};

export type UpdateApiKeyResponse =
  | UpdateApiKeyResponseBody
  | UpdateAPIKeyAPIKeyResponseBody;

/** @internal */
export const ApiKey$inboundSchema: z.ZodType<ApiKey, z.ZodTypeDef, unknown> = z
  .object({
    label: z.string().optional(),
    active: z.boolean().optional(),
    scopes: z.array(z.string()).optional(),
  });

/** @internal */
export type ApiKey$Outbound = {
  label?: string | undefined;
  active?: boolean | undefined;
  scopes?: Array<string> | undefined;
};

/** @internal */
export const ApiKey$outboundSchema: z.ZodType<
  ApiKey$Outbound,
  z.ZodTypeDef,
  ApiKey
> = z.object({
  label: z.string().optional(),
  active: z.boolean().optional(),
  scopes: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiKey$ {
  /** @deprecated use `ApiKey$inboundSchema` instead. */
  export const inboundSchema = ApiKey$inboundSchema;
  /** @deprecated use `ApiKey$outboundSchema` instead. */
  export const outboundSchema = ApiKey$outboundSchema;
  /** @deprecated use `ApiKey$Outbound` instead. */
  export type Outbound = ApiKey$Outbound;
}

export function apiKeyToJSON(apiKey: ApiKey): string {
  return JSON.stringify(ApiKey$outboundSchema.parse(apiKey));
}

export function apiKeyFromJSON(
  jsonString: string,
): SafeParseResult<ApiKey, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApiKey$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApiKey' from JSON`,
  );
}

/** @internal */
export const UpdateApiKeyRequestBody$inboundSchema: z.ZodType<
  UpdateApiKeyRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  updateMask: z.array(z.string()),
  apiKey: z.lazy(() => ApiKey$inboundSchema),
});

/** @internal */
export type UpdateApiKeyRequestBody$Outbound = {
  updateMask: Array<string>;
  apiKey: ApiKey$Outbound;
};

/** @internal */
export const UpdateApiKeyRequestBody$outboundSchema: z.ZodType<
  UpdateApiKeyRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateApiKeyRequestBody
> = z.object({
  updateMask: z.array(z.string()),
  apiKey: z.lazy(() => ApiKey$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApiKeyRequestBody$ {
  /** @deprecated use `UpdateApiKeyRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateApiKeyRequestBody$inboundSchema;
  /** @deprecated use `UpdateApiKeyRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateApiKeyRequestBody$outboundSchema;
  /** @deprecated use `UpdateApiKeyRequestBody$Outbound` instead. */
  export type Outbound = UpdateApiKeyRequestBody$Outbound;
}

export function updateApiKeyRequestBodyToJSON(
  updateApiKeyRequestBody: UpdateApiKeyRequestBody,
): string {
  return JSON.stringify(
    UpdateApiKeyRequestBody$outboundSchema.parse(updateApiKeyRequestBody),
  );
}

export function updateApiKeyRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateApiKeyRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateApiKeyRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateApiKeyRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateApiKeyRequest$inboundSchema: z.ZodType<
  UpdateApiKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  apiKey: z.string(),
  RequestBody: z.lazy(() => UpdateApiKeyRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateApiKeyRequest$Outbound = {
  projectIdOrName: string;
  apiKey: string;
  RequestBody: UpdateApiKeyRequestBody$Outbound;
};

/** @internal */
export const UpdateApiKeyRequest$outboundSchema: z.ZodType<
  UpdateApiKeyRequest$Outbound,
  z.ZodTypeDef,
  UpdateApiKeyRequest
> = z.object({
  projectIdOrName: z.string(),
  apiKey: z.string(),
  requestBody: z.lazy(() => UpdateApiKeyRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApiKeyRequest$ {
  /** @deprecated use `UpdateApiKeyRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateApiKeyRequest$inboundSchema;
  /** @deprecated use `UpdateApiKeyRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateApiKeyRequest$outboundSchema;
  /** @deprecated use `UpdateApiKeyRequest$Outbound` instead. */
  export type Outbound = UpdateApiKeyRequest$Outbound;
}

export function updateApiKeyRequestToJSON(
  updateApiKeyRequest: UpdateApiKeyRequest,
): string {
  return JSON.stringify(
    UpdateApiKeyRequest$outboundSchema.parse(updateApiKeyRequest),
  );
}

export function updateApiKeyRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateApiKeyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateApiKeyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateApiKeyRequest' from JSON`,
  );
}

/** @internal */
export const UpdateAPIKeyAPIKeyResponseBody$inboundSchema: z.ZodType<
  UpdateAPIKeyAPIKeyResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string().default("about:blank"),
  href: z.string().optional(),
  title: z.string().optional(),
  status: z.number().int().optional(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  subsystem: z.string().optional(),
  time: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  requestId: z.string().optional(),
  causes: z.array(z.string()).optional(),
  remedy: z.string().optional(),
  supportEmail: z.string().optional(),
  supportPhone: z.string().optional(),
  supportUrl: z.string().optional(),
  retryable: z.boolean().optional(),
  retryAfter: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  context: z.record(z.any()).optional(),
});

/** @internal */
export type UpdateAPIKeyAPIKeyResponseBody$Outbound = {
  type: string;
  href?: string | undefined;
  title?: string | undefined;
  status?: number | undefined;
  detail?: string | undefined;
  instance?: string | undefined;
  subsystem?: string | undefined;
  time?: string | undefined;
  requestId?: string | undefined;
  causes?: Array<string> | undefined;
  remedy?: string | undefined;
  supportEmail?: string | undefined;
  supportPhone?: string | undefined;
  supportUrl?: string | undefined;
  retryable?: boolean | undefined;
  retryAfter?: string | undefined;
  context?: { [k: string]: any } | undefined;
};

/** @internal */
export const UpdateAPIKeyAPIKeyResponseBody$outboundSchema: z.ZodType<
  UpdateAPIKeyAPIKeyResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateAPIKeyAPIKeyResponseBody
> = z.object({
  type: z.string().default("about:blank"),
  href: z.string().optional(),
  title: z.string().optional(),
  status: z.number().int().optional(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  subsystem: z.string().optional(),
  time: z.date().transform(v => v.toISOString()).optional(),
  requestId: z.string().optional(),
  causes: z.array(z.string()).optional(),
  remedy: z.string().optional(),
  supportEmail: z.string().optional(),
  supportPhone: z.string().optional(),
  supportUrl: z.string().optional(),
  retryable: z.boolean().optional(),
  retryAfter: z.date().transform(v => v.toISOString()).optional(),
  context: z.record(z.any()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAPIKeyAPIKeyResponseBody$ {
  /** @deprecated use `UpdateAPIKeyAPIKeyResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateAPIKeyAPIKeyResponseBody$inboundSchema;
  /** @deprecated use `UpdateAPIKeyAPIKeyResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateAPIKeyAPIKeyResponseBody$outboundSchema;
  /** @deprecated use `UpdateAPIKeyAPIKeyResponseBody$Outbound` instead. */
  export type Outbound = UpdateAPIKeyAPIKeyResponseBody$Outbound;
}

export function updateAPIKeyAPIKeyResponseBodyToJSON(
  updateAPIKeyAPIKeyResponseBody: UpdateAPIKeyAPIKeyResponseBody,
): string {
  return JSON.stringify(
    UpdateAPIKeyAPIKeyResponseBody$outboundSchema.parse(
      updateAPIKeyAPIKeyResponseBody,
    ),
  );
}

export function updateAPIKeyAPIKeyResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateAPIKeyAPIKeyResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateAPIKeyAPIKeyResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateAPIKeyAPIKeyResponseBody' from JSON`,
  );
}

/** @internal */
export const UpdateApiKeyResponseBody$inboundSchema: z.ZodType<
  UpdateApiKeyResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string(),
  label: z.string(),
  scopes: z.array(z.string()),
  projectId: z.string(),
  active: z.boolean().optional(),
});

/** @internal */
export type UpdateApiKeyResponseBody$Outbound = {
  key: string;
  label: string;
  scopes: Array<string>;
  projectId: string;
  active?: boolean | undefined;
};

/** @internal */
export const UpdateApiKeyResponseBody$outboundSchema: z.ZodType<
  UpdateApiKeyResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateApiKeyResponseBody
> = z.object({
  key: z.string(),
  label: z.string(),
  scopes: z.array(z.string()),
  projectId: z.string(),
  active: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApiKeyResponseBody$ {
  /** @deprecated use `UpdateApiKeyResponseBody$inboundSchema` instead. */
  export const inboundSchema = UpdateApiKeyResponseBody$inboundSchema;
  /** @deprecated use `UpdateApiKeyResponseBody$outboundSchema` instead. */
  export const outboundSchema = UpdateApiKeyResponseBody$outboundSchema;
  /** @deprecated use `UpdateApiKeyResponseBody$Outbound` instead. */
  export type Outbound = UpdateApiKeyResponseBody$Outbound;
}

export function updateApiKeyResponseBodyToJSON(
  updateApiKeyResponseBody: UpdateApiKeyResponseBody,
): string {
  return JSON.stringify(
    UpdateApiKeyResponseBody$outboundSchema.parse(updateApiKeyResponseBody),
  );
}

export function updateApiKeyResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateApiKeyResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateApiKeyResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateApiKeyResponseBody' from JSON`,
  );
}

/** @internal */
export const UpdateApiKeyResponse$inboundSchema: z.ZodType<
  UpdateApiKeyResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => UpdateApiKeyResponseBody$inboundSchema),
  z.lazy(() => UpdateAPIKeyAPIKeyResponseBody$inboundSchema),
]);

/** @internal */
export type UpdateApiKeyResponse$Outbound =
  | UpdateApiKeyResponseBody$Outbound
  | UpdateAPIKeyAPIKeyResponseBody$Outbound;

/** @internal */
export const UpdateApiKeyResponse$outboundSchema: z.ZodType<
  UpdateApiKeyResponse$Outbound,
  z.ZodTypeDef,
  UpdateApiKeyResponse
> = z.union([
  z.lazy(() => UpdateApiKeyResponseBody$outboundSchema),
  z.lazy(() => UpdateAPIKeyAPIKeyResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateApiKeyResponse$ {
  /** @deprecated use `UpdateApiKeyResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateApiKeyResponse$inboundSchema;
  /** @deprecated use `UpdateApiKeyResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateApiKeyResponse$outboundSchema;
  /** @deprecated use `UpdateApiKeyResponse$Outbound` instead. */
  export type Outbound = UpdateApiKeyResponse$Outbound;
}

export function updateApiKeyResponseToJSON(
  updateApiKeyResponse: UpdateApiKeyResponse,
): string {
  return JSON.stringify(
    UpdateApiKeyResponse$outboundSchema.parse(updateApiKeyResponse),
  );
}

export function updateApiKeyResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateApiKeyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateApiKeyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateApiKeyResponse' from JSON`,
  );
}
