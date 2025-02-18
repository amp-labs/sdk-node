/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const GetConnectionServerList = [
  "https://api.withampersand.com/v1",
] as const;

/**
 * Whether to refresh the access token. If value is `ifExpired`, the access token will be refreshed only if it has expired. If value is `force`, the access token will be refreshed regardless of its expiration.
 */
export const Refresh = {
  Force: "force",
  IfExpired: "ifExpired",
} as const;
/**
 * Whether to refresh the access token. If value is `ifExpired`, the access token will be refreshed only if it has expired. If value is `force`, the access token will be refreshed regardless of its expiration.
 */
export type Refresh = ClosedEnum<typeof Refresh>;

export type GetConnectionRequest = {
  projectIdOrName: string;
  connectionId: string;
  /**
   * Whether to include the credentials in the response. Only access token will be included. Default is false.
   */
  includeCreds?: boolean | undefined;
  /**
   * Whether to include the refresh token in credentials in the response along with access token. If true, the `includeCreds` query parameter will be ignored. Default is false.
   */
  includeRefreshToken?: boolean | undefined;
  /**
   * Whether to refresh the access token. If value is `ifExpired`, the access token will be refreshed only if it has expired. If value is `force`, the access token will be refreshed regardless of its expiration.
   */
  refresh?: Refresh | undefined;
};

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type GetConnectionAPIProblem = {
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

export type GetConnectionProviderApp = {
  /**
   * The provider app ID.
   */
  id: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The ID used by the provider to identify the app (optional).
   */
  externalRef?: string | undefined;
  /**
   * The SaaS provider that this app connects to.
   */
  provider: string;
  /**
   * The OAuth client ID for this app.
   */
  clientId: string;
  /**
   * The OAuth scopes for this app.
   */
  scopes?: Array<string> | undefined;
  /**
   * The time the provider app was created.
   */
  createTime: Date;
  /**
   * The time the provider app was updated.
   */
  updateTime?: Date | undefined;
};

export type GetConnectionGroup = {
  /**
   * The ID of the user group that has access to this installation.
   */
  groupRef: string;
  /**
   * The name of the user group that has access to this installation.
   */
  groupName: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The time the group was created.
   */
  createTime: Date;
  /**
   * The time the group was last updated.
   */
  updateTime?: Date | undefined;
};

export type GetConnectionConsumer = {
  /**
   * The consumer reference.
   */
  consumerRef: string;
  /**
   * The name of the consumer.
   */
  consumerName: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The time the consumer was created.
   */
  createTime: Date;
  /**
   * The time the consumer was last updated.
   */
  updateTime?: Date | undefined;
};

/**
 * The authentication scheme used for this connection.
 */
export const GetConnectionAuthScheme = {
  None: "none",
  ApiKey: "apiKey",
  Basic: "basic",
  Oauth2AuthorizationCode: "oauth2/authorizationCode",
  Oauth2AuthorizationCodePKCE: "oauth2/authorizationCodePKCE",
  Oauth2ClientCredentials: "oauth2/clientCredentials",
  Oauth2Password: "oauth2/password",
} as const;
/**
 * The authentication scheme used for this connection.
 */
export type GetConnectionAuthScheme = ClosedEnum<
  typeof GetConnectionAuthScheme
>;

/**
 * The status of the connection.
 */
export const GetConnectionStatus = {
  Created: "created",
  Working: "working",
  BadCredentials: "bad_credentials",
} as const;
/**
 * The status of the connection.
 */
export type GetConnectionStatus = ClosedEnum<typeof GetConnectionStatus>;

/**
 * The access token for the connection.
 */
export type GetConnectionAccessToken = {
  token: string;
};

/**
 * The refresh token to use for the connection.
 */
export type GetConnectionRefreshToken = {
  token: string;
};

export type GetConnectionOAuth2AuthorizationCodeToken = {
  /**
   * The access token for the connection.
   */
  accessToken?: GetConnectionAccessToken | undefined;
  /**
   * The refresh token to use for the connection.
   */
  refreshToken?: GetConnectionRefreshToken | undefined;
  /**
   * The scopes for the tokens.
   */
  scopes?: Array<string> | undefined;
};

/**
 * Connection
 */
export type GetConnectionConnection = {
  /**
   * The connection ID.
   */
  id: string;
  /**
   * The Ampersand project ID.
   */
  projectId: string;
  /**
   * The SaaS provider that this Connection is for.
   */
  provider: string;
  providerApp?: GetConnectionProviderApp | undefined;
  group: GetConnectionGroup;
  consumer: GetConnectionConsumer;
  /**
   * If available, the identifier for the provider workspace (e.g. "salesforce-instance-domain")
   */
  providerWorkspaceRef?: string | undefined;
  /**
   * If available, the ID that Salesforce/Hubspot uses to identify this user (e.g. Salesforce has IDs in the form of https://login.salesforce.com/id/00D4x0000019CQTEA2/0054x000000orJ4AA)
   */
  providerConsumerRef?: string | undefined;
  /**
   * The time the connection was created.
   */
  createTime: Date;
  /**
   * The time the connection was last updated.
   */
  updateTime?: Date | undefined;
  /**
   * The authentication scheme used for this connection.
   */
  authScheme: GetConnectionAuthScheme;
  /**
   * The status of the connection.
   */
  status: GetConnectionStatus;
  oauth2AuthorizationCode?:
    | GetConnectionOAuth2AuthorizationCodeToken
    | undefined;
  /**
   * The API key used while making the connection.
   */
  apiKey?: string | undefined;
};

export type GetConnectionResponse =
  | GetConnectionConnection
  | GetConnectionAPIProblem;

/** @internal */
export const Refresh$inboundSchema: z.ZodNativeEnum<typeof Refresh> = z
  .nativeEnum(Refresh);

/** @internal */
export const Refresh$outboundSchema: z.ZodNativeEnum<typeof Refresh> =
  Refresh$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Refresh$ {
  /** @deprecated use `Refresh$inboundSchema` instead. */
  export const inboundSchema = Refresh$inboundSchema;
  /** @deprecated use `Refresh$outboundSchema` instead. */
  export const outboundSchema = Refresh$outboundSchema;
}

/** @internal */
export const GetConnectionRequest$inboundSchema: z.ZodType<
  GetConnectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  projectIdOrName: z.string(),
  connectionId: z.string(),
  includeCreds: z.boolean().optional(),
  includeRefreshToken: z.boolean().optional(),
  refresh: Refresh$inboundSchema.optional(),
});

