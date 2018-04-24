import React from 'react';
import styled from 'styled-components/primitives';
import Section from '../../components/Section';
import { Text } from '@sawa-zen/style-guide';
import {
  Primary,
  PrimaryHover,
  PrimaryDisabled,
  Secondary,
  SecondaryHover,
  SecondaryDisabled,
} from '../../symbols/buttons';

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Column = styled.View`
  margin-right: 20px;
`;

const Type = Text.extend`
  width: 100px;
`;

const Buttons = () => (
  <Section title="Buttons" name="Buttons">
    <Row>
      <Column>
        <Type type="caption">primary</Type>
      </Column>
      <Column><Primary /></Column>
      <Column><PrimaryHover /></Column>
      <Column><PrimaryDisabled /></Column>
    </Row>
    <Row>
      <Column>
        <Type type="caption">secondary</Type>
      </Column>
      <Column><Secondary /></Column>
      <Column><SecondaryHover /></Column>
      <Column><SecondaryDisabled /></Column>
    </Row>
  </Section>
);

export default Buttons;
