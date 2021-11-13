import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <div className="bannerFondo bg-gray-300	bg-left-top bg-auto bg-repeat-x">
                </div>

                <div className="-mt-80">
                    <div className="w-full text-center mb-12">
                        <h1 className="font-bold text-5xl"><span className="text-red-500">SUNGLASS</span> COllECTION
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">

                        <div className="p-2 sm:p-10 text-center cursor-pointer">
                            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white hover:bg-yellow-100 transition duration-500">
                                <div>
                                <i className="fas fa-glasses text-6xl"></i>

                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">Calual Glasses</div>
                                            <p className="text-gray-700 text-base">
                                            We have some awesome collection of casual glasses to decorate your eyes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-2 sm:p-10 text-center cursor-pointer text-white">
                            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-red-500 hover:bg-red-600 transition duration-500">
                                <div>
                                    <div className="mx-auto w-1/4">
                                    <i className="fas fa-glasses text-6xl"></i>
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">Sunglasses</div>
                                            <p className="text-base">
                                                We have some awesome collection of sunglasses to decorate your eyes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-2 sm:p-10 text-center cursor-pointer translate-x-2">
                            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white hover:bg-yellow-100 transition duration-500">
                                <div>
                                <i className="fas fa-glasses text-6xl"></i>

                                    <div className="px-6 py-4">
                                        <div className="space-y-5">
                                            <div className="font-bold text-xl mb-2">Custom Glasses</div>
                                            <p className="text-gray-700 text-base">
                                            We have some awesome collection of Custom glasses to decorate your eyes
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;