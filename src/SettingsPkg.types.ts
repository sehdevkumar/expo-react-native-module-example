
export type OCRData = {
    imagePath: String
    value: String
}

export type OCRViewProps = {
  onOCRCompleted?: (data?: OCRData)=>void
};
