/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ListProvidersServerList = [
  "https://api.withampersand.com/v1",
] as const;

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type ListProvidersResponseBody = {
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
 * The type of authentication required by the provider.
 */
export const AuthType = {
  Oauth2: "oauth2",
  ApiKey: "apiKey",
  Basic: "basic",
  Jwt: "jwt",
  None: "none",
} as const;
/**
 * The type of authentication required by the provider.
 */
export type AuthType = ClosedEnum<typeof AuthType>;

export const GrantType = {
  AuthorizationCode: "authorizationCode",
  AuthorizationCodePKCE: "authorizationCodePKCE",
  ClientCredentials: "clientCredentials",
  Password: "password",
} as const;
export type GrantType = ClosedEnum<typeof GrantType>;

/**
 * Fields to be used to extract token metadata from the token response.
 */
export type TokenMetadataFields = {
  workspaceRefField?: string | undefined;
  consumerRefField?: string | undefined;
  scopesField?: string | undefined;
};

/**
 * Configuration for OAuth2.0. Must be provided if authType is oauth2.
 */
export type Oauth2Opts = {
  grantType: GrantType;
  /**
   * The authorization URL.
   */
  authURL?: string | undefined;
  /**
   * The token URL.
   */
  tokenURL: string;
  /**
   * Whether scopes are required to be known ahead of the OAuth flow.
   */
  explicitScopesRequired: boolean;
  /**
   * Whether the workspace is required to be known ahead of the OAuth flow.
   */
  explicitWorkspaceRequired: boolean;
  /**
   * A list of URLs that represent the audience for the token, which is needed for some client credential grant flows.
   */
  audience?: Array<string> | undefined;
  /**
   * Fields to be used to extract token metadata from the token response.
   */
  tokenMetadataFields: TokenMetadataFields;
  /**
   * URL with more information about where to retrieve Client ID and Client Secret, etc.
   */
  docsURL?: string | undefined;
  authURLParams?: { [k: string]: string } | undefined;
};

/**
 * How the API key should be attached to requests.
 */
export const AttachmentType = {
  Query: "query",
  Header: "header",
} as const;
/**
 * How the API key should be attached to requests.
 */
export type AttachmentType = ClosedEnum<typeof AttachmentType>;

/**
 * Configuration for API key in query parameter. Must be provided if type is in-query.
 */
export type Query = {
  /**
   * The name of the query parameter to be used for the API key.
   */
  name: string;
};

/**
 * Configuration for API key in header. Must be provided if type is in-header.
 */
export type Header = {
  /**
   * The name of the header to be used for the API key.
   */
  name: string;
  /**
   * The prefix to be added to the API key value when it is sent in the header.
   */
  valuePrefix?: string | undefined;
};

/**
 * Configuration for API key. Must be provided if authType is apiKey.
 */
export type ApiKeyOpts = {
  /**
   * How the API key should be attached to requests.
   */
  attachmentType: AttachmentType;
  /**
   * Configuration for API key in query parameter. Must be provided if type is in-query.
   */
  query?: Query | undefined;
  /**
   * Configuration for API key in header. Must be provided if type is in-header.
   */
  header?: Header | undefined;
  /**
   * URL with more information about how to get or use an API key.
   */
  docsURL?: string | undefined;
};

/**
 * whether the API key should be used as the username or password.
 */
export const FieldUsed = {
  Username: "username",
  Password: "password",
} as const;
/**
 * whether the API key should be used as the username or password.
 */
export type FieldUsed = ClosedEnum<typeof FieldUsed>;

/**
 * when this object is present, it means that this provider uses Basic Auth to actually collect an API key
 */
export type ApiKeyAsBasicOpts = {
  /**
   * whether the API key should be used as the username or password.
   */
  fieldUsed?: FieldUsed | undefined;
  /**
   * How to transform the API key in to a basic auth user:pass string. The %s is replaced with the API key value.
   */
  keyFormat?: string | undefined;
};

/**
 * Configuration for Basic Auth. Optional.
 */
export type BasicOpts = {
  /**
   * If true, the provider uses an API key which then gets encoded as a basic auth user:pass string.
   */
  apiKeyAsBasic?: boolean | undefined;
  /**
   * when this object is present, it means that this provider uses Basic Auth to actually collect an API key
   */
  apiKeyAsBasicOpts?: ApiKeyAsBasicOpts | undefined;
  /**
   * URL with more information about how to get or use an API key.
   */
  docsURL?: string | undefined;
};

export type BulkWrite = {
  insert: boolean;
  update: boolean;
  upsert: boolean;
  delete: boolean;
};

/**
 * The supported features for the provider.
 */
export type Support = {
  bulkWrite: BulkWrite;
  proxy: boolean;
  read: boolean;
  subscribe: boolean;
  write: boolean;
};

/**
 * Media for light/regular mode.
 */
export type Regular = {
  /**
   * URL to the icon for the provider.
   */
  iconURL?: string | undefined;
  /**
   * URL to the logo for the provider.
   */
  logoURL?: string | undefined;
};

/**
 * Media to be used in dark mode.
 */
export type DarkMode = {
  /**
   * URL to the icon for the provider that is to be used in dark mode.
   */
  iconURL?: string | undefined;
  /**
   * URL to the logo for the provider that is to be used in dark mode.
   */
  logoURL?: string | undefined;
};

export type Media = {
  /**
   * Media for light/regular mode.
   */
  regular?: Regular | undefined;
  /**
   * Media to be used in dark mode.
   */
  darkMode?: DarkMode | undefined;
};

export type ListProvidersProviderResponseBody = {
  name: string;
  /**
   * The type of authentication required by the provider.
   */
  authType: AuthType;
  /**
   * The base URL for making API requests.
   */
  baseURL: string;
  /**
   * Configuration for OAuth2.0. Must be provided if authType is oauth2.
   */
  oauth2Opts?: Oauth2Opts | undefined;
  /**
   * Configuration for API key. Must be provided if authType is apiKey.
   */
  apiKeyOpts?: ApiKeyOpts | undefined;
  /**
   * Configuration for Basic Auth. Optional.
   */
  basicOpts?: BasicOpts | undefined;
  /**
   * The supported features for the provider.
   */
  support: Support;
  /**
   * Additional provider-specific metadata.
   */
  providerOpts: { [k: string]: string };
  /**
   * The display name of the provider, if omitted, defaults to provider name.
   */
  displayName?: string | undefined;
  /**
   * If true, we require additional information after auth to start making requests.
   */
  postAuthInfoNeeded?: boolean | undefined;
  media?: Media | undefined;
  labels?: { [k: string]: string } | undefined;
};

export type ListProvidersResponse = ListProvidersResponseBody | {
  [k: string]: ListProvidersProviderResponseBody;
};

/** @internal */
export const ListProvidersResponseBody$inboundSchema: z.ZodType<
  ListProvidersResponseBody,
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
export type ListProvidersResponseBody$Outbound = {
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
export const ListProvidersResponseBody$outboundSchema: z.ZodType<
  ListProvidersResponseBody$Outbound,
  z.ZodTypeDef,
  ListProvidersResponseBody
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
export namespace ListProvidersResponseBody$ {
  /** @deprecated use `ListProvidersResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListProvidersResponseBody$inboundSchema;
  /** @deprecated use `ListProvidersResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListProvidersResponseBody$outboundSchema;
  /** @deprecated use `ListProvidersResponseBody$Outbound` instead. */
  export type Outbound = ListProvidersResponseBody$Outbound;
}

export function listProvidersResponseBodyToJSON(
  listProvidersResponseBody: ListProvidersResponseBody,
): string {
  return JSON.stringify(
    ListProvidersResponseBody$outboundSchema.parse(listProvidersResponseBody),
  );
}

export function listProvidersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListProvidersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProvidersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProvidersResponseBody' from JSON`,
  );
}

