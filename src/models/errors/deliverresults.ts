/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type DeliverResultsReadAPIProblemData = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class DeliverResultsReadAPIProblem extends Error {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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

  /** The original data that was passed to this error instance. */
  data$: DeliverResultsReadAPIProblemData;

  constructor(err: DeliverResultsReadAPIProblemData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.type != null) this.type = err.type;
    if (err.href != null) this.href = err.href;
    if (err.title != null) this.title = err.title;
    if (err.status != null) this.status = err.status;
    if (err.detail != null) this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    if (err.subsystem != null) this.subsystem = err.subsystem;
    if (err.time != null) this.time = err.time;
    if (err.requestId != null) this.requestId = err.requestId;
    if (err.causes != null) this.causes = err.causes;
    if (err.remedy != null) this.remedy = err.remedy;
    if (err.supportEmail != null) this.supportEmail = err.supportEmail;
    if (err.supportPhone != null) this.supportPhone = err.supportPhone;
    if (err.supportUrl != null) this.supportUrl = err.supportUrl;
    if (err.retryable != null) this.retryable = err.retryable;
    if (err.retryAfter != null) this.retryAfter = err.retryAfter;
    if (err.context != null) this.context = err.context;

    this.name = "DeliverResultsReadAPIProblem";
  }
}

/**
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export type DeliverResultsAPIProblemData = {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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
 * A Problem Details object (RFC 9457).
 *
 * @remarks
 *
 * Additional properties specific to the problem type may be present.
 */
export class DeliverResultsAPIProblem extends Error {
  /**
   * An absolute URI that identifies the problem type
   */
  type?: string;
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

  /** The original data that was passed to this error instance. */
  data$: DeliverResultsAPIProblemData;

  constructor(err: DeliverResultsAPIProblemData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.type != null) this.type = err.type;
    if (err.href != null) this.href = err.href;
    if (err.title != null) this.title = err.title;
    if (err.status != null) this.status = err.status;
    if (err.detail != null) this.detail = err.detail;
    if (err.instance != null) this.instance = err.instance;
    if (err.subsystem != null) this.subsystem = err.subsystem;
    if (err.time != null) this.time = err.time;
    if (err.requestId != null) this.requestId = err.requestId;
    if (err.causes != null) this.causes = err.causes;
    if (err.remedy != null) this.remedy = err.remedy;
    if (err.supportEmail != null) this.supportEmail = err.supportEmail;
    if (err.supportPhone != null) this.supportPhone = err.supportPhone;
    if (err.supportUrl != null) this.supportUrl = err.supportUrl;
    if (err.retryable != null) this.retryable = err.retryable;
    if (err.retryAfter != null) this.retryAfter = err.retryAfter;
    if (err.context != null) this.context = err.context;

    this.name = "DeliverResultsAPIProblem";
  }
}

/** @internal */
export const DeliverResultsReadAPIProblem$inboundSchema: z.ZodType<
  DeliverResultsReadAPIProblem,
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
})
  .transform((v) => {
    return new DeliverResultsReadAPIProblem(v);
  });

/** @internal */
export type DeliverResultsReadAPIProblem$Outbound = {
  type?: string;
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
export const DeliverResultsReadAPIProblem$outboundSchema: z.ZodType<
  DeliverResultsReadAPIProblem$Outbound,
  z.ZodTypeDef,
  DeliverResultsReadAPIProblem
> = z.instanceof(DeliverResultsReadAPIProblem)
  .transform(v => v.data$)
  .pipe(z.object({
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
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeliverResultsReadAPIProblem$ {
  /** @deprecated use `DeliverResultsReadAPIProblem$inboundSchema` instead. */
  export const inboundSchema = DeliverResultsReadAPIProblem$inboundSchema;
  /** @deprecated use `DeliverResultsReadAPIProblem$outboundSchema` instead. */
  export const outboundSchema = DeliverResultsReadAPIProblem$outboundSchema;
  /** @deprecated use `DeliverResultsReadAPIProblem$Outbound` instead. */
  export type Outbound = DeliverResultsReadAPIProblem$Outbound;
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
})
  .transform((v) => {
    return new DeliverResultsAPIProblem(v);
  });

/** @internal */
export type DeliverResultsAPIProblem$Outbound = {
  type?: string;
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
> = z.instanceof(DeliverResultsAPIProblem)
  .transform(v => v.data$)
  .pipe(z.object({
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
  }));

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
