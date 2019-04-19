import styled from '@emotion/styled';

const Flex = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column ? 'column' : null,
}));

Flex.defaultProps = {
  column: false,
};

export default Flex;
