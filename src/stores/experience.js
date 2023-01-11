import { defineStore } from "pinia";

export const useExperienceStore = defineStore('experience', {
    state: () => ({
        count: 0,
        isCompleted: false,
    }),
    actions: {
        increment() {
            this.count++;
        },
        completed() {
            this.isCompleted = true;
        }
    },
    persist: true,
});
