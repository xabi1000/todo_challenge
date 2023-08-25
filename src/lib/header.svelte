<script>
  import { data } from '../stores/store.js';
  import { getContext } from 'svelte';
  // VARIABLES
  let btnName = getContext('getBtnName');
  let All = getContext('getAlldata');
  let getItemsStatus = getContext('getItemsStatus');
  // FUNCTIONS
  function getAlldata() {
    btnName('all');
    All();
  }

  function getStatus(bool) {
    bool === true
      ? btnName('completed')
      : btnName('active');
    getItemsStatus(bool);
  }
</script>

<header class=" rounded-md shadow-sm">
  <nav class="flex items-center justify-between">
    <button
      on:click={getAlldata}
      id="all"
      type="button"
      class="w-40 inline-flex justify-center items-center px-2 py-2 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 mr-3"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
        <path d="M11 6l9 0" />
        <path d="M11 12l9 0" />
        <path d="M11 18l9 0" />
      </svg>

      <span>All</span>
    </button>

    <button
      on:click={() => getStatus(false)}
      id="active"
      type="button"
      class="w-40 inline-flex justify-center items-center px-2 py-2 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 mr-3"
        viewBox="0 0 20 20"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M14.118 14.127c-.182 .181 -.39 .341 -.618 .473l3 5.19a9 9 0 0 0 1.856 -1.423m1.68 -2.32a8.993 8.993 0 0 0 .964 -4.047h-5"
        />
        <path d="M13.5 9.4l3 -5.19a9 9 0 0 0 -8.536 -.25" />
        <path
          d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6"
        />
        <path d="M3 3l18 18" />
      </svg>

      <span>Active</span>
    </button>

    <button
      on:click={() => getStatus(true)}
      id="completed"
      type="button"
      class="w-40 inline-flex justify-center items-center px-2 py-2 text-lg font-medium text-gray-900 bg-transparent border border-gray-900 rounded hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 mr-3"
        viewBox="0 0 20 20"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6"
        />
        <path
          d="M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0"
        />
        <path
          d="M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6"
        />
      </svg>

      <span>Completed</span>
    </button>
  </nav>
</header>
