import React from 'react';
import { View } from 'react-primitives';
import styled from 'styled-components/primitives';
import { COLORS, Text } from '@sawa-zen/style-guide';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const Circle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => (props.code)};
  margin-right: 8px;
`;

const Name = Text.extend`
  margin-bottom: 4px;
`;

const Code = Text.extend`
  color: ${COLORS.gray};
`;

const Color = (props) => (
  <Wrapper name="Color">
    <Circle code={props.code}/>
    <View>
      <Name type="caption">{props.name}</Name>
      <Code>{props.code}</Code>
    </View>
  </Wrapper>
);

export default Color;
