import { Ref } from "react";

export type OCRData = {
    imagePath: String
    value: String
}

export type OCRViewProps = {
  onOCRCompleted?: (data?: OCRData | any)=>void
  onViewDestoryed?:()=>void
  ref?: Ref<OCRViewRef>;
};

export interface OCRViewRef {
  readonly startPreview: () => Promise<void>;
  readonly stopPreview: () => Promise<void>;

}
