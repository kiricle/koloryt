import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Header } from '../layout/Header/Header';
import { Footer } from '../layout/Footer/Footer';

export const Route = createRootRoute({
    component: () => (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* <TanStackRouterDevtools /> */}
        </>
    ),
});
