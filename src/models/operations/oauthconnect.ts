/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const OauthConnectServerList = [
  "https://api.withampersand.com/v1",
] as const;

export type OauthConnectRequestBody = {
  /**
   * The identifier for the provider workspace
   */
  providerWorkspaceRef?: string | undefined;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The ID that your app uses to identify the group of users for this Connection, this can be an Org ID, workspace ID, etc.
   */
  groupRef: string;
  /**
   * The display name for the group. Defaults to groupRef if not provided.
   */
  groupName?: string | undefined;
  /**
   * The ID that your app uses to identify the user whose SaaS credential will be used for this OAuth flow.
   */
  consumerRef: string;
  /**
   * The display name for the consumer. Defaults to consumerRef if not provided.
   */
  consumerName?: string | undefined;
  /**
   * ID of the provider app (e.g. Salesforce connected app), returned from a CreateProviderApp call. If omitted, the default provider app that was set up on the Ampersand Dashboard is assumed.
   */
  providerAppId?: string | undefined;
  /**
   * The provider that this app connects to.
   */
  provider: string;
  enableCSRFProtection?: boolean | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type OauthConnectResponseBody = {
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

export type OauthConnectResponse = OauthConnectResponseBody | string;

/** @internal */
export const OauthConnectRequestBody$inboundSchema: z.ZodType<
  OauthConnectRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  providerWorkspaceRef: z.string().optional(),
  projectId: z.string(),
  groupRef: z.string(),
  groupName: z.string().optional(),
  consumerRef: z.string(),
  consumerName: z.string().optional(),
  providerAppId: z.string().optional(),
  provider: z.string(),
  enableCSRFProtection: z.boolean().optional(),
});

/** @internal */
export type OauthConnectRequestBody$Outbound = {
  providerWorkspaceRef?: string | undefined;
  projectId: string;
  groupRef: string;
  groupName?: string | undefined;
  consumerRef: string;
  consumerName?: string | undefined;
  providerAppId?: string | undefined;
  provider: string;
  enableCSRFProtection?: boolean | undefined;
};

/** @internal */
export const OauthConnectRequestBody$outboundSchema: z.ZodType<
  OauthConnectRequestBody$Outbound,
  z.ZodTypeDef,
  OauthConnectRequestBody
> = z.object({
  providerWorkspaceRef: z.string().optional(),
  projectId: z.string(),
  groupRef: z.string(),
  groupName: z.string().optional(),
  consumerRef: z.string(),
  consumerName: z.string().optional(),
  providerAppId: z.string().optional(),
  provider: z.string(),
  enableCSRFProtection: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OauthConnectRequestBody$ {
  /** @deprecated use `OauthConnectRequestBody$inboundSchema` instead. */
  export const inboundSchema = OauthConnectRequestBody$inboundSchema;
  /** @deprecated use `OauthConnectRequestBody$outboundSchema` instead. */
  export const outboundSchema = OauthConnectRequestBody$outboundSchema;
  /** @deprecated use `OauthConnectRequestBody$Outbound` instead. */
  export type Outbound = OauthConnectRequestBody$Outbound;
}

export function oauthConnectRequestBodyToJSON(
  oauthConnectRequestBody: OauthConnectRequestBody,
): string {
  return JSON.stringify(
    OauthConnectRequestBody$outboundSchema.parse(oauthConnectRequestBody),
  );
}

export function oauthConnectRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<OauthConnectRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OauthConnectRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OauthConnectRequestBody' from JSON`,
  );
}

/** @internal */
export const OauthConnectResponseBody$inboundSchema: z.ZodType<
  OauthConnectResponseBody,
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
export type OauthConnectResponseBody$Outbound = {
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
export const OauthConnectResponseBody$outboundSchema: z.ZodType<
  OauthConnectResponseBody$Outbound,
  z.ZodTypeDef,
  OauthConnectResponseBody
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
export namespace OauthConnectResponseBody$ {
  /** @deprecated use `OauthConnectResponseBody$inboundSchema` instead. */
  export const inboundSchema = OauthConnectResponseBody$inboundSchema;
  /** @deprecated use `OauthConnectResponseBody$outboundSchema` instead. */
  export const outboundSchema = OauthConnectResponseBody$outboundSchema;
  /** @deprecated use `OauthConnectResponseBody$Outbound` instead. */
  export type Outbound = OauthConnectResponseBody$Outbound;
}

export function oauthConnectResponseBodyToJSON(
  oauthConnectResponseBody: OauthConnectResponseBody,
): string {
  return JSON.stringify(
    OauthConnectResponseBody$outboundSchema.parse(oauthConnectResponseBody),
  );
}

export function oauthConnectResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<OauthConnectResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OauthConnectResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OauthConnectResponseBody' from JSON`,
  );
}

/** @internal */
export const OauthConnectResponse$inboundSchema: z.ZodType<
  OauthConnectResponse,
  z.ZodTypeDef,
  unknown
> = z.union([z.lazy(() => OauthConnectResponseBody$inboundSchema), z.string()]);

/** @internal */
export type OauthConnectResponse$Outbound =
  | OauthConnectResponseBody$Outbound
  | string;

/** @internal */
export const OauthConnectResponse$outboundSchema: z.ZodType<
  OauthConnectResponse$Outbound,
  z.ZodTypeDef,
  OauthConnectResponse
> = z.union([
  z.lazy(() => OauthConnectResponseBody$outboundSchema),
  z.string(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OauthConnectResponse$ {
  /** @deprecated use `OauthConnectResponse$inboundSchema` instead. */
  export const inboundSchema = OauthConnectResponse$inboundSchema;
  /** @deprecated use `OauthConnectResponse$outboundSchema` instead. */
  export const outboundSchema = OauthConnectResponse$outboundSchema;
  /** @deprecated use `OauthConnectResponse$Outbound` instead. */
  export type Outbound = OauthConnectResponse$Outbound;
}

export function oauthConnectResponseToJSON(
  oauthConnectResponse: OauthConnectResponse,
): string {
  return JSON.stringify(
    OauthConnectResponse$outboundSchema.parse(oauthConnectResponse),
  );
}

export function oauthConnectResponseFromJSON(
  jsonString: string,
): SafeParseResult<OauthConnectResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OauthConnectResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OauthConnectResponse' from JSON`,
  );
}
