import { SubmittableExtrinsic } from "@axiasolar-js/api/types";
import { SignerPayloadJSON } from "@axiasolar-js/types/types";

export type QRSigner = {
  completedFramesCount: number;
  multipartData: any[];
  multipartComplete: boolean;
  totalFrameCount: number;
  latestFrame: number;
  missedFrames: any[];
  unsignedData: any;
};

export type QRSubmittable = {
  tx: SubmittableExtrinsic<"promise">;
  payload: SignerPayloadJSON;
};
