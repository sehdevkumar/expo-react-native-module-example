import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to SettingsPkg.web.ts
// and on native platforms to SettingsPkg.ts
import SettingsPkgModule from './SettingsPkgModule';
import SettingsPkgView from './SettingsPkgView';
import { ChangeEventPayload, SettingsPkgViewProps } from './SettingsPkg.types';

// Get the native constant value.
export const PI = SettingsPkgModule.PI;

export function hello(): string {
  return SettingsPkgModule.hello();
}

export async function setValueAsync(value: string) {
  return await SettingsPkgModule.setValueAsync(value);
}

const emitter = new EventEmitter(SettingsPkgModule ?? NativeModulesProxy.SettingsPkg);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { SettingsPkgView, SettingsPkgViewProps, ChangeEventPayload };
