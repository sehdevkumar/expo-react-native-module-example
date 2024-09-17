import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { SettingsPkgViewProps } from './SettingsPkg.types';

const NativeView: React.ComponentType<SettingsPkgViewProps> =
  requireNativeViewManager('SettingsPkg');

export default function SettingsPkgView(props: SettingsPkgViewProps) {
  return <NativeView {...props} />;
}
