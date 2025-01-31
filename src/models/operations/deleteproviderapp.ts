/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DeleteProviderAppServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type DeleteProviderAppRequest = {
  projectIdOrName: string;
  providerAppId: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type DeleteProviderAppResponseBody = {
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
export const DeleteProviderAppRequest$inboundSchema: z.ZodType<
  DeleteProviderAppRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  providerAppId: z.string(),
});

/** @internal */
export type DeleteProviderAppRequest$Outbound = {
  projectIdOrName: string;
  providerAppId: string;
};

/** @internal */
export const DeleteProviderAppRequest$outboundSchema: z.ZodType<
  DeleteProviderAppRequest$Outbound,
  z.ZodTypeDef,
  DeleteProviderAppRequest
> = z.object({
  projectIdOrName: z.string(),
  providerAppId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProviderAppRequest$ {
  /** @deprecated use `DeleteProviderAppRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteProviderAppRequest$inboundSchema;
  /** @deprecated use `DeleteProviderAppRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteProviderAppRequest$outboundSchema;
  /** @deprecated use `DeleteProviderAppRequest$Outbound` instead. */
  export type Outbound = DeleteProviderAppRequest$Outbound;
}

export function deleteProviderAppRequestToJSON(
  deleteProviderAppRequest: DeleteProviderAppRequest,
): string {
  return JSON.stringify(
    DeleteProviderAppRequest$outboundSchema.parse(deleteProviderAppRequest),
  );
}

export function deleteProviderAppRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProviderAppRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProviderAppRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProviderAppRequest' from JSON`,
  );
}

/** @internal */
export const DeleteProviderAppResponseBody$inboundSchema: z.ZodType<
  DeleteProviderAppResponseBody,
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
export type DeleteProviderAppResponseBody$Outbound = {
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
export const DeleteProviderAppResponseBody$outboundSchema: z.ZodType<
  DeleteProviderAppResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteProviderAppResponseBody
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
export namespace DeleteProviderAppResponseBody$ {
  /** @deprecated use `DeleteProviderAppResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteProviderAppResponseBody$inboundSchema;
  /** @deprecated use `DeleteProviderAppResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteProviderAppResponseBody$outboundSchema;
  /** @deprecated use `DeleteProviderAppResponseBody$Outbound` instead. */
  export type Outbound = DeleteProviderAppResponseBody$Outbound;
}

export function deleteProviderAppResponseBodyToJSON(
  deleteProviderAppResponseBody: DeleteProviderAppResponseBody,
): string {
  return JSON.stringify(
    DeleteProviderAppResponseBody$outboundSchema.parse(
      deleteProviderAppResponseBody,
    ),
  );
}

export function deleteProviderAppResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProviderAppResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProviderAppResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProviderAppResponseBody' from JSON`,
  );
}
