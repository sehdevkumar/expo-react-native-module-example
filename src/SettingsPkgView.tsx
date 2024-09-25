import { EventEmitter, NativeModulesProxy, requireNativeModule, requireNativeViewManager} from 'expo-modules-core';
import * as React from 'react';

import { OCRViewProps } from './SettingsPkg.types';

const NativeView: React.ComponentType<OCRViewProps> =
  requireNativeViewManager('SettingsPkg');


export default function SettingsPkgView(props: OCRViewProps) {
  

  const { onOCRCompleted, ...otherProps } = props;
  
  

    return <NativeView 
        {...otherProps}
        onOCRCompleted={(d)=> {
          if(props?.onOCRCompleted)
           props?.onOCRCompleted(d)
        }}
       // Remove this prop from native view
    />;
}