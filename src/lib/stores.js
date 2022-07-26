import { writable } from 'svelte/store';

export const user = writable(undefined);


// export const workouts = createWritableStore("workouts", []);

// const storedMaterials = JSON.parse(localStorage.getItem("materials") || "[]")
// export let materials = writable(storedMaterials);
// materials.subscribe(val => {
//     localStorage.setItem("materials", JSON.stringify(val));
// });

// const storedWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]")
// const storedWorkouts = JSON.parse("[]")
// export let workouts = writable(storedWorkouts);
// workouts.subscribe(val => {
//     localStorage.setItem("workouts", JSON.stringify(val));
// });