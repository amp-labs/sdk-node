/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * ResultDeliveryRequestBody
 */
export type DeliverResultsResultDeliveryRequest = {
  /**
   * The ID of the user group whose SaaS instance you'd like to receive results from. This is the ID that was provided during installation creation.
   */
  groupRef: string;
  /**
   * The number of pages you are ready to receive from the group's SaaS instance.
   */
  pages: number;
};

export type DeliverResultsRequest = {
  projectIdOrName: string;
  integrationId: string;
  objectName: string;
  /**
   * ResultDeliveryRequestBody
   */
  requestBody: DeliverResultsResultDeliveryRequest;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type DeliverResultsAPIProblem = {
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

/** @internal */
export const DeliverResultsResultDeliveryRequest$inboundSchema: z.ZodType<
  DeliverResultsResultDeliveryRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  groupRef: z.string(),
  pages: z.number().int(),
});

/** @internal */
export type DeliverResultsResultDeliveryRequest$Outbound = {
  groupRef: string;
  pages: number;
};

/** @internal */
export const DeliverResultsResultDeliveryRequest$outboundSchema: z.ZodType<
  DeliverResultsResultDeliveryRequest$Outbound,
  z.ZodTypeDef,
  DeliverResultsResultDeliveryRequest
> = z.object({
  groupRef: z.string(),
  pages: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliverResultsResultDeliveryRequest$ {
  /** @deprecated use `DeliverResultsResultDeliveryRequest$inboundSchema` instead. */
  export const inboundSchema =
    DeliverResultsResultDeliveryRequest$inboundSchema;
  /** @deprecated use `DeliverResultsResultDeliveryRequest$outboundSchema` instead. */
  export const outboundSchema =
    DeliverResultsResultDeliveryRequest$outboundSchema;
  /** @deprecated use `DeliverResultsResultDeliveryRequest$Outbound` instead. */
  export type Outbound = DeliverResultsResultDeliveryRequest$Outbound;
}

export function deliverResultsResultDeliveryRequestToJSON(
  deliverResultsResultDeliveryRequest: DeliverResultsResultDeliveryRequest,
): string {
  return JSON.stringify(
    DeliverResultsResultDeliveryRequest$outboundSchema.parse(
      deliverResultsResultDeliveryRequest,
    ),
  );
}

export function deliverResultsResultDeliveryRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeliverResultsResultDeliveryRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeliverResultsResultDeliveryRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeliverResultsResultDeliveryRequest' from JSON`,
  );
}

/** @internal */
export const DeliverResultsRequest$inboundSchema: z.ZodType<
  DeliverResultsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  integrationId: z.string(),
  objectName: z.string(),
  RequestBody: z.lazy(() => DeliverResultsResultDeliveryRequest$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type DeliverResultsRequest$Outbound = {
  projectIdOrName: string;
  integrationId: string;
  objectName: string;
  RequestBody: DeliverResultsResultDeliveryRequest$Outbound;
};

/** @internal */
export const DeliverResultsRequest$outboundSchema: z.ZodType<
  DeliverResultsRequest$Outbound,
  z.ZodTypeDef,
  DeliverResultsRequest
> = z.object({
  projectIdOrName: z.string(),
  integrationId: z.string(),
  objectName: z.string(),
  requestBody: z.lazy(() => DeliverResultsResultDeliveryRequest$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliverResultsRequest$ {
  /** @deprecated use `DeliverResultsRequest$inboundSchema` instead. */
  export const inboundSchema = DeliverResultsRequest$inboundSchema;
  /** @deprecated use `DeliverResultsRequest$outboundSchema` instead. */
  export const outboundSchema = DeliverResultsRequest$outboundSchema;
  /** @deprecated use `DeliverResultsRequest$Outbound` instead. */
  export type Outbound = DeliverResultsRequest$Outbound;
}

export function deliverResultsRequestToJSON(
  deliverResultsRequest: DeliverResultsRequest,
): string {
  return JSON.stringify(
    DeliverResultsRequest$outboundSchema.parse(deliverResultsRequest),
  );
}

export function deliverResultsRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeliverResultsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeliverResultsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeliverResultsRequest' from JSON`,
  );
}

/** @internal */
export const DeliverResultsAPIProblem$inboundSchema: z.ZodType<
  DeliverResultsAPIProblem,
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
export type DeliverResultsAPIProblem$Outbound = {
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
export const DeliverResultsAPIProblem$outboundSchema: z.ZodType<
  DeliverResultsAPIProblem$Outbound,
  z.ZodTypeDef,
  DeliverResultsAPIProblem
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
export namespace DeliverResultsAPIProblem$ {
  /** @deprecated use `DeliverResultsAPIProblem$inboundSchema` instead. */
  export const inboundSchema = DeliverResultsAPIProblem$inboundSchema;
  /** @deprecated use `DeliverResultsAPIProblem$outboundSchema` instead. */
  export const outboundSchema = DeliverResultsAPIProblem$outboundSchema;
  /** @deprecated use `DeliverResultsAPIProblem$Outbound` instead. */
  export type Outbound = DeliverResultsAPIProblem$Outbound;
}

export function deliverResultsAPIProblemToJSON(
  deliverResultsAPIProblem: DeliverResultsAPIProblem,
): string {
  return JSON.stringify(
    DeliverResultsAPIProblem$outboundSchema.parse(deliverResultsAPIProblem),
  );
}

export function deliverResultsAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<DeliverResultsAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeliverResultsAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeliverResultsAPIProblem' from JSON`,
  );
}
