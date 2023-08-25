import { writable } from 'svelte/store';

function setdata() {
  const { subscribe, set, update } = writable([]);
  let dataCopy;
  return {
    subscribe,
    addItem: (item) => {
      update((items) => [...items, item]);
    },
    removeItem: (ID) => {
      update((items) =>
        items.filter((item) => item.id !== ID)
      );
    },
    updateStatusItem: (ID) => {
      update((items) =>
        items.map((item) =>
          item.id === ID
            ? { ...item, status: !item.status }
            : item
        )
      );
    },
    storage: (items) => {
      set(items);
    },

    clear: () => {
      set([]);
    },
  };
}

export const data = setdata();