/** @internal */
export type GetConnectionRequest$Outbound = {
  projectIdOrName: string;
  connectionId: string;
  includeCreds?: boolean | undefined;
  includeRefreshToken?: boolean | undefined;
  refresh?: string | undefined;
};

/** @internal */
export const GetConnectionRequest$outboundSchema: z.ZodType<
  GetConnectionRequest$Outbound,
  z.ZodTypeDef,
  GetConnectionRequest
> = z.object({
  projectIdOrName: z.string(),
  connectionId: z.string(),
  includeCreds: z.boolean().optional(),
  includeRefreshToken: z.boolean().optional(),
  refresh: Refresh$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionRequest$ {
  /** @deprecated use `GetConnectionRequest$inboundSchema` instead. */
  export const inboundSchema = GetConnectionRequest$inboundSchema;
  /** @deprecated use `GetConnectionRequest$outboundSchema` instead. */
  export const outboundSchema = GetConnectionRequest$outboundSchema;
  /** @deprecated use `GetConnectionRequest$Outbound` instead. */
  export type Outbound = GetConnectionRequest$Outbound;
}

export function getConnectionRequestToJSON(
  getConnectionRequest: GetConnectionRequest,
): string {
  return JSON.stringify(
    GetConnectionRequest$outboundSchema.parse(getConnectionRequest),
  );
}

export function getConnectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionRequest' from JSON`,
  );
}

