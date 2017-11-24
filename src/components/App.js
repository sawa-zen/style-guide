import React from 'react';
import styled from 'styled-components/primitives';

const StyledView = styled.View`
  width: 100px;
  height: 100px;
  background-color: red;
  padding: 10px;
  border: 2px solid blue;
`;

const StyledText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const App = () => (
  <StyledView name="App">
    <StyledText>
      こんにちは
    </StyledText>
  </StyledView>
);

export default App;