/** @internal */
export const AuthType$inboundSchema: z.ZodNativeEnum<typeof AuthType> = z
  .nativeEnum(AuthType);

/** @internal */
export const AuthType$outboundSchema: z.ZodNativeEnum<typeof AuthType> =
  AuthType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AuthType$ {
  /** @deprecated use `AuthType$inboundSchema` instead. */
  export const inboundSchema = AuthType$inboundSchema;
  /** @deprecated use `AuthType$outboundSchema` instead. */
  export const outboundSchema = AuthType$outboundSchema;
}

/** @internal */
export const GrantType$inboundSchema: z.ZodNativeEnum<typeof GrantType> = z
  .nativeEnum(GrantType);

/** @internal */
export const GrantType$outboundSchema: z.ZodNativeEnum<typeof GrantType> =
  GrantType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrantType$ {
  /** @deprecated use `GrantType$inboundSchema` instead. */
  export const inboundSchema = GrantType$inboundSchema;
  /** @deprecated use `GrantType$outboundSchema` instead. */
  export const outboundSchema = GrantType$outboundSchema;
}

/** @internal */
export const TokenMetadataFields$inboundSchema: z.ZodType<
  TokenMetadataFields,
  z.ZodTypeDef,
  unknown
> = z.object({
  workspaceRefField: z.string().optional(),
  consumerRefField: z.string().optional(),
  scopesField: z.string().optional(),
});

