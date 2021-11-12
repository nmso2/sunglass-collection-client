import React from 'react';
import useAuth from '../hooks/useAuth';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const UserProfile = () => {
    const { user } = useAuth();
    return (
        <div>
            <Header></Header>
            <div className="inline-block my-12 p-12 shadow-2xl">
                <img className=" mx-auto" src={user.photoURL} alt="" />
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default UserProfile;