import React from 'react';
import {
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  loadTheme,
  Layer,
  PivotItem,
  IStyleSet, ILabelStyles, Pivot, initializeIcons
} from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import './App.css';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const App: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (

    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm10 ms-md2 ms-lg10">A</div>
        <div className="ms-Grid-col ms-sm2 ms-md10 ms-lg2"> <Stack horizontal tokens={stackTokens}>
          <DefaultButton text="Standard" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
          <PrimaryButton text="Primary" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
        </Stack></div>
      </div>
    </div>

  );
};

function _alertClicked(): void {
  alert('Clicked');
}