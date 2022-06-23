import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ExternalLinkIcon } from '@heroicons/react/solid'


export default function Header() {
  return (
    <Disclosure as="nav" className="bg-slate-900 bg-opacity-80">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex justify-between flex-1">
                <a className="flex items-center flex-shrink-0" href="/">
                  <img className="hidden w-auto h-8 lg:block sm:h-8" src="/logo.svg" width="42" height="32" alt="Arkadiko" />
                  <div class="flex flex-col">
                    <div class="ml-4 text-xl font-bold leading-none text-white align-middle font-headings">Arkadiko</div>
                    <div class="ml-4 mt-0.5 text-base font-semibold leading-none tracking-widest text-indigo-400 uppercase">Keepers</div>
                  </div>

                </a>

                <div className="hidden lg:ml-6 lg:flex lg:space-x-8 lg:items-center">
                  <div className="sm:flex sm:space-x-8 sm:h-full">
                    <a className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-gray-50 hover:border-gray-100 hover:text-white" href="https://docs.arkadiko.finance/" target="_blank" rel="noopener noreferrer">
                      Docs
                      <ExternalLinkIcon className="block w-3 h-3 ml-2" aria-hidden="true" />
                    </a>

                    <a className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-gray-50 hover:border-gray-100 hover:text-white" href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md" target="_blank" rel="noopener noreferrer">
                      Security
                      <ExternalLinkIcon className="block w-3 h-3 ml-2" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center -mr-2 lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-white lg:hidden">
            <div>
              <div className="pt-2 pb-3 space-y-1">
                <a className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" href="https://docs.arkadiko.finance/" target="_blank" rel="noopener noreferrer">
                  Docs
                </a>

                <a className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" href="#faq" target="_blank" rel="noopener noreferrer">
                  FAQ
                </a>

                <a className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" href="https://github.com/arkadiko-dao/arkadiko/blob/master/SECURITY.md" target="_blank" rel="noopener noreferrer">
                  Security
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
