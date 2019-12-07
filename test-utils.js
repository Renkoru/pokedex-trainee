import React from 'react';

// import { initFontAwesomeLibrary } from './src/utils';

const notificationContainer = document.createElement('div');
notificationContainer.id = 'notification';
document.body.appendChild(notificationContainer);

// initFontAwesomeLibrary();

// import '@testing-library/jest-dom/extend-expect';

// re-export everything
export * from '@testing-library/react';
