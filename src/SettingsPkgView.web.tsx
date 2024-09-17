import * as React from 'react';

import { SettingsPkgViewProps } from './SettingsPkg.types';

export default function SettingsPkgView(props: SettingsPkgViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
