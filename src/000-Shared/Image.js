import React from 'react';

function Image({ src, className, onClick }) {
  return <img className={className} alt="Asdfs" src={src} onClick={onClick} />;
}

// const Image = ({ src }) => (
//   <figure
//     className="image is-square"
//     style={{
//       backgroundImage: `url(${src})`,
//       backgroundRepeat: 'no-repeat',
//     }}
//   >
//     {/* <img src={src} /> */}
//   </figure>
// );

export default Image;
