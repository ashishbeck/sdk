import { SubmittableExtrinsic } from "@axia-js/api/types";
import { SignerPayloadJSON } from "@axia-js/types/types";

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
