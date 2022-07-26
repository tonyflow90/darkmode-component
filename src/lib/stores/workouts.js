import { browser } from '$app/env';
import { writable } from 'svelte/store';
 
const defaultValue = [];
const initialValue = browser ? JSON.parse(window.localStorage.getItem('workouts')) ?? defaultValue : defaultValue;

export const workouts = writable(initialValue);
 
workouts.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('workouts', JSON.stringify(value));
  }
});
 
export { workouts as default };