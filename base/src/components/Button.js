import React from 'react';
import styled from 'styled-components/primitives';
import Text from './Text';
import { COLORS } from '../styles';

const STYLES = {
  primary: {
    wrapper: `
      background-color: ${COLORS.red};
    `,
    label: `
      color: white;
    `,
  },
  secondary: {
    wrapper: `
      background-color: white;
      border-width: 1px;
      border-style: solid;
      border-color: ${COLORS.red};
    `,
    label: `
      color: ${COLORS.red};
    `,
  },
  disabled: {
    wrapper: `
      background-color: ${COLORS.light_gray};
    `,
    label: `
      color: white;
    `,
  }
};

const Wrapper = styled.View`
  width: 200px;
  height: 50px;
  padding: 0 30px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${props => (STYLES[props.buttonType].wrapper)}
  ${props => {
    if(props.hover) return `
      background-color: ${COLORS.light_red};
    `;
  }}
`;

const Label = Text.extend`
  ${props => (STYLES[props.buttonType].label)}
  ${props => (props.hover && 'color: white;')}
`;

const Button = (props) => {
  let type = props.type;
  if (props.disabled) {
    type = 'disabled';
  }
  return (
    <Wrapper name="Button" buttonType={type} hover={props.hover} >
      <Label buttonType={type} type="display3" hover={props.hover} >{props.label}</Label>
    </Wrapper>
  );
}
Button.defaultProps = {
  label: 'Button',
  type: 'primary',
  hover: false,
  disabled: false,
};

export default Button;
