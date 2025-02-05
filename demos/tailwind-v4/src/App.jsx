import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
function App() {
  return (
    <main className="grid min-h-screen place-content-center gap-y-5">
      <h1 className="text-6xl">
        <code>tailwind-touch</code> Plugin Test
      </h1>
      <h2>
        <code>tailwindcss</code> is running on v4
      </h2>
      <ul className="grid w-full divide-y *:py-3">
        <li>
          <CheckCircleIcon className="not-pointer-coarse:hidden pointer-coarse:inline mr-2 size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="pointer-coarse:hidden mr-2 inline size-5 stroke-red-600 stroke-2" />
          The pointer is coarse.
        </li>
        <li>
          <CheckCircleIcon className="not-pointer-fine:hidden pointer-fine:inline mr-2 size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="not-pointer-fine:inline pointer-fine:hidden mr-2 size-5 stroke-red-600 stroke-2" />
          The pointer is fine
        </li>
        <li>
          <CheckCircleIcon className="not-pointer-none:hidden pointer-none:inline mr-2 size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="not-pointer-none:inline pointer-none:hidden mr-2 size-5 stroke-red-600 stroke-2" />
          There is no pointer
        </li>
        <li>
          <CheckCircleIcon className="not-hover-hover:hidden hover-hover:inline mr-2 size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="not-hover-hover:inline hover-hover:hidden mr-2 size-5 stroke-red-600 stroke-2" />
          Hover is possible
        </li>
        <li>
          <CheckCircleIcon className="not-hover-none:hidden hover-none:inline mr-2 size-5 stroke-emerald-500 stroke-2" />
          <XCircleIcon className="not-hover-none:inline hover-none:hidden mr-2 size-5 stroke-red-600 stroke-2" />
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
