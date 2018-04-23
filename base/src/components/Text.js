import styled from 'styled-components/primitives';
import { COLORS, TEXT_STYLE } from '../styles';

const Text = styled.Text.attrs({
  name: 'Text',
})`
  color: ${COLORS.dark};
  font-size: ${props => (TEXT_STYLE[props.type].fontSize)};
  font-weight: ${props => (TEXT_STYLE[props.type].fontWeight)};
`;
Text.defaultProps = {
  type: 'body',
};

export default Text;
