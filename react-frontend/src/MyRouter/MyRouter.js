import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UsersPage from "../components/UsersPage/UsersPage";
import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import AllfieldsPage from "../components/AllfieldsPage/AllfieldsPage";
import AllfieldProjectLayoutPage from "../components/AllfieldsPage/AllfieldProjectLayoutPage";
import SingleAllfieldsPage from "../components/AllfieldsPage/SingleAllfieldsPage";
import ArrayfieldsPage from "../components/ArrayfieldsPage/ArrayfieldsPage";
import ArrayfieldProjectLayoutPage from "../components/ArrayfieldsPage/ArrayfieldProjectLayoutPage";
import SingleArrayfieldsPage from "../components/ArrayfieldsPage/SingleArrayfieldsPage";
import Objext121Page from "../components/Objext121Page/Objext121Page";
import Objext121ProjectLayoutPage from "../components/Objext121Page/Objext121ProjectLayoutPage";
import SingleObjext121Page from "../components/Objext121Page/SingleObjext121Page";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
<Route path="/usersLayout/users" exact element={<UserProjectLayoutPage />} />
<Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
<Route path="/users" exact element={<UserProjectLayoutPage />} />
<Route path="/allfields/:singleAllfieldsId" exact element={<SingleAllfieldsPage />} />
<Route path="/allfields" exact element={<AllfieldProjectLayoutPage />} />
<Route path="/arrayfields/:singleArrayfieldsId" exact element={<SingleArrayfieldsPage />} />
<Route path="/arrayfields" exact element={<ArrayfieldProjectLayoutPage />} />
<Route path="/users/:singleUsersId/objext121" exact element={<Objext121Page />} />
<Route path="/users/:singleUsersId/objext121/:singleObjext121Id" exact element={<SingleObjext121Page />} />
<Route path="/objext121/:singleObjext121Id" exact element={<SingleObjext121Page />} />
<Route path="/objext121" exact element={<Objext121ProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
