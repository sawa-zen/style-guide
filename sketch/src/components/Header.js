import React from 'react';
import styled from 'styled-components/primitives';
import { COLORS, Text } from '@sawa-zen/style-guide';

const Wrapper = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${COLORS.red};
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
`;

const Title = Text.extend`
  color: white;
`;

const Header = () => (
  <Wrapper name="Header">
    <Title name="Title" type="display4">Style Guide Sample</Title>
  </Wrapper>
);

export default Header;
