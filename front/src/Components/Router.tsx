import React from 'react';
import { BrowserRouter , Route , Redirect , Switch } from 'react-router-dom';
import Header from './Common/Header';
import Home from '../Routes/Home';
import Sub from '../Routes/Sub';
import Blog from '../Routes/Blog';
import Todo from '../Routes/Todo';


const Router: React.FC = () => (
    <BrowserRouter>
        <>
            <Header></Header>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/sub' component={Sub}></Route>
                <Route path='/blog' component={Blog}></Route>
                <Route path='/todo' component={Todo}></Route>
                <Redirect from='*' to='/'></Redirect>
             </Switch>
        </>
    </BrowserRouter>
)

export default Router;