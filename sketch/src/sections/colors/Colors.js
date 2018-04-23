import React from 'react';
import styled from 'styled-components/primitives';
import Section from '../../components/Section';
import Color from './Color';
import { COLORS } from '@sawa-zen/style-guide';

const ListItem = styled.View`
  margin-bottom: 8px;
`;

const Colors = () => (
  <Section title="Colors" name="Colors" >
    {
      Object.keys(COLORS).map((key) => (
        <ListItem>
          <Color
            name={key}
            code={COLORS[key]}
          />
        </ListItem>
      ))
    }
  </Section>
);

export default Colors;
