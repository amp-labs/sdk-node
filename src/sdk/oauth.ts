/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ConnectAcceptEnum, oauthConnect } from "../funcs/oauthConnect.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { ConnectAcceptEnum } from "../funcs/oauthConnect.js";

export class Oauth extends ClientSDK {
  /**
   * Get URL for OAuth flow
   *
   * @remarks
   * Generate a URL for the browser to render to kick off OAuth flow.
   */
  async connect(
    request: operations.OauthConnectRequestBody,
    options?: RequestOptions & { acceptHeaderOverride?: ConnectAcceptEnum },
  ): Promise<operations.OauthConnectResponse> {
    return unwrapAsync(oauthConnect(
      this,
      request,
      options,
    ));
  }
}