/** @internal */
export type TokenMetadataFields$Outbound = {
  workspaceRefField?: string | undefined;
  consumerRefField?: string | undefined;
  scopesField?: string | undefined;
};

/** @internal */
export const TokenMetadataFields$outboundSchema: z.ZodType<
  TokenMetadataFields$Outbound,
  z.ZodTypeDef,
  TokenMetadataFields
> = z.object({
  workspaceRefField: z.string().optional(),
  consumerRefField: z.string().optional(),
  scopesField: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TokenMetadataFields$ {
  /** @deprecated use `TokenMetadataFields$inboundSchema` instead. */
  export const inboundSchema = TokenMetadataFields$inboundSchema;
  /** @deprecated use `TokenMetadataFields$outboundSchema` instead. */
  export const outboundSchema = TokenMetadataFields$outboundSchema;
  /** @deprecated use `TokenMetadataFields$Outbound` instead. */
  export type Outbound = TokenMetadataFields$Outbound;
}

export function tokenMetadataFieldsToJSON(
  tokenMetadataFields: TokenMetadataFields,
): string {
  return JSON.stringify(
    TokenMetadataFields$outboundSchema.parse(tokenMetadataFields),
  );
}

export function tokenMetadataFieldsFromJSON(
  jsonString: string,
): SafeParseResult<TokenMetadataFields, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TokenMetadataFields$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TokenMetadataFields' from JSON`,
  );
}

/** @internal */
export const Oauth2Opts$inboundSchema: z.ZodType<
  Oauth2Opts,
  z.ZodTypeDef,
  unknown
> = z.object({
  grantType: GrantType$inboundSchema,
  authURL: z.string().optional(),
  tokenURL: z.string(),
  explicitScopesRequired: z.boolean(),
  explicitWorkspaceRequired: z.boolean(),
  audience: z.array(z.string()).optional(),
  tokenMetadataFields: z.lazy(() => TokenMetadataFields$inboundSchema),
  docsURL: z.string().optional(),
  authURLParams: z.record(z.string()).optional(),
});

/** @internal */
export type Oauth2Opts$Outbound = {
  grantType: string;
  authURL?: string | undefined;
  tokenURL: string;
  explicitScopesRequired: boolean;
  explicitWorkspaceRequired: boolean;
  audience?: Array<string> | undefined;
  tokenMetadataFields: TokenMetadataFields$Outbound;
  docsURL?: string | undefined;
  authURLParams?: { [k: string]: string } | undefined;
};

/** @internal */
export const Oauth2Opts$outboundSchema: z.ZodType<
  Oauth2Opts$Outbound,
  z.ZodTypeDef,
  Oauth2Opts
