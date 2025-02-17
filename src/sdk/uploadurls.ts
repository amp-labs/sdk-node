/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
  GenerateAcceptEnum,
  uploadUrlsGenerate,
} from "../funcs/uploadUrlsGenerate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { GenerateAcceptEnum } from "../funcs/uploadUrlsGenerate.js";

export class UploadUrls extends ClientSDK {
  /**
   * Generate a signed URL to upload a zip file to.
   */
  async generate(
    options?: RequestOptions & { acceptHeaderOverride?: GenerateAcceptEnum },
  ): Promise<operations.GenerateUploadUrlResponse> {
    return unwrapAsync(uploadUrlsGenerate(
      this,
      options,
    ));
  }
}
