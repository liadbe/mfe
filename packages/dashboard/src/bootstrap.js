import { createApp } from 'vue';
import Dashboard from './components/Dashboard';

// Mount function
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el);
};

// If we are in dev and isolation
// Call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// We are running thru container and we should export mount function
export { mount };