/** @internal */
export const GetConnectionAPIProblem$inboundSchema: z.ZodType<
  GetConnectionAPIProblem,
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
export type GetConnectionAPIProblem$Outbound = {
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
export const GetConnectionAPIProblem$outboundSchema: z.ZodType<
  GetConnectionAPIProblem$Outbound,
  z.ZodTypeDef,
  GetConnectionAPIProblem
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
export namespace GetConnectionAPIProblem$ {
  /** @deprecated use `GetConnectionAPIProblem$inboundSchema` instead. */
  export const inboundSchema = GetConnectionAPIProblem$inboundSchema;
  /** @deprecated use `GetConnectionAPIProblem$outboundSchema` instead. */
  export const outboundSchema = GetConnectionAPIProblem$outboundSchema;
  /** @deprecated use `GetConnectionAPIProblem$Outbound` instead. */
  export type Outbound = GetConnectionAPIProblem$Outbound;
}

export function getConnectionAPIProblemToJSON(
  getConnectionAPIProblem: GetConnectionAPIProblem,
): string {
  return JSON.stringify(
    GetConnectionAPIProblem$outboundSchema.parse(getConnectionAPIProblem),
  );
}

export function getConnectionAPIProblemFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionAPIProblem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionAPIProblem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionAPIProblem' from JSON`,
  );
}

