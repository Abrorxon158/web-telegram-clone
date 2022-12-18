import {protectedRoute} from "@/entities/viewer";
import {routes} from "@/shared/config/routing";

export const loginLoadedRoute = protectedRoute(routes.login);
