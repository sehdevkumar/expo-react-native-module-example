import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SettingsPkg.web.ts
// and on native platforms to SettingsPkg.ts
import SettingsPkgView from './SettingsPkgView';
import {OCRViewProps } from './SettingsPkg.types';



export { SettingsPkgView, OCRViewProps };