/** @internal */
export const GetConnectionProviderApp$inboundSchema: z.ZodType<
  GetConnectionProviderApp,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  projectId: z.string(),
  externalRef: z.string().optional(),
  provider: z.string(),
  clientId: z.string(),
  scopes: z.array(z.string()).optional(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type GetConnectionProviderApp$Outbound = {
  id: string;
  projectId: string;
  externalRef?: string | undefined;
  provider: string;
  clientId: string;
  scopes?: Array<string> | undefined;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const GetConnectionProviderApp$outboundSchema: z.ZodType<
  GetConnectionProviderApp$Outbound,
  z.ZodTypeDef,
  GetConnectionProviderApp
> = z.object({
  id: z.string(),
  projectId: z.string(),
  externalRef: z.string().optional(),
  provider: z.string(),
  clientId: z.string(),
  scopes: z.array(z.string()).optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionProviderApp$ {
  /** @deprecated use `GetConnectionProviderApp$inboundSchema` instead. */
  export const inboundSchema = GetConnectionProviderApp$inboundSchema;
  /** @deprecated use `GetConnectionProviderApp$outboundSchema` instead. */
  export const outboundSchema = GetConnectionProviderApp$outboundSchema;
  /** @deprecated use `GetConnectionProviderApp$Outbound` instead. */
  export type Outbound = GetConnectionProviderApp$Outbound;
}

export function getConnectionProviderAppToJSON(
  getConnectionProviderApp: GetConnectionProviderApp,
): string {
  return JSON.stringify(
    GetConnectionProviderApp$outboundSchema.parse(getConnectionProviderApp),
  );
}

export function getConnectionProviderAppFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionProviderApp, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionProviderApp$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionProviderApp' from JSON`,
  );
}

/** @internal */
export const GetConnectionGroup$inboundSchema: z.ZodType<
  GetConnectionGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  groupRef: z.string(),
  groupName: z.string(),
  projectId: z.string(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type GetConnectionGroup$Outbound = {
  groupRef: string;
  groupName: string;
  projectId: string;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const GetConnectionGroup$outboundSchema: z.ZodType<
  GetConnectionGroup$Outbound,
  z.ZodTypeDef,
  GetConnectionGroup
> = z.object({
  groupRef: z.string(),
  groupName: z.string(),
  projectId: z.string(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionGroup$ {
  /** @deprecated use `GetConnectionGroup$inboundSchema` instead. */
  export const inboundSchema = GetConnectionGroup$inboundSchema;
  /** @deprecated use `GetConnectionGroup$outboundSchema` instead. */
  export const outboundSchema = GetConnectionGroup$outboundSchema;
  /** @deprecated use `GetConnectionGroup$Outbound` instead. */
  export type Outbound = GetConnectionGroup$Outbound;
}

export function getConnectionGroupToJSON(
  getConnectionGroup: GetConnectionGroup,
): string {
  return JSON.stringify(
    GetConnectionGroup$outboundSchema.parse(getConnectionGroup),
  );
}

export function getConnectionGroupFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionGroup' from JSON`,
  );
}

/** @internal */
export const GetConnectionConsumer$inboundSchema: z.ZodType<
  GetConnectionConsumer,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerRef: z.string(),
  consumerName: z.string(),
  projectId: z.string(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
});

/** @internal */
export type GetConnectionConsumer$Outbound = {
  consumerRef: string;
  consumerName: string;
  projectId: string;
  createTime: string;
  updateTime?: string | undefined;
};

/** @internal */
export const GetConnectionConsumer$outboundSchema: z.ZodType<
  GetConnectionConsumer$Outbound,
  z.ZodTypeDef,
  GetConnectionConsumer
> = z.object({
  consumerRef: z.string(),
  consumerName: z.string(),
  projectId: z.string(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionConsumer$ {
  /** @deprecated use `GetConnectionConsumer$inboundSchema` instead. */
  export const inboundSchema = GetConnectionConsumer$inboundSchema;
  /** @deprecated use `GetConnectionConsumer$outboundSchema` instead. */
  export const outboundSchema = GetConnectionConsumer$outboundSchema;
  /** @deprecated use `GetConnectionConsumer$Outbound` instead. */
  export type Outbound = GetConnectionConsumer$Outbound;
}

export function getConnectionConsumerToJSON(
  getConnectionConsumer: GetConnectionConsumer,
): string {
  return JSON.stringify(
    GetConnectionConsumer$outboundSchema.parse(getConnectionConsumer),
  );
}

export function getConnectionConsumerFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionConsumer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionConsumer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionConsumer' from JSON`,
  );
}

/** @internal */
export const GetConnectionAuthScheme$inboundSchema: z.ZodNativeEnum<
  typeof GetConnectionAuthScheme
> = z.nativeEnum(GetConnectionAuthScheme);

/** @internal */
export const GetConnectionAuthScheme$outboundSchema: z.ZodNativeEnum<
  typeof GetConnectionAuthScheme
> = GetConnectionAuthScheme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionAuthScheme$ {
  /** @deprecated use `GetConnectionAuthScheme$inboundSchema` instead. */
  export const inboundSchema = GetConnectionAuthScheme$inboundSchema;
  /** @deprecated use `GetConnectionAuthScheme$outboundSchema` instead. */
  export const outboundSchema = GetConnectionAuthScheme$outboundSchema;
}

/** @internal */
export const GetConnectionStatus$inboundSchema: z.ZodNativeEnum<
  typeof GetConnectionStatus
> = z.nativeEnum(GetConnectionStatus);

/** @internal */
export const GetConnectionStatus$outboundSchema: z.ZodNativeEnum<
  typeof GetConnectionStatus
> = GetConnectionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionStatus$ {
  /** @deprecated use `GetConnectionStatus$inboundSchema` instead. */
  export const inboundSchema = GetConnectionStatus$inboundSchema;
  /** @deprecated use `GetConnectionStatus$outboundSchema` instead. */
  export const outboundSchema = GetConnectionStatus$outboundSchema;
}

/** @internal */
export const GetConnectionAccessToken$inboundSchema: z.ZodType<
  GetConnectionAccessToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
});

/** @internal */
export type GetConnectionAccessToken$Outbound = {
  token: string;
};

/** @internal */
export const GetConnectionAccessToken$outboundSchema: z.ZodType<
  GetConnectionAccessToken$Outbound,
  z.ZodTypeDef,
  GetConnectionAccessToken
> = z.object({
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionAccessToken$ {
  /** @deprecated use `GetConnectionAccessToken$inboundSchema` instead. */
  export const inboundSchema = GetConnectionAccessToken$inboundSchema;
  /** @deprecated use `GetConnectionAccessToken$outboundSchema` instead. */
  export const outboundSchema = GetConnectionAccessToken$outboundSchema;
  /** @deprecated use `GetConnectionAccessToken$Outbound` instead. */
  export type Outbound = GetConnectionAccessToken$Outbound;
}

export function getConnectionAccessTokenToJSON(
  getConnectionAccessToken: GetConnectionAccessToken,
): string {
  return JSON.stringify(
    GetConnectionAccessToken$outboundSchema.parse(getConnectionAccessToken),
  );
}

export function getConnectionAccessTokenFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionAccessToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionAccessToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionAccessToken' from JSON`,
  );
}

/** @internal */
export const GetConnectionRefreshToken$inboundSchema: z.ZodType<
  GetConnectionRefreshToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
});

/** @internal */
export type GetConnectionRefreshToken$Outbound = {
  token: string;
};

/** @internal */
export const GetConnectionRefreshToken$outboundSchema: z.ZodType<
  GetConnectionRefreshToken$Outbound,
  z.ZodTypeDef,
  GetConnectionRefreshToken
> = z.object({
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionRefreshToken$ {
  /** @deprecated use `GetConnectionRefreshToken$inboundSchema` instead. */
  export const inboundSchema = GetConnectionRefreshToken$inboundSchema;
  /** @deprecated use `GetConnectionRefreshToken$outboundSchema` instead. */
  export const outboundSchema = GetConnectionRefreshToken$outboundSchema;
  /** @deprecated use `GetConnectionRefreshToken$Outbound` instead. */
  export type Outbound = GetConnectionRefreshToken$Outbound;
}

export function getConnectionRefreshTokenToJSON(
  getConnectionRefreshToken: GetConnectionRefreshToken,
): string {
  return JSON.stringify(
    GetConnectionRefreshToken$outboundSchema.parse(getConnectionRefreshToken),
  );
}

export function getConnectionRefreshTokenFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionRefreshToken, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionRefreshToken$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionRefreshToken' from JSON`,
  );
}

/** @internal */
export const GetConnectionOAuth2AuthorizationCodeToken$inboundSchema: z.ZodType<
  GetConnectionOAuth2AuthorizationCodeToken,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessToken: z.lazy(() => GetConnectionAccessToken$inboundSchema).optional(),
  refreshToken: z.lazy(() => GetConnectionRefreshToken$inboundSchema)
    .optional(),
  scopes: z.array(z.string()).optional(),
});

