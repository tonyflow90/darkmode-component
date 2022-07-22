import { base } from '$app/paths';

export const routes = [
    {
        name: "Home",
        path: `${base}/`
    },
    {
        name: "Workouts",
        path: `${base}/workouts`
    },
    {
        name: "Settings",
        path: `${base}/settings`
    },
    {
        name: "About",
        path: `${base}/about`
    }
];
