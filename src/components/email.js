import React from 'react';
import Sidebar from './sidebar';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';
import {Route, Redirect, Switch} from 'react-router-dom'; 

export default function Email() {
    return (
        <div className="email">
            <Sidebar/>
            <main>
                <Switch>
                    <Redirect exact from='/' to='/inbox' />
                    <Route path='/:folderId' exact component={EmailList} />
                    <Route path='/:folderId/:emailId' component={SingleEmail} />
                </Switch>
            </main>
        </div>
    );
}