/** @internal */
export type GetConnectionOAuth2AuthorizationCodeToken$Outbound = {
  accessToken?: GetConnectionAccessToken$Outbound | undefined;
  refreshToken?: GetConnectionRefreshToken$Outbound | undefined;
  scopes?: Array<string> | undefined;
};

/** @internal */
export const GetConnectionOAuth2AuthorizationCodeToken$outboundSchema:
  z.ZodType<
    GetConnectionOAuth2AuthorizationCodeToken$Outbound,
    z.ZodTypeDef,
    GetConnectionOAuth2AuthorizationCodeToken
  > = z.object({
    accessToken: z.lazy(() => GetConnectionAccessToken$outboundSchema)
      .optional(),
    refreshToken: z.lazy(() => GetConnectionRefreshToken$outboundSchema)
      .optional(),
    scopes: z.array(z.string()).optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionOAuth2AuthorizationCodeToken$ {
  /** @deprecated use `GetConnectionOAuth2AuthorizationCodeToken$inboundSchema` instead. */
  export const inboundSchema =
    GetConnectionOAuth2AuthorizationCodeToken$inboundSchema;
  /** @deprecated use `GetConnectionOAuth2AuthorizationCodeToken$outboundSchema` instead. */
  export const outboundSchema =
    GetConnectionOAuth2AuthorizationCodeToken$outboundSchema;
  /** @deprecated use `GetConnectionOAuth2AuthorizationCodeToken$Outbound` instead. */
  export type Outbound = GetConnectionOAuth2AuthorizationCodeToken$Outbound;
}

export function getConnectionOAuth2AuthorizationCodeTokenToJSON(
  getConnectionOAuth2AuthorizationCodeToken:
    GetConnectionOAuth2AuthorizationCodeToken,
): string {
  return JSON.stringify(
    GetConnectionOAuth2AuthorizationCodeToken$outboundSchema.parse(
      getConnectionOAuth2AuthorizationCodeToken,
    ),
  );
}

export function getConnectionOAuth2AuthorizationCodeTokenFromJSON(
  jsonString: string,
): SafeParseResult<
  GetConnectionOAuth2AuthorizationCodeToken,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      GetConnectionOAuth2AuthorizationCodeToken$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'GetConnectionOAuth2AuthorizationCodeToken' from JSON`,
  );
}

/** @internal */
export const GetConnectionConnection$inboundSchema: z.ZodType<
  GetConnectionConnection,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  projectId: z.string(),
  provider: z.string(),
  providerApp: z.lazy(() => GetConnectionProviderApp$inboundSchema).optional(),
  group: z.lazy(() => GetConnectionGroup$inboundSchema),
  consumer: z.lazy(() => GetConnectionConsumer$inboundSchema),
  providerWorkspaceRef: z.string().optional(),
  providerConsumerRef: z.string().optional(),
  createTime: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updateTime: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  authScheme: GetConnectionAuthScheme$inboundSchema,
  status: GetConnectionStatus$inboundSchema,
  oauth2AuthorizationCode: z.lazy(() =>
    GetConnectionOAuth2AuthorizationCodeToken$inboundSchema
  ).optional(),
  apiKey: z.string().optional(),
});

/** @internal */
export type GetConnectionConnection$Outbound = {
  id: string;
  projectId: string;
  provider: string;
  providerApp?: GetConnectionProviderApp$Outbound | undefined;
  group: GetConnectionGroup$Outbound;
  consumer: GetConnectionConsumer$Outbound;
  providerWorkspaceRef?: string | undefined;
  providerConsumerRef?: string | undefined;
  createTime: string;
  updateTime?: string | undefined;
  authScheme: string;
  status: string;
  oauth2AuthorizationCode?:
    | GetConnectionOAuth2AuthorizationCodeToken$Outbound
    | undefined;
  apiKey?: string | undefined;
};

/** @internal */
export const GetConnectionConnection$outboundSchema: z.ZodType<
  GetConnectionConnection$Outbound,
  z.ZodTypeDef,
  GetConnectionConnection
> = z.object({
  id: z.string(),
  projectId: z.string(),
  provider: z.string(),
  providerApp: z.lazy(() => GetConnectionProviderApp$outboundSchema).optional(),
  group: z.lazy(() => GetConnectionGroup$outboundSchema),
  consumer: z.lazy(() => GetConnectionConsumer$outboundSchema),
  providerWorkspaceRef: z.string().optional(),
  providerConsumerRef: z.string().optional(),
  createTime: z.date().transform(v => v.toISOString()),
  updateTime: z.date().transform(v => v.toISOString()).optional(),
  authScheme: GetConnectionAuthScheme$outboundSchema,
  status: GetConnectionStatus$outboundSchema,
  oauth2AuthorizationCode: z.lazy(() =>
    GetConnectionOAuth2AuthorizationCodeToken$outboundSchema
  ).optional(),
  apiKey: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionConnection$ {
  /** @deprecated use `GetConnectionConnection$inboundSchema` instead. */
  export const inboundSchema = GetConnectionConnection$inboundSchema;
  /** @deprecated use `GetConnectionConnection$outboundSchema` instead. */
  export const outboundSchema = GetConnectionConnection$outboundSchema;
  /** @deprecated use `GetConnectionConnection$Outbound` instead. */
  export type Outbound = GetConnectionConnection$Outbound;
}

export function getConnectionConnectionToJSON(
  getConnectionConnection: GetConnectionConnection,
): string {
  return JSON.stringify(
    GetConnectionConnection$outboundSchema.parse(getConnectionConnection),
  );
}

export function getConnectionConnectionFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionConnection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionConnection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionConnection' from JSON`,
  );
}

