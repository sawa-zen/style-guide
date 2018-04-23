import React from 'react';
import styled from 'styled-components/primitives';
import Section from '../../components/Section';
import { TEXT_STYLE, Text } from '@sawa-zen/style-guide';

const ListItem = styled.View`
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

const Type = Text.extend`
  width: 90px;
`;

const TextStyles = () => (
  <Section title="TextStyle">
    {
      Object.keys(TEXT_STYLE).map((key) => (
        <ListItem>
          <Type type="caption">{key}</Type>
          <Text type={key}>Sample Text {TEXT_STYLE[key].fontSize}</Text>
        </ListItem>
      ))
    }
  </Section>
);

export default TextStyles;
