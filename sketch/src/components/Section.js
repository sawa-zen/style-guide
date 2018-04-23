import React from 'react';
import styled from 'styled-components/primitives';
import { COLORS, Text } from '@sawa-zen/style-guide';

const Wrapper = styled.View`
  padding: 60px;
`;

const Title = Text.extend`
  font-size: 30px;
  color: ${COLORS.red};
  margin-bottom: 40px;
`;

const Section = (props) => (
  <Wrapper name="Section">
    <Title name="Title" type="display5">{props.title}</Title>
    {props.children}
  </Wrapper>
);

export default Section;
