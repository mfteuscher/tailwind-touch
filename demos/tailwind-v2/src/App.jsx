import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
function App() {
  return (
    <main className="grid min-h-screen place-content-center gap-y-5">
      <h1 className="text-6xl">
        <code>tailwind-touch</code> Plugin Test
      </h1>
      <h2>
        <code>tailwindcss</code> is running on v2
      </h2>
      <ul className="grid w-full divide-y *:py-3">
        <li>
          <CheckCircleIcon className="pointer-coarse:inline mr-2 hidden size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="pointer-coarse:hidden mr-2 inline size-5 stroke-red-600 stroke-2" />
          The pointer is coarse.
        </li>
        <li>
          <CheckCircleIcon className="pointer-fine:inline mr-2 hidden size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="pointer-fine:hidden mr-2 inline size-5 stroke-red-600 stroke-2" />
          The pointer is fine
        </li>
        <li>
          <CheckCircleIcon className="pointer-none:inline mr-2 hidden size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="pointer-none:hidden mr-2 inline size-5 stroke-red-600 stroke-2" />
          There is no pointer
        </li>
        <li>
          <CheckCircleIcon className="hover-hover:inline mr-2 hidden size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="hover-hover:hidden mr-2 inline size-5 stroke-red-600 stroke-2" />
          Hover is possible
        </li>
        <li>
          <CheckCircleIcon className="hover-none:inline mr-2 hidden size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="hover-none:hidden mr-2 inline size-5 stroke-red-600 stroke-2" />
          Hover is not possilbe
        </li>
      </ul>

      <h2 className="text-2xl">Test Hover</h2>
      <div>
        <button className="rounded-sm bg-black px-3 py-2 font-medium text-white hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300">
          Button
        </button>
      </div>
    </main>
  );
}

export default App;
