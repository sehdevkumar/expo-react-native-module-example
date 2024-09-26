import { EventEmitter, NativeModulesProxy, requireNativeModule, requireNativeViewManager } from 'expo-modules-core';
import { OCRData, OCRViewProps, OCRViewRef } from './SettingsPkg.types';
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// Get the native view from the native module
const NativeView: React.ComponentType<OCRViewProps> = requireNativeViewManager('SettingsPkg');

// ForwardRef function for the SettingsPkgView component
const SettingsPkgView = forwardRef<OCRViewRef, OCRViewProps>((props, ref) => {
  const viewRef = useRef<OCRViewRef>(null);

  // Event handler for OCR completion
  const _onOCRCompleted = ({ nativeEvent }: { nativeEvent: OCRData }) => {
    if(props?.onOCRCompleted) {
      props?.onOCRCompleted(nativeEvent)
    }
  };


   const _onViewHasDestored = () => {
    if(props?.onViewDestoryed) {
      props?.onViewDestoryed()
    }
  };

  // Expose startPreview and stopPreview methods to parent components using the ref
  useImperativeHandle(ref, () => ({
    startPreview: async () => {
      return await viewRef.current?.startPreview();
    },
    stopPreview: async () => {
      return await viewRef.current?.stopPreview();
    },
  }));

  // Render the native view with props and ref
  return (
    <NativeView 
      {...props}
      onOCRCompleted={_onOCRCompleted}
      onViewDestoryed={_onViewHasDestored}
      ref={viewRef} // Attach the native view ref
    />
  );
});

export default SettingsPkgView;
