import React from 'react';
import { BrowserRouter , Route , Redirect , Switch } from 'react-router-dom';
import Header from './Common/Header';
import {Home , Login , Blog , Sub , Todo , PostCreate , Admin} from '../Routes'



const Router: React.FC = () => (
    <BrowserRouter>
        <>
            <Header></Header>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/sub' component={Sub}></Route>
                <Route path='/blog' component={Blog}></Route>
                <Route path='/todo' component={Todo}></Route>
                <Route path='/post_create' component={PostCreate}></Route>
                <Route path='/admin' component={Admin}></Route>
                <Redirect from='*' to='/'></Redirect>
             </Switch>
        </>
    </BrowserRouter>
)

export default Router;