/** @internal */
export const GetConnectionResponse$inboundSchema: z.ZodType<
  GetConnectionResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => GetConnectionConnection$inboundSchema),
  z.lazy(() => GetConnectionAPIProblem$inboundSchema),
]);

/** @internal */
export type GetConnectionResponse$Outbound =
  | GetConnectionConnection$Outbound
  | GetConnectionAPIProblem$Outbound;

/** @internal */
export const GetConnectionResponse$outboundSchema: z.ZodType<
  GetConnectionResponse$Outbound,
  z.ZodTypeDef,
  GetConnectionResponse
> = z.union([
  z.lazy(() => GetConnectionConnection$outboundSchema),
  z.lazy(() => GetConnectionAPIProblem$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConnectionResponse$ {
  /** @deprecated use `GetConnectionResponse$inboundSchema` instead. */
  export const inboundSchema = GetConnectionResponse$inboundSchema;
  /** @deprecated use `GetConnectionResponse$outboundSchema` instead. */
  export const outboundSchema = GetConnectionResponse$outboundSchema;
  /** @deprecated use `GetConnectionResponse$Outbound` instead. */
  export type Outbound = GetConnectionResponse$Outbound;
}

export function getConnectionResponseToJSON(
  getConnectionResponse: GetConnectionResponse,
): string {
  return JSON.stringify(
    GetConnectionResponse$outboundSchema.parse(getConnectionResponse),
  );
}

export function getConnectionResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetConnectionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConnectionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConnectionResponse' from JSON`,
  );
}
