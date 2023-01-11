import { defineStore } from "pinia";
import paintings from "../../data/db.json";

export const usePaintingStore = defineStore('PaintingStore', {
    state: () => ({
        paintings
    }),
    getters: {
        getPaintingById: (state) => {
          return (paintingId) => state.paintings.find((painting) => painting.id === paintingId)
        },
      },
});