/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetDestinationServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type GetDestinationRequest = {
  projectIdOrName: string;
  /**
   * The destination name
   */
  destination: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type GetDestinationAPIProblem = {
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

export type GetDestinationMetadata = {
  /**
   * Webhook URL
   */
  url?: string | undefined;
  /**
   * Additional headers to add when Ampersand sends a webhook message
   */
  headers?: { [k: string]: string } | null | undefined;
};

/**
 * OK
 */
export type GetDestinationDestination = {
  /**
   * The destination ID.
   */
  id: string;
  /**
   * User-defined name for the destination
   */
  name: string;
  /**
   * The type of the destination
   */
  type: string;
  metadata: GetDestinationMetadata;
  /**
   * The time the destination was created.
   */
  createTime: Date;
  /**
   * The time the destination was updated.
   */
  updateTime?: Date | undefined;
};

export type GetDestinationResponse =
  | GetDestinationDestination
  | GetDestinationAPIProblem;

/** @internal */
export const GetDestinationRequest$inboundSchema: z.ZodType<
  GetDestinationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  destination: z.string(),
});

/** @internal */
export type GetDestinationRequest$Outbound = {
  projectIdOrName: string;
  destination: string;
};

/** @internal */
export const GetDestinationRequest$outboundSchema: z.ZodType<
  GetDestinationRequest$Outbound,
  z.ZodTypeDef,
  GetDestinationRequest
> = z.object({
  projectIdOrName: z.string(),
  destination: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDestinationRequest$ {
  /** @deprecated use `GetDestinationRequest$inboundSchema` instead. */
  export const inboundSchema = GetDestinationRequest$inboundSchema;
  /** @deprecated use `GetDestinationRequest$outboundSchema` instead. */
  export const outboundSchema = GetDestinationRequest$outboundSchema;
  /** @deprecated use `GetDestinationRequest$Outbound` instead. */
  export type Outbound = GetDestinationRequest$Outbound;
}

export function getDestinationRequestToJSON(
  getDestinationRequest: GetDestinationRequest,
): string {
  return JSON.stringify(
    GetDestinationRequest$outboundSchema.parse(getDestinationRequest),
  );
}

export function getDestinationRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDestinationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDestinationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDestinationRequest' from JSON`,
  );
}

/** @internal */
export const GetDestinationAPIProblem$inboundSchema: z.ZodType<
  GetDestinationAPIProblem,
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
export type GetDestinationAPIProblem$Outbound = {
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
export const GetDestinationAPIProblem$outboundSchema: z.ZodType<
  GetDestinationAPIProblem$Outbound,
  z.ZodTypeDef,
  GetDestinationAPIProblem
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
export namespace GetDestinationAPIProblem$ {
  /** @deprecated use `GetDestinationAPIProblem$inboundSchema` instead. */
  export const inboundSchema = GetDestinationAPIProblem$inboundSchema;
  /** @deprecated use `GetDestinationAPIProblem$outboundSchema` instead. */
  export const outboundSchema = GetDestinationAPIProblem$outboundSchema;
  /** @deprecated use `GetDestinationAPIProblem$Outbound` instead. */
  export type Outbound = GetDestinationAPIProblem$Outbound;
}

export function getDestinationAPIProblemToJSON(
  getDestinationAPIProblem: GetDestinationAPIProblem,
): string {
  return JSON.stringify(
    GetDestinationAPIProblem$outboundSchema.parse(getDestinationAPIProblem),
  );
}

export function getDestinationAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<GetDestinationAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDestinationAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDestinationAPIProblem' from JSON`,
  );
}

/** @internal */
export const GetDestinationMetadata$inboundSchema: z.ZodType<
  GetDestinationMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().optional(),
  headers: z.nullable(z.record(z.string())).optional(),
});

/** @internal */
export type GetDestinationMetadata$Outbound = {
  url?: string | undefined;
  headers?: { [k: string]: string } | null | undefined;
};

/** @internal */
export const GetDestinationMetadata$outboundSchema: z.ZodType<
  GetDestinationMetadata$Outbound,
  z.ZodTypeDef,
  GetDestinationMetadata
