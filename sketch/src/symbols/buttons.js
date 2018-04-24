import React from 'react';
import { makeSymbol } from 'react-sketchapp';
import { Button } from '@sawa-zen/style-guide';

export const Primary = () => (
  <Button type="primary" />
);
makeSymbol(Primary, 'button/primary/normal');

export const PrimaryHover = () => (
  <Button type="primary" label="Hover" hover />
);
makeSymbol(PrimaryHover, 'button/primary/hover');

export const PrimaryDisabled = () => (
  <Button type="primary" label="Disabled" disabled />
);
makeSymbol(PrimaryDisabled, 'button/primary/disabled');

export const Secondary = () => (
  <Button type="secondary" />
);
makeSymbol(Secondary, 'button/secondary/normal');

export const SecondaryHover = () => (
  <Button type="secondary" label="Hover" hover />
);
makeSymbol(SecondaryHover, 'button/secondary/hover');

export const SecondaryDisabled = () => (
  <Button type="secondary" label="Disabled" disabled />
);
makeSymbol(SecondaryDisabled, 'button/secondary/disabled');
