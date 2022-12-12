import { protectedRoute } from '@/entities/viewer';
import { routes } from '@/shared/config/routing';

export const mainLoadedRoute = protectedRoute(routes.main);
