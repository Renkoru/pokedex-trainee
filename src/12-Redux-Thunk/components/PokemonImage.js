import styled from '@emotion/styled';

const widthMap = {
  default: '20%',
  medium: '150px',
  large: '200px',
};

const PokemonImage = styled.img`
  width: ${({ size }) => widthMap[size]};
  ${({ onClick }) => !!onClick && ':hover { cursor: pointer; }'}
`;

PokemonImage.defaultProps = {
  size: 'default',
};

export default PokemonImage;
