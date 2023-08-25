<script>
  // @ts-nocheck
  import { data } from '../stores/store.js';
  export let id, text;
  $: checked = $data.find((ele) => ele.id === id).status;
  const updateStatus = (id) => data.updateStatusItem(id);
  const remove = (item) => data.removeItem(item);
</script>

<div {id} class="flex items-center justify-between">
  <label
    for={id}
    class="{checked
      ? 'line-through'
      : ''} flex items-center gap-4 ml-2 text-xl font-medium text-gray-900 dark:text-gray-300"
  >
    <input
      on:change={updateStatus(id)}
      {id}
      type="checkbox"
      bind:checked
      class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    {text === undefined ? '' : text}</label
  >

  <button
    on:click={() => remove(id)}
    type="button"
    class="flex items-center justify-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-trash"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path
        d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
      />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
  </button>
</div>
