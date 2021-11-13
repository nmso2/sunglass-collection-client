import { React, Fragment } from 'react'
import { MenuIcon, UserCircleIcon, XIcon } from '@heroicons/react/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/images/logo.svg'
import useAuth from '../../../hooks/useAuth';



const navigation = [
    { name: 'Dashboard', to: '/dashboard', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>
            <Disclosure as="nav" className=" bg-blue-100 sticky top-0 z-50">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            <Link
                                                key="Home"
                                                to="/"
                                                className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                key="products"
                                                to="/products"
                                                className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                            >
                                                Products
                                            </Link>
                                            {user?.email && navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.to}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {!user?.email ? <Link to="/login" className="text-black hover:bg-gray-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Sign in
                                    </Link> : <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full ring-2 ring-gray-500 focus:ring-black">
                                                <span className="sr-only">Open user menu</span>
                                                {user?.photoURL ? <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user?.photoURL}
                                                    alt=""
                                                /> : <UserCircleIcon className="h-9 w-9 text-white" />}
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/profile"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            {user.displayName}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/myOrders"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            My Orders
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            onClick={logOut}
                                                        >
                                                            Sign out

                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    }

                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link
                                    key="Home"
                                    to="/"
                                    className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium'
                                >
                                    Home
                                </Link>
                                <Link
                                    key="products"
                                    to="/products"
                                    className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                >
                                    Products
                                </Link>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;