> = z.object({
  grantType: GrantType$outboundSchema,
  authURL: z.string().optional(),
  tokenURL: z.string(),
  explicitScopesRequired: z.boolean(),
  explicitWorkspaceRequired: z.boolean(),
  audience: z.array(z.string()).optional(),
  tokenMetadataFields: z.lazy(() => TokenMetadataFields$outboundSchema),
  docsURL: z.string().optional(),
  authURLParams: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Oauth2Opts$ {
  /** @deprecated use `Oauth2Opts$inboundSchema` instead. */
  export const inboundSchema = Oauth2Opts$inboundSchema;
  /** @deprecated use `Oauth2Opts$outboundSchema` instead. */
  export const outboundSchema = Oauth2Opts$outboundSchema;
  /** @deprecated use `Oauth2Opts$Outbound` instead. */
  export type Outbound = Oauth2Opts$Outbound;
}

export function oauth2OptsToJSON(oauth2Opts: Oauth2Opts): string {
  return JSON.stringify(Oauth2Opts$outboundSchema.parse(oauth2Opts));
}

export function oauth2OptsFromJSON(
  jsonString: string,
): SafeParseResult<Oauth2Opts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Oauth2Opts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Oauth2Opts' from JSON`,
  );
}

/** @internal */
export const AttachmentType$inboundSchema: z.ZodNativeEnum<
  typeof AttachmentType
> = z.nativeEnum(AttachmentType);

/** @internal */
export const AttachmentType$outboundSchema: z.ZodNativeEnum<
  typeof AttachmentType
> = AttachmentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AttachmentType$ {
  /** @deprecated use `AttachmentType$inboundSchema` instead. */
  export const inboundSchema = AttachmentType$inboundSchema;
  /** @deprecated use `AttachmentType$outboundSchema` instead. */
  export const outboundSchema = AttachmentType$outboundSchema;
}

/** @internal */
export const Query$inboundSchema: z.ZodType<Query, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string(),
  });

/** @internal */
export type Query$Outbound = {
  name: string;
};

/** @internal */
export const Query$outboundSchema: z.ZodType<
  Query$Outbound,
  z.ZodTypeDef,
  Query
> = z.object({
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Query$ {
  /** @deprecated use `Query$inboundSchema` instead. */
  export const inboundSchema = Query$inboundSchema;
  /** @deprecated use `Query$outboundSchema` instead. */
  export const outboundSchema = Query$outboundSchema;
  /** @deprecated use `Query$Outbound` instead. */
  export type Outbound = Query$Outbound;
}

export function queryToJSON(query: Query): string {
  return JSON.stringify(Query$outboundSchema.parse(query));
}

export function queryFromJSON(
  jsonString: string,
): SafeParseResult<Query, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Query$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Query' from JSON`,
  );
}

/** @internal */
export const Header$inboundSchema: z.ZodType<Header, z.ZodTypeDef, unknown> = z
  .object({
    name: z.string(),
    valuePrefix: z.string().optional(),
  });

/** @internal */
export type Header$Outbound = {
  name: string;
  valuePrefix?: string | undefined;
};

/** @internal */
export const Header$outboundSchema: z.ZodType<
  Header$Outbound,
  z.ZodTypeDef,
  Header
> = z.object({
  name: z.string(),
  valuePrefix: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Header$ {
  /** @deprecated use `Header$inboundSchema` instead. */
  export const inboundSchema = Header$inboundSchema;
  /** @deprecated use `Header$outboundSchema` instead. */
  export const outboundSchema = Header$outboundSchema;
  /** @deprecated use `Header$Outbound` instead. */
  export type Outbound = Header$Outbound;
}

export function headerToJSON(header: Header): string {
  return JSON.stringify(Header$outboundSchema.parse(header));
}

export function headerFromJSON(
  jsonString: string,
): SafeParseResult<Header, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Header$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Header' from JSON`,
  );
}

/** @internal */
export const ApiKeyOpts$inboundSchema: z.ZodType<
  ApiKeyOpts,
  z.ZodTypeDef,
  unknown
> = z.object({
  attachmentType: AttachmentType$inboundSchema,
  query: z.lazy(() => Query$inboundSchema).optional(),
  header: z.lazy(() => Header$inboundSchema).optional(),
  docsURL: z.string().optional(),
});

/** @internal */
export type ApiKeyOpts$Outbound = {
  attachmentType: string;
  query?: Query$Outbound | undefined;
  header?: Header$Outbound | undefined;
  docsURL?: string | undefined;
};

/** @internal */
export const ApiKeyOpts$outboundSchema: z.ZodType<
  ApiKeyOpts$Outbound,
  z.ZodTypeDef,
  ApiKeyOpts
