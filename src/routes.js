import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
import { setUser, logout } from './redux/ducks/user';

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(user => setCurrentUser(user));

        // Filtering essential user informations
        if (currentUser) {
            const { uid, displayName, email, photoURL } = currentUser
            const userData = {
                uid,
                displayName,
                email,
                photoURL
            }
            // REFACTOR: Working but multiple rendering
            dispatch(setUser(userData));
        } else {
            // REFACTOR: Working but multiple rendering
            dispatch(logout());
        }

        return () => {
            unsubscribeFromAuth()
        }
    }, [currentUser, dispatch])

    async function unsubscribeFromAuth() {
        auth.onAuthStateChanged(async user => setCurrentUser(user))
    }

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
}

export default App;