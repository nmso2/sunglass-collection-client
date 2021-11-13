import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useOrders from '../../../hooks/useOrders';
import useProducts from '../../../hooks/useProducts';
import useReview from '../../../hooks/useReview';
import useUsers from '../../../hooks/useUsers';

const DashboardHome = () => {
    const [orders] = useOrders();
    const [reviews] = useReview();
    const [users] = useUsers();
    const [products] = useProducts();

    const { admin} = useAuth();

    return (
        <div>
            {admin? <div className="flex items-center">
                <div className="max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Customers
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {users.length}
                                        </div>
                                    </div>
                                    <svg className="stroke-current text-white" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2">
                                        </path>
                                        <circle cx="9" cy="7" r="4">
                                        </circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87">
                                        </path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Reviews
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {reviews.length}
                                        </div>
                                    </div>
                                    <svg className="stroke-current text-white" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12">
                                        </polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Orders
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {orders.length}
                                        </div>
                                    </div>
                                    <svg className="stroke-current text-white" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                        </path>
                                        <polyline points="15 3 21 3 21 9">
                                        </polyline>
                                        <line x1="10" x2="21" y1="14" y2="3">
                                        </line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <div className="widget w-full p-4 rounded-lg bg-red-400 border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-col">
                                        <div className="text-xs uppercase font-light text-white">
                                            Total Products
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {products.length}
                                        </div>
                                    </div>
                                    <i className="fas fa-glasses text-white stroke-current"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>: <h2 className="text-6xl" >Welcome to Dashboard!</h2>}
        </div>

    );
};

export default DashboardHome;