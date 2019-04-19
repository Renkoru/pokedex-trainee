// import React from 'react';
import styled from '@emotion/styled';

const widthMap = {
  default: '20%',
  medium: '150px',
};

const PokemonImage = styled.img`
  width: ${({ size }) => widthMap[size]};
`;

PokemonImage.defaultProps = {
  size: 'default',
};

export default PokemonImage;

// export default function PokemonImage({
//   src,
//   size = 'default',
//   ...rest
// }) {
//   const width = ;

//   return (
//     <img
//       src={src}
//       style={{
//         width,
//       }}
//       {...rest}
//     />
//   );
// }
