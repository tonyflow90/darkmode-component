import { writable } from 'svelte/store';

export const user = writable(undefined);

const storedMaterials = JSON.parse(localStorage.getItem("materials") || "[]")
export let materials = writable(storedMaterials);
materials.subscribe(val => {
    localStorage.setItem("materials", JSON.stringify(val));
});