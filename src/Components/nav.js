import React from 'react';
import { Fragment, useState } from 'react';
import Logo from '../assets/logo.svg';
import { links } from '../data';
import { todo } from '../assets/icon-todo.svg';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const NavMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex w-screen items-center justify-between lg: justify-start  p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex flex-1 lg:flex-initial lg:mr-12'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only text-3xl'>Snap</span>
            <img className='h-8 w-auto' src={Logo} alt='' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 flex-1 inline-flex items-center lg:justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        <Popover.Group className='hidden lg:flex lg:gap-x-6 '>
          {links.map((link) => {
            const { id, url, text, sublinks } = link;
            return (
              <>
                {sublinks ? (
                  <Popover className='relative'>
                    <Popover.Button className='flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-900 lg:flex-1 lg:w-9/12'>
                      {text}
                      <ChevronDownIcon
                        className='h-5 w-5 flex-none text-gray-400'
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                        {sublinks.map((sublink) => {
                          const { id, url, text, iconpath, iconfill } = sublink;
                          return (
                            <div className='p-4'>
                              <div
                                key={id}
                                className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'
                              >
                                <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                                  <svg
                                    width='16'
                                    height='16'
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
                                    aria-hidden='true'
                                  >
                                    <path d={iconpath} fill={iconfill} />
                                  </svg>
                                </div>
                                <div className='flex-auto'>
                                  <a
                                    href={url}
                                    className='block font-medium text-gray-900'
                                  >
                                    {text}
                                    <span className='absolute inset-0' />
                                  </a>
                                  <p className='mt-1 text-gray-600'>{text}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ) : (
                  <>
                    <a
                      href='#'
                      className='pr-5 text-sm font-medium leading-6 text-gray-900'
                    >
                      {text}
                    </a>
                  </>
                )}
              </>
            );
          })}
        </Popover.Group>
        <div className='hidden lg:flex lg:pl-12 lg:flex-1 lg:justify-end'>
          <a
            href='#'
            className='py-1 lg:mr-10 text-sm font-normal leading-6 text-gray-900 '
          >
            Login
          </a>
          <a
            href='#'
            className='px-3 py-1 text-sm font-normal leading-6 text-grey-900 rounded-xl border border-black'
          >
            Register
          </a>
        </div>
      </nav>
      {/* mobile nav */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full max-w-64 overflow-y-auto bg-white px-6 py-6 sm:max-w-xs sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Snap</span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {links.map((link) => {
                  const { id, url, text, sublinks } = link;
                  return (
                    <>
                      {sublinks ? (
                        <Disclosure as='div' className='-mx-3'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                                {text}
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? 'rotate-180' : '',
                                    'h-5 w-5 flex-none'
                                  )}
                                  aria-hidden='true'
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className='mt-2 space-y-2'>
                                {sublinks.map((sublink) => {
                                  const { id, url, text, iconpath, iconfill } =
                                    sublink;
                                  // check if we have an icon if yes design is different
                                  return iconpath ? (
                                    <div className='flex pl-10'>
                                      <svg
                                        width='16'
                                        height='16'
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='mt-4 text-gray-600 group-hover:text-indigo-600'
                                        aria-hidden='true'
                                      >
                                        <path d={iconpath} fill={iconfill} />
                                      </svg>
                                      <Disclosure.Button
                                        key={id}
                                        as='a'
                                        href={url}
                                        className='block rounded-lg py-2 pl-3 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                      >
                                        {text}
                                      </Disclosure.Button>
                                    </div>
                                  ) : (
                                    <Disclosure.Button
                                      key={id}
                                      as='a'
                                      href={url}
                                      className='block rounded-lg py-2 pl-10 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                                    >
                                      {text}
                                    </Disclosure.Button>
                                  );
                                })}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <>
                          <a
                            href='#'
                            className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {text}
                          </a>
                        </>
                      )}
                    </>
                  );
                })}
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block text-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
                <a
                  href='#'
                  className='-mx-3 block text-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-xl border border-black'
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavMenu;
