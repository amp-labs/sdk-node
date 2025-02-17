/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetProjectServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type GetProjectRequest = {
  projectIdOrName: string;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type GetProjectProjectsResponseBody = {
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
 * Project
 */
export type GetProjectResponseBody = {
  /**
   * The project ID.
   */
  id: string;
  /**
   * The project name.
   */
  name: string;
  /**
   * The name of the application, which is displayed to end users.
   */
  appName: string;
  /**
   * The organization ID that this project belongs to.
   */
  orgId?: string | undefined;
  /**
   * The time the project was created.
   */
  createTime: Date;
  /**
   * The time the project was updated.
   */
  updateTime?: Date | undefined;
};

export type GetProjectResponse =
  | GetProjectResponseBody
  | GetProjectProjectsResponseBody;

/** @internal */
export const GetProjectRequest$inboundSchema: z.ZodType<
  GetProjectRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
});

/** @internal */
export type GetProjectRequest$Outbound = {
  projectIdOrName: string;
};

/** @internal */
export const GetProjectRequest$outboundSchema: z.ZodType<
  GetProjectRequest$Outbound,
  z.ZodTypeDef,
  GetProjectRequest
> = z.object({
  projectIdOrName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectRequest$ {
  /** @deprecated use `GetProjectRequest$inboundSchema` instead. */
  export const inboundSchema = GetProjectRequest$inboundSchema;
  /** @deprecated use `GetProjectRequest$outboundSchema` instead. */
  export const outboundSchema = GetProjectRequest$outboundSchema;
  /** @deprecated use `GetProjectRequest$Outbound` instead. */
  export type Outbound = GetProjectRequest$Outbound;
}

export function getProjectRequestToJSON(
  getProjectRequest: GetProjectRequest,
): string {
  return JSON.stringify(
    GetProjectRequest$outboundSchema.parse(getProjectRequest),
  );
}

export function getProjectRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetProjectRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProjectRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProjectRequest' from JSON`,
  );
}

/** @internal */
export const GetProjectProjectsResponseBody$inboundSchema: z.ZodType<
  GetProjectProjectsResponseBody,
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
export type GetProjectProjectsResponseBody$Outbound = {
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
export const GetProjectProjectsResponseBody$outboundSchema: z.ZodType<
  GetProjectProjectsResponseBody$Outbound,
  z.ZodTypeDef,
  GetProjectProjectsResponseBody
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
export namespace GetProjectProjectsResponseBody$ {
  /** @deprecated use `GetProjectProjectsResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetProjectProjectsResponseBody$inboundSchema;
  /** @deprecated use `GetProjectProjectsResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetProjectProjectsResponseBody$outboundSchema;
  /** @deprecated use `GetProjectProjectsResponseBody$Outbound` instead. */
  export type Outbound = GetProjectProjectsResponseBody$Outbound;
}

export function getProjectProjectsResponseBodyToJSON(
  getProjectProjectsResponseBody: GetProjectProjectsResponseBody,
): string {
  return JSON.stringify(
    GetProjectProjectsResponseBody$outboundSchema.parse(
      getProjectProjectsResponseBody,
    ),
  );
}

export function getProjectProjectsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetProjectProjectsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProjectProjectsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProjectProjectsResponseBody' from JSON`,
  );
}

/** @internal */
export const GetProjectResponseBody$inboundSchema: z.ZodType<
  GetProjectResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  appName: z.string(),
  orgId: z.string().optional(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type GetProjectResponseBody$Outbound = {
  id: string;
  name: string;
  appName: string;
  orgId?: string | undefined;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const GetProjectResponseBody$outboundSchema: z.ZodType<
  GetProjectResponseBody$Outbound,
  z.ZodTypeDef,
  GetProjectResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  appName: z.string(),
  orgId: z.string().optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectResponseBody$ {
  /** @deprecated use `GetProjectResponseBody$inboundSchema` instead. */
  export const inboundSchema = GetProjectResponseBody$inboundSchema;
  /** @deprecated use `GetProjectResponseBody$outboundSchema` instead. */
  export const outboundSchema = GetProjectResponseBody$outboundSchema;
  /** @deprecated use `GetProjectResponseBody$Outbound` instead. */
  export type Outbound = GetProjectResponseBody$Outbound;
}

export function getProjectResponseBodyToJSON(
  getProjectResponseBody: GetProjectResponseBody,
): string {
  return JSON.stringify(
    GetProjectResponseBody$outboundSchema.parse(getProjectResponseBody),
  );
}

export function getProjectResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<GetProjectResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProjectResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProjectResponseBody' from JSON`,
  );
}

/** @internal */
export const GetProjectResponse$inboundSchema: z.ZodType<
  GetProjectResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetProjectResponseBody$inboundSchema),
  z.lazy(() => GetProjectProjectsResponseBody$inboundSchema),
]);

/** @internal */
export type GetProjectResponse$Outbound =
  | GetProjectResponseBody$Outbound
  | GetProjectProjectsResponseBody$Outbound;

/** @internal */
export const GetProjectResponse$outboundSchema: z.ZodType<
  GetProjectResponse$Outbound,
  z.ZodTypeDef,
  GetProjectResponse
> = z.union([
  z.lazy(() => GetProjectResponseBody$outboundSchema),
  z.lazy(() => GetProjectProjectsResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetProjectResponse$ {
  /** @deprecated use `GetProjectResponse$inboundSchema` instead. */
  export const inboundSchema = GetProjectResponse$inboundSchema;
  /** @deprecated use `GetProjectResponse$outboundSchema` instead. */
  export const outboundSchema = GetProjectResponse$outboundSchema;
  /** @deprecated use `GetProjectResponse$Outbound` instead. */
  export type Outbound = GetProjectResponse$Outbound;
}

export function getProjectResponseToJSON(
  getProjectResponse: GetProjectResponse,
): string {
  return JSON.stringify(
    GetProjectResponse$outboundSchema.parse(getProjectResponse),
  );
}

export function getProjectResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetProjectResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProjectResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProjectResponse' from JSON`,
  );
}