> = z.object({
  attachmentType: AttachmentType$outboundSchema,
  query: z.lazy(() => Query$outboundSchema).optional(),
  header: z.lazy(() => Header$outboundSchema).optional(),
  docsURL: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiKeyOpts$ {
  /** @deprecated use `ApiKeyOpts$inboundSchema` instead. */
  export const inboundSchema = ApiKeyOpts$inboundSchema;
  /** @deprecated use `ApiKeyOpts$outboundSchema` instead. */
  export const outboundSchema = ApiKeyOpts$outboundSchema;
  /** @deprecated use `ApiKeyOpts$Outbound` instead. */
  export type Outbound = ApiKeyOpts$Outbound;
}

export function apiKeyOptsToJSON(apiKeyOpts: ApiKeyOpts): string {
  return JSON.stringify(ApiKeyOpts$outboundSchema.parse(apiKeyOpts));
}

export function apiKeyOptsFromJSON(
  jsonString: string,
): SafeParseResult<ApiKeyOpts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApiKeyOpts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApiKeyOpts' from JSON`,
  );
}

/** @internal */
export const FieldUsed$inboundSchema: z.ZodNativeEnum<typeof FieldUsed> = z
  .nativeEnum(FieldUsed);

/** @internal */
export const FieldUsed$outboundSchema: z.ZodNativeEnum<typeof FieldUsed> =
  FieldUsed$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FieldUsed$ {
  /** @deprecated use `FieldUsed$inboundSchema` instead. */
  export const inboundSchema = FieldUsed$inboundSchema;
  /** @deprecated use `FieldUsed$outboundSchema` instead. */
  export const outboundSchema = FieldUsed$outboundSchema;
}

/** @internal */
export const ApiKeyAsBasicOpts$inboundSchema: z.ZodType<
  ApiKeyAsBasicOpts,
  z.ZodTypeDef,
  unknown
> = z.object({
  fieldUsed: FieldUsed$inboundSchema.optional(),
  keyFormat: z.string().optional(),
});

/** @internal */
export type ApiKeyAsBasicOpts$Outbound = {
  fieldUsed?: string | undefined;
  keyFormat?: string | undefined;
};

/** @internal */
export const ApiKeyAsBasicOpts$outboundSchema: z.ZodType<
  ApiKeyAsBasicOpts$Outbound,
  z.ZodTypeDef,
  ApiKeyAsBasicOpts
> = z.object({
  fieldUsed: FieldUsed$outboundSchema.optional(),
  keyFormat: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiKeyAsBasicOpts$ {
  /** @deprecated use `ApiKeyAsBasicOpts$inboundSchema` instead. */
  export const inboundSchema = ApiKeyAsBasicOpts$inboundSchema;
  /** @deprecated use `ApiKeyAsBasicOpts$outboundSchema` instead. */
  export const outboundSchema = ApiKeyAsBasicOpts$outboundSchema;
  /** @deprecated use `ApiKeyAsBasicOpts$Outbound` instead. */
  export type Outbound = ApiKeyAsBasicOpts$Outbound;
}

export function apiKeyAsBasicOptsToJSON(
  apiKeyAsBasicOpts: ApiKeyAsBasicOpts,
): string {
  return JSON.stringify(
    ApiKeyAsBasicOpts$outboundSchema.parse(apiKeyAsBasicOpts),
  );
}

export function apiKeyAsBasicOptsFromJSON(
  jsonString: string,
): SafeParseResult<ApiKeyAsBasicOpts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApiKeyAsBasicOpts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApiKeyAsBasicOpts' from JSON`,
  );
}

/** @internal */
export const BasicOpts$inboundSchema: z.ZodType<
  BasicOpts,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKeyAsBasic: z.boolean().optional(),
  apiKeyAsBasicOpts: z.lazy(() => ApiKeyAsBasicOpts$inboundSchema).optional(),
  docsURL: z.string().optional(),
});

/** @internal */
export type BasicOpts$Outbound = {
  apiKeyAsBasic?: boolean | undefined;
  apiKeyAsBasicOpts?: ApiKeyAsBasicOpts$Outbound | undefined;
  docsURL?: string | undefined;
};

/** @internal */
export const BasicOpts$outboundSchema: z.ZodType<
  BasicOpts$Outbound,
  z.ZodTypeDef,
  BasicOpts
