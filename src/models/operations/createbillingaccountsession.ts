/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CreateBillingAccountSessionServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type CreateBillingAccountSessionRequestBody = {
  /**
   * The URL to redirect to once a portal session is exited.
   */
  redirectUrl: string;
  /**
   * The number of seconds before the portal session expires.
   */
  timeout?: number | undefined;
};

export type CreateBillingAccountSessionRequest = {
  billingAccountId: string;
  requestBody?: CreateBillingAccountSessionRequestBody | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type CreateBillingAccountSessionBillingAccountResponseBody = {
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
 * OK
 */
export type CreateBillingAccountSessionResponseBody = {
  /**
   * The URL to redirect to in order to start the portal session.
   */
  url: string;
};

export type CreateBillingAccountSessionResponse =
  | CreateBillingAccountSessionResponseBody
  | CreateBillingAccountSessionBillingAccountResponseBody;

/** @internal */
export const CreateBillingAccountSessionRequestBody$inboundSchema: z.ZodType<
  CreateBillingAccountSessionRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  redirectUrl: z.string(),
  timeout: z.number().int().optional(),
});

/** @internal */
export type CreateBillingAccountSessionRequestBody$Outbound = {
  redirectUrl: string;
  timeout?: number | undefined;
};

/** @internal */
export const CreateBillingAccountSessionRequestBody$outboundSchema: z.ZodType<
  CreateBillingAccountSessionRequestBody$Outbound,
  z.ZodTypeDef,
  CreateBillingAccountSessionRequestBody
> = z.object({
  redirectUrl: z.string(),
  timeout: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillingAccountSessionRequestBody$ {
  /** @deprecated use `CreateBillingAccountSessionRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateBillingAccountSessionRequestBody$inboundSchema;
  /** @deprecated use `CreateBillingAccountSessionRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillingAccountSessionRequestBody$outboundSchema;
  /** @deprecated use `CreateBillingAccountSessionRequestBody$Outbound` instead. */
  export type Outbound = CreateBillingAccountSessionRequestBody$Outbound;
}

export function createBillingAccountSessionRequestBodyToJSON(
  createBillingAccountSessionRequestBody:
    CreateBillingAccountSessionRequestBody,
): string {
  return JSON.stringify(
    CreateBillingAccountSessionRequestBody$outboundSchema.parse(
      createBillingAccountSessionRequestBody,
    ),
  );
}

export function createBillingAccountSessionRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateBillingAccountSessionRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBillingAccountSessionRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBillingAccountSessionRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateBillingAccountSessionRequest$inboundSchema: z.ZodType<
  CreateBillingAccountSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  billingAccountId: z.string(),
  RequestBody: z.lazy(() =>
    CreateBillingAccountSessionRequestBody$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type CreateBillingAccountSessionRequest$Outbound = {
  billingAccountId: string;
  RequestBody?: CreateBillingAccountSessionRequestBody$Outbound | undefined;
};

/** @internal */
export const CreateBillingAccountSessionRequest$outboundSchema: z.ZodType<
  CreateBillingAccountSessionRequest$Outbound,
  z.ZodTypeDef,
  CreateBillingAccountSessionRequest
> = z.object({
  billingAccountId: z.string(),
  requestBody: z.lazy(() =>
    CreateBillingAccountSessionRequestBody$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillingAccountSessionRequest$ {
  /** @deprecated use `CreateBillingAccountSessionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateBillingAccountSessionRequest$inboundSchema;
  /** @deprecated use `CreateBillingAccountSessionRequest$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillingAccountSessionRequest$outboundSchema;
  /** @deprecated use `CreateBillingAccountSessionRequest$Outbound` instead. */
  export type Outbound = CreateBillingAccountSessionRequest$Outbound;
}

export function createBillingAccountSessionRequestToJSON(
  createBillingAccountSessionRequest: CreateBillingAccountSessionRequest,
): string {
  return JSON.stringify(
    CreateBillingAccountSessionRequest$outboundSchema.parse(
      createBillingAccountSessionRequest,
    ),
  );
}

export function createBillingAccountSessionRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateBillingAccountSessionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBillingAccountSessionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBillingAccountSessionRequest' from JSON`,
  );
}

/** @internal */
export const CreateBillingAccountSessionBillingAccountResponseBody$inboundSchema:
  z.ZodType<
    CreateBillingAccountSessionBillingAccountResponseBody,
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
    retryAfter: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    context: z.record(z.any()).optional(),
  });

/** @internal */
export type CreateBillingAccountSessionBillingAccountResponseBody$Outbound = {
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
export const CreateBillingAccountSessionBillingAccountResponseBody$outboundSchema:
  z.ZodType<
    CreateBillingAccountSessionBillingAccountResponseBody$Outbound,
    z.ZodTypeDef,
    CreateBillingAccountSessionBillingAccountResponseBody
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
export namespace CreateBillingAccountSessionBillingAccountResponseBody$ {
  /** @deprecated use `CreateBillingAccountSessionBillingAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateBillingAccountSessionBillingAccountResponseBody$inboundSchema;
  /** @deprecated use `CreateBillingAccountSessionBillingAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillingAccountSessionBillingAccountResponseBody$outboundSchema;
  /** @deprecated use `CreateBillingAccountSessionBillingAccountResponseBody$Outbound` instead. */
  export type Outbound =
    CreateBillingAccountSessionBillingAccountResponseBody$Outbound;
}

export function createBillingAccountSessionBillingAccountResponseBodyToJSON(
  createBillingAccountSessionBillingAccountResponseBody:
    CreateBillingAccountSessionBillingAccountResponseBody,
): string {
  return JSON.stringify(
    CreateBillingAccountSessionBillingAccountResponseBody$outboundSchema.parse(
      createBillingAccountSessionBillingAccountResponseBody,
    ),
  );
}

export function createBillingAccountSessionBillingAccountResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateBillingAccountSessionBillingAccountResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBillingAccountSessionBillingAccountResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateBillingAccountSessionBillingAccountResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateBillingAccountSessionResponseBody$inboundSchema: z.ZodType<
  CreateBillingAccountSessionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type CreateBillingAccountSessionResponseBody$Outbound = {
  url: string;
};

/** @internal */
export const CreateBillingAccountSessionResponseBody$outboundSchema: z.ZodType<
  CreateBillingAccountSessionResponseBody$Outbound,
  z.ZodTypeDef,
  CreateBillingAccountSessionResponseBody
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillingAccountSessionResponseBody$ {
  /** @deprecated use `CreateBillingAccountSessionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    CreateBillingAccountSessionResponseBody$inboundSchema;
  /** @deprecated use `CreateBillingAccountSessionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillingAccountSessionResponseBody$outboundSchema;
  /** @deprecated use `CreateBillingAccountSessionResponseBody$Outbound` instead. */
  export type Outbound = CreateBillingAccountSessionResponseBody$Outbound;
}

export function createBillingAccountSessionResponseBodyToJSON(
  createBillingAccountSessionResponseBody:
    CreateBillingAccountSessionResponseBody,
): string {
  return JSON.stringify(
    CreateBillingAccountSessionResponseBody$outboundSchema.parse(
      createBillingAccountSessionResponseBody,
    ),
  );
}

export function createBillingAccountSessionResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  CreateBillingAccountSessionResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBillingAccountSessionResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CreateBillingAccountSessionResponseBody' from JSON`,
  );
}

/** @internal */
export const CreateBillingAccountSessionResponse$inboundSchema: z.ZodType<
  CreateBillingAccountSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => CreateBillingAccountSessionResponseBody$inboundSchema),
  z.lazy(() =>
    CreateBillingAccountSessionBillingAccountResponseBody$inboundSchema
  ),
]);

