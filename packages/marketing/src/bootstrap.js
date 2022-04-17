import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function
const mount = (el) => {
    ReactDOM.render(<App />, el);
};

// If we are in dev and isolation
// Call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running thru container and we should export mount function
export { mount };
