import React from 'react';
import styled from 'styled-components/primitives';
import Section from '../../components/Section';
import { Button, Text } from '@sawa-zen/style-guide';

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
      <Column>
        <Button type="primary" />
      </Column>
      <Column>
        <Button type="primary" label="Hover" hover />
      </Column>
      <Column>
        <Button type="primary" label="Disabled" disabled />
      </Column>
    </Row>
    <Row>
      <Column>
        <Type type="caption">secondary</Type>
      </Column>
      <Column>
        <Button type="secondary" />
      </Column>
      <Column>
        <Button type="secondary" label="Hover" hover />
      </Column>
      <Column>
        <Button type="secondary" label="Disabled" disabled />
      </Column>
    </Row>
  </Section>
);

export default Buttons;
