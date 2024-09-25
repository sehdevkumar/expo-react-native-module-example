import { EventEmitter, NativeModulesProxy, requireNativeModule, requireNativeViewManager} from 'expo-modules-core';
import * as React from 'react';

import { OCRViewProps } from './SettingsPkg.types';

const NativeView: React.ComponentType<OCRViewProps> =
  requireNativeViewManager('SettingsPkg');


export default function SettingsPkgView(props: OCRViewProps) {
  

  const otherProps  = {...props};
  
  

    return <NativeView 
        onOCRCompleted={(d)=> {
          console.log("Why it does not works",d) 
        }}
       // Remove this prop from native view
    />;
}