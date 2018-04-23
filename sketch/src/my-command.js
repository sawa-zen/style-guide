import React from 'react';
import styled from 'styled-components/primitives';
import { Artboard, render } from 'react-sketchapp';
import Colors from './sections/colors/Colors';
import TextStyles from './sections/textStyles/TextStyles';
import Buttons from './sections/buttons/Buttons';
import Header from './components/Header';

const StyledArtboard = styled(Artboard)`
  width: 1028px;
  height: auto;
`;

const Body = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled.View`
`;

export default function(context) {
  render(
    <StyledArtboard name="Style Guide">
      <Header />
      <Body>
        <Item><Colors /></Item>
        <Item><TextStyles /></Item>
        <Item><Buttons /></Item>
      </Body>
    </StyledArtboard>,
    context.document.currentPage()
  );
}