> = z.object({
  apiKeyAsBasic: z.boolean().optional(),
  apiKeyAsBasicOpts: z.lazy(() => ApiKeyAsBasicOpts$outboundSchema).optional(),
  docsURL: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BasicOpts$ {
  /** @deprecated use `BasicOpts$inboundSchema` instead. */
  export const inboundSchema = BasicOpts$inboundSchema;
  /** @deprecated use `BasicOpts$outboundSchema` instead. */
  export const outboundSchema = BasicOpts$outboundSchema;
  /** @deprecated use `BasicOpts$Outbound` instead. */
  export type Outbound = BasicOpts$Outbound;
}

export function basicOptsToJSON(basicOpts: BasicOpts): string {
  return JSON.stringify(BasicOpts$outboundSchema.parse(basicOpts));
}

export function basicOptsFromJSON(
  jsonString: string,
): SafeParseResult<BasicOpts, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BasicOpts$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BasicOpts' from JSON`,
  );
}

/** @internal */
export const BulkWrite$inboundSchema: z.ZodType<
  BulkWrite,
  z.ZodTypeDef,
  unknown
> = z.object({
  insert: z.boolean(),
  update: z.boolean(),
  upsert: z.boolean(),
  delete: z.boolean(),
});

/** @internal */
export type BulkWrite$Outbound = {
  insert: boolean;
  update: boolean;
  upsert: boolean;
  delete: boolean;
};

/** @internal */
export const BulkWrite$outboundSchema: z.ZodType<
  BulkWrite$Outbound,
  z.ZodTypeDef,
  BulkWrite
> = z.object({
  insert: z.boolean(),
  update: z.boolean(),
  upsert: z.boolean(),
  delete: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BulkWrite$ {
  /** @deprecated use `BulkWrite$inboundSchema` instead. */
  export const inboundSchema = BulkWrite$inboundSchema;
  /** @deprecated use `BulkWrite$outboundSchema` instead. */
  export const outboundSchema = BulkWrite$outboundSchema;
  /** @deprecated use `BulkWrite$Outbound` instead. */
  export type Outbound = BulkWrite$Outbound;
}

export function bulkWriteToJSON(bulkWrite: BulkWrite): string {
  return JSON.stringify(BulkWrite$outboundSchema.parse(bulkWrite));
}

export function bulkWriteFromJSON(
  jsonString: string,
): SafeParseResult<BulkWrite, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BulkWrite$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BulkWrite' from JSON`,
  );
}

/** @internal */
export const Support$inboundSchema: z.ZodType<Support, z.ZodTypeDef, unknown> =
  z.object({
    bulkWrite: z.lazy(() => BulkWrite$inboundSchema),
    proxy: z.boolean(),
    read: z.boolean(),
    subscribe: z.boolean(),
    write: z.boolean(),
  });

/** @internal */
export type Support$Outbound = {
  bulkWrite: BulkWrite$Outbound;
  proxy: boolean;
  read: boolean;
  subscribe: boolean;
  write: boolean;
};

/** @internal */
export const Support$outboundSchema: z.ZodType<
  Support$Outbound,
  z.ZodTypeDef,
  Support
> = z.object({
  bulkWrite: z.lazy(() => BulkWrite$outboundSchema),
  proxy: z.boolean(),
  read: z.boolean(),
  subscribe: z.boolean(),
  write: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Support$ {
  /** @deprecated use `Support$inboundSchema` instead. */
  export const inboundSchema = Support$inboundSchema;
  /** @deprecated use `Support$outboundSchema` instead. */
  export const outboundSchema = Support$outboundSchema;
  /** @deprecated use `Support$Outbound` instead. */
  export type Outbound = Support$Outbound;
}

export function supportToJSON(support: Support): string {
  return JSON.stringify(Support$outboundSchema.parse(support));
}

export function supportFromJSON(
  jsonString: string,
): SafeParseResult<Support, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Support$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Support' from JSON`,
  );
}

/** @internal */
export const Regular$inboundSchema: z.ZodType<Regular, z.ZodTypeDef, unknown> =
  z.object({
    iconURL: z.string().optional(),
    logoURL: z.string().optional(),
  });