/** @internal */
export type CreateBillingAccountSessionResponse$Outbound =
  | CreateBillingAccountSessionResponseBody$Outbound
  | CreateBillingAccountSessionBillingAccountResponseBody$Outbound;

/** @internal */
export const CreateBillingAccountSessionResponse$outboundSchema: z.ZodType<
  CreateBillingAccountSessionResponse$Outbound,
  z.ZodTypeDef,
  CreateBillingAccountSessionResponse
> = z.union([
  z.lazy(() => CreateBillingAccountSessionResponseBody$outboundSchema),
  z.lazy(() =>
    CreateBillingAccountSessionBillingAccountResponseBody$outboundSchema
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateBillingAccountSessionResponse$ {
  /** @deprecated use `CreateBillingAccountSessionResponse$inboundSchema` instead. */
  export const inboundSchema =
    CreateBillingAccountSessionResponse$inboundSchema;
  /** @deprecated use `CreateBillingAccountSessionResponse$outboundSchema` instead. */
  export const outboundSchema =
    CreateBillingAccountSessionResponse$outboundSchema;
  /** @deprecated use `CreateBillingAccountSessionResponse$Outbound` instead. */
  export type Outbound = CreateBillingAccountSessionResponse$Outbound;
}

export function createBillingAccountSessionResponseToJSON(
  createBillingAccountSessionResponse: CreateBillingAccountSessionResponse,
): string {
  return JSON.stringify(
    CreateBillingAccountSessionResponse$outboundSchema.parse(
      createBillingAccountSessionResponse,
    ),
  );
}

export function createBillingAccountSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateBillingAccountSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreateBillingAccountSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBillingAccountSessionResponse' from JSON`,
  );
}
