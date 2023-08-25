<script>
  import { setContext, getContext } from 'svelte';
  import { data } from './stores/store.js';
  import Checkbox from './lib/checkbox.svelte';
  import Form from './lib/form.svelte';
  import Header from './lib/header.svelte';

  // lOCAL STORAGE
  if (localStorage.getItem('data')) {
    data.storage(JSON.parse(localStorage.getItem('data')));
  }

  $: localStorage.setItem('data', JSON.stringify($data));

  // VARIABLES
  let headerSelectBtn = 'all';
  $: copydata = $data;

  // FUNCTIONS
  function getBtnClicked(id) {
    headerSelectBtn = id;
  }

  function getAlldata() {
    copydata = $data;
  }

  function getItemsStatus(bool) {
    copydata = $data.filter((item) => item.status === bool);
  }

  // CONTEXT
  setContext('getBtnName', getBtnClicked);
  setContext('getAlldata', getAlldata);
  setContext('getItemsStatus', getItemsStatus);
</script>

<main
  class=" bg-white dark:bg-gray-800 text-black dark:text-white"
>
  <h1 class="text-center text-3xl my-0">TODO CHALLENGE</h1>
  <Header />
  <Form />
  <section class="flex flex-col gap-4">
    {#each copydata as { id, text } (id)}
      <Checkbox {id} {text} />
    {/each}
    <div class="relative">
      {#if headerSelectBtn === 'completed' && copydata.length}
        <button
          on:click={() => data.clear()}
          type="button"
          class="py-2.5 px-5 absolute right-0 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >Remove All</button
        >
      {/if}
    </div>
  </section>
</main>

<style>
  main {
    min-height: 100vh;
    display: grid;
    gap: 2em;
    grid-template-columns: minmax(360px, 900px);
    grid-template-rows: min-content min-content min-content 1fr;
    justify-content: center;
  }
</style>
