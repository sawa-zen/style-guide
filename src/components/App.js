import React from 'react';
import styled from 'styled-components/primitives';

const StyledView = styled.View`
  width: 300px;
  background-color: #00F;
  padding: 10px;
  border: 2px solid red;
`;

const StyledText = styled.Text`
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Hiragino Kaku Gothic ProN';
`;

const ThinText = styled.Text`
  color: white;
  font-size: 14px;
  font-family: 'Hiragino Kaku Gothic ProN';
  font-feature-settings: "palt";
  text-align: justify;
`;

const App = () => (
  <StyledView name="App">
    <StyledText>
      Awesome!
    </StyledText>
    <ThinText>
      ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。
    </ThinText>
  </StyledView>
);

export default App;