> = z.object({
  url: z.string().optional(),
  headers: z.nullable(z.record(z.string())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDestinationMetadata$ {
  /** @deprecated use `GetDestinationMetadata$inboundSchema` instead. */
  export const inboundSchema = GetDestinationMetadata$inboundSchema;
  /** @deprecated use `GetDestinationMetadata$outboundSchema` instead. */
  export const outboundSchema = GetDestinationMetadata$outboundSchema;
  /** @deprecated use `GetDestinationMetadata$Outbound` instead. */
  export type Outbound = GetDestinationMetadata$Outbound;
}

export function getDestinationMetadataToJSON(
  getDestinationMetadata: GetDestinationMetadata,
): string {
  return JSON.stringify(
    GetDestinationMetadata$outboundSchema.parse(getDestinationMetadata),
  );
}

export function getDestinationMetadataFromJSON(
  jsonString: string,
): SafeParseResult<GetDestinationMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDestinationMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDestinationMetadata' from JSON`,
  );
}

/** @internal */
export const GetDestinationDestination$inboundSchema: z.ZodType<
  GetDestinationDestination,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  metadata: z.lazy(() => GetDestinationMetadata$inboundSchema),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type GetDestinationDestination$Outbound = {
  id: string;
  name: string;
  type: string;
  metadata: GetDestinationMetadata$Outbound;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const GetDestinationDestination$outboundSchema: z.ZodType<
  GetDestinationDestination$Outbound,
  z.ZodTypeDef,
  GetDestinationDestination
> = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string(),
  metadata: z.lazy(() => GetDestinationMetadata$outboundSchema),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDestinationDestination$ {
  /** @deprecated use `GetDestinationDestination$inboundSchema` instead. */
  export const inboundSchema = GetDestinationDestination$inboundSchema;
  /** @deprecated use `GetDestinationDestination$outboundSchema` instead. */
  export const outboundSchema = GetDestinationDestination$outboundSchema;
  /** @deprecated use `GetDestinationDestination$Outbound` instead. */
  export type Outbound = GetDestinationDestination$Outbound;
}

export function getDestinationDestinationToJSON(
  getDestinationDestination: GetDestinationDestination,
): string {
  return JSON.stringify(
    GetDestinationDestination$outboundSchema.parse(getDestinationDestination),
  );
}

export function getDestinationDestinationFromJSON(
  jsonString: string,
): SafeParseResult<GetDestinationDestination, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDestinationDestination$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDestinationDestination' from JSON`,
  );
}

/** @internal */
export const GetDestinationResponse$inboundSchema: z.ZodType<
  GetDestinationResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetDestinationDestination$inboundSchema),
  z.lazy(() => GetDestinationAPIProblem$inboundSchema),
]);

/** @internal */
export type GetDestinationResponse$Outbound =
  | GetDestinationDestination$Outbound
  | GetDestinationAPIProblem$Outbound;

/** @internal */
export const GetDestinationResponse$outboundSchema: z.ZodType<
  GetDestinationResponse$Outbound,
  z.ZodTypeDef,
  GetDestinationResponse
> = z.union([
  z.lazy(() => GetDestinationDestination$outboundSchema),
  z.lazy(() => GetDestinationAPIProblem$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDestinationResponse$ {
  /** @deprecated use `GetDestinationResponse$inboundSchema` instead. */
  export const inboundSchema = GetDestinationResponse$inboundSchema;
  /** @deprecated use `GetDestinationResponse$outboundSchema` instead. */
  export const outboundSchema = GetDestinationResponse$outboundSchema;
  /** @deprecated use `GetDestinationResponse$Outbound` instead. */
  export type Outbound = GetDestinationResponse$Outbound;
}

export function getDestinationResponseToJSON(
  getDestinationResponse: GetDestinationResponse,
): string {
  return JSON.stringify(
    GetDestinationResponse$outboundSchema.parse(getDestinationResponse),
  );
}

export function getDestinationResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDestinationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDestinationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDestinationResponse' from JSON`,
  );
}
