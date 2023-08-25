<script>
  import { data } from '../stores/store.js';
  import { v4 as uuidv4 } from 'uuid';
  let value;

  function createItem() {
    if (!value) return;
    const item = {
      id: uuidv4(),
      text: value,
      status: false,
    };
    data.addItem(item);
    value = '';
  }
</script>

<form
  on:submit|preventDefault={createItem}
  autocomplete="off"
  class="flex items-center justify-between"
>
  <label
    for="large-input"
    class=" w-[85%] block text-sm font-medium text-gray-900 dark:text-white"
  >
    <input
      type="text"
      bind:value
      id="large-input"
      class="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </label>
  <button
    type="submit"
    class="w-[13%] h-[100%] text-xl focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >Add</button
  >
</form>
