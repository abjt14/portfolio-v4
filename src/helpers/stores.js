import { writable } from 'svelte/store';

export const scrolledRatio = writable(0);

// project modal
export const name = writable('');
export const type = writable('');
export const role = writable('');
export const technologies = writable([]);
export const description = writable([]);
export const url = writable('');
export const images = writable('');
export const modalActive = writable(false);
// project modal end