/** @internal */
export type Regular$Outbound = {
  iconURL?: string | undefined;
  logoURL?: string | undefined;
};

/** @internal */
export const Regular$outboundSchema: z.ZodType<
  Regular$Outbound,
  z.ZodTypeDef,
  Regular
> = z.object({
  iconURL: z.string().optional(),
  logoURL: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Regular$ {
  /** @deprecated use `Regular$inboundSchema` instead. */
  export const inboundSchema = Regular$inboundSchema;
  /** @deprecated use `Regular$outboundSchema` instead. */
  export const outboundSchema = Regular$outboundSchema;
  /** @deprecated use `Regular$Outbound` instead. */
  export type Outbound = Regular$Outbound;
}

export function regularToJSON(regular: Regular): string {
  return JSON.stringify(Regular$outboundSchema.parse(regular));
}

export function regularFromJSON(
  jsonString: string,
): SafeParseResult<Regular, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Regular$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Regular' from JSON`,
  );
}

/** @internal */
export const DarkMode$inboundSchema: z.ZodType<
  DarkMode,
  z.ZodTypeDef,
  unknown
> = z.object({
  iconURL: z.string().optional(),
  logoURL: z.string().optional(),
});

/** @internal */
export type DarkMode$Outbound = {
  iconURL?: string | undefined;
  logoURL?: string | undefined;
};

/** @internal */
export const DarkMode$outboundSchema: z.ZodType<
  DarkMode$Outbound,
  z.ZodTypeDef,
  DarkMode
> = z.object({
  iconURL: z.string().optional(),
  logoURL: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DarkMode$ {
  /** @deprecated use `DarkMode$inboundSchema` instead. */
  export const inboundSchema = DarkMode$inboundSchema;
  /** @deprecated use `DarkMode$outboundSchema` instead. */
  export const outboundSchema = DarkMode$outboundSchema;
  /** @deprecated use `DarkMode$Outbound` instead. */
  export type Outbound = DarkMode$Outbound;
}

export function darkModeToJSON(darkMode: DarkMode): string {
  return JSON.stringify(DarkMode$outboundSchema.parse(darkMode));
}

export function darkModeFromJSON(
  jsonString: string,
): SafeParseResult<DarkMode, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DarkMode$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DarkMode' from JSON`,
  );
}

/** @internal */
export const Media$inboundSchema: z.ZodType<Media, z.ZodTypeDef, unknown> = z
  .object({
    regular: z.lazy(() => Regular$inboundSchema).optional(),
    darkMode: z.lazy(() => DarkMode$inboundSchema).optional(),
  });

/** @internal */
export type Media$Outbound = {
  regular?: Regular$Outbound | undefined;
  darkMode?: DarkMode$Outbound | undefined;
};

/** @internal */
export const Media$outboundSchema: z.ZodType<
  Media$Outbound,
  z.ZodTypeDef,
  Media
> = z.object({
  regular: z.lazy(() => Regular$outboundSchema).optional(),
  darkMode: z.lazy(() => DarkMode$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Media$ {
  /** @deprecated use `Media$inboundSchema` instead. */
  export const inboundSchema = Media$inboundSchema;
  /** @deprecated use `Media$outboundSchema` instead. */
  export const outboundSchema = Media$outboundSchema;
  /** @deprecated use `Media$Outbound` instead. */
  export type Outbound = Media$Outbound;
}

export function mediaToJSON(media: Media): string {
  return JSON.stringify(Media$outboundSchema.parse(media));
}

export function mediaFromJSON(
  jsonString: string,
): SafeParseResult<Media, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Media$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Media' from JSON`,
  );
}

/** @internal */
export const ListProvidersProviderResponseBody$inboundSchema: z.ZodType<
  ListProvidersProviderResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  authType: AuthType$inboundSchema,
  baseURL: z.string(),
  oauth2Opts: z.lazy(() => Oauth2Opts$inboundSchema).optional(),
  apiKeyOpts: z.lazy(() => ApiKeyOpts$inboundSchema).optional(),
  basicOpts: z.lazy(() => BasicOpts$inboundSchema).optional(),
  support: z.lazy(() => Support$inboundSchema),
  providerOpts: z.record(z.string()),
  displayName: z.string().optional(),
  postAuthInfoNeeded: z.boolean().optional(),
  media: z.lazy(() => Media$inboundSchema).optional(),
  labels: z.record(z.string()).optional(),
});

/** @internal */
export type ListProvidersProviderResponseBody$Outbound = {
  name: string;
  authType: string;
  baseURL: string;
  oauth2Opts?: Oauth2Opts$Outbound | undefined;
  apiKeyOpts?: ApiKeyOpts$Outbound | undefined;
  basicOpts?: BasicOpts$Outbound | undefined;
  support: Support$Outbound;
  providerOpts: { [k: string]: string };
  displayName?: string | undefined;
  postAuthInfoNeeded?: boolean | undefined;
  media?: Media$Outbound | undefined;
  labels?: { [k: string]: string } | undefined;
};

/** @internal */
export const ListProvidersProviderResponseBody$outboundSchema: z.ZodType<
  ListProvidersProviderResponseBody$Outbound,
  z.ZodTypeDef,
  ListProvidersProviderResponseBody
> = z.object({
  name: z.string(),
  authType: AuthType$outboundSchema,
  baseURL: z.string(),
  oauth2Opts: z.lazy(() => Oauth2Opts$outboundSchema).optional(),
  apiKeyOpts: z.lazy(() => ApiKeyOpts$outboundSchema).optional(),
  basicOpts: z.lazy(() => BasicOpts$outboundSchema).optional(),
  support: z.lazy(() => Support$outboundSchema),
  providerOpts: z.record(z.string()),
  displayName: z.string().optional(),
  postAuthInfoNeeded: z.boolean().optional(),
  media: z.lazy(() => Media$outboundSchema).optional(),
  labels: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListProvidersProviderResponseBody$ {
  /** @deprecated use `ListProvidersProviderResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListProvidersProviderResponseBody$inboundSchema;
  /** @deprecated use `ListProvidersProviderResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ListProvidersProviderResponseBody$outboundSchema;
  /** @deprecated use `ListProvidersProviderResponseBody$Outbound` instead. */
  export type Outbound = ListProvidersProviderResponseBody$Outbound;
}

export function listProvidersProviderResponseBodyToJSON(
  listProvidersProviderResponseBody: ListProvidersProviderResponseBody,
): string {
  return JSON.stringify(
    ListProvidersProviderResponseBody$outboundSchema.parse(
      listProvidersProviderResponseBody,
    ),
  );
}

export function listProvidersProviderResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListProvidersProviderResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProvidersProviderResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProvidersProviderResponseBody' from JSON`,
  );
}

/** @internal */
export const ListProvidersResponse$inboundSchema: z.ZodType<
  ListProvidersResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ListProvidersResponseBody$inboundSchema),
  z.record(z.lazy(() => ListProvidersProviderResponseBody$inboundSchema)),
]);

/** @internal */
export type ListProvidersResponse$Outbound =
  | ListProvidersResponseBody$Outbound
  | { [k: string]: ListProvidersProviderResponseBody$Outbound };

/** @internal */
export const ListProvidersResponse$outboundSchema: z.ZodType<
  ListProvidersResponse$Outbound,
  z.ZodTypeDef,
  ListProvidersResponse
> = z.union([
  z.lazy(() => ListProvidersResponseBody$outboundSchema),
  z.record(z.lazy(() => ListProvidersProviderResponseBody$outboundSchema)),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListProvidersResponse$ {
  /** @deprecated use `ListProvidersResponse$inboundSchema` instead. */
  export const inboundSchema = ListProvidersResponse$inboundSchema;
  /** @deprecated use `ListProvidersResponse$outboundSchema` instead. */
  export const outboundSchema = ListProvidersResponse$outboundSchema;
  /** @deprecated use `ListProvidersResponse$Outbound` instead. */
  export type Outbound = ListProvidersResponse$Outbound;
}

export function listProvidersResponseToJSON(
  listProvidersResponse: ListProvidersResponse,
): string {
  return JSON.stringify(
    ListProvidersResponse$outboundSchema.parse(listProvidersResponse),
  );
}

export function listProvidersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListProvidersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListProvidersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListProvidersResponse' from JSON`,
  );
}
