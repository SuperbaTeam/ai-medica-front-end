export default function Footer() {
  return (
    <footer class="border-t border-gray-200">
    <div
      class="
        container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto
        md:items-center
        lg:items-start
        md:flex-row md:flex-nowrap
      "
    >
      <div
        class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"
      >
        <a
          class="
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            text-blue-700
            md:justify-start
          "
        >
          Logo
        </a>
        <p class="mt-2 text-sm text-justify text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          at sequi cum, impedit fuga in placeat illo eum minima possimus est
          perferendis distinctio explicabo eos natus consequuntur blanditiis
          odio optio?
        </p>
        <div class="flex mt-4">
          <button class="h-auto p-3 text-xs text-black bg-lime-300 rounded-sm">
            Get Started
          </button>
        </div>
        <div class="flex justify-center mt-4 lg:mt-2">
          <a href="https://github.com/SuperbaTeam">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6 text-black-600"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="justify-between w-full mt-4 text-center lg:flex">
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 class="mb-2 font-bold tracking-widest text-gray-900">
            Useful Links
          </h2>
          <ul class="mb-8 space-y-2 text-sm list-none">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">About Us</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Blogs</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 class="mb-2 font-bold tracking-widest text-gray-900">
            Useful Links
          </h2>
          <ul class="mb-8 space-y-2 text-sm list-none">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">About Us</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Blogs</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
            </li>
          </ul>
        </div>
        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 class="mb-2 font-bold tracking-widest text-gray-900">
            Useful Links
          </h2>
          <ul class="mb-8 space-y-2 text-sm list-none">
            <li>
              <a class="text-gray-600 hover:text-gray-800">Home</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">About Us</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Blogs</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center -mt-12">
      <p class="text-base text-gray-400">
        All rights reserved by @ SuperbaTeam 2021
      </p>
    </div>
  </footer>
  );
}
