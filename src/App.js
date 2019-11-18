import React, { Component, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Posts = lazy(() => import("./Posts"));
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/App.css";
import { hot } from 'react-hot-loader/root';

class App extends Component {
    state = {
        posts: []
    }

    handleFetch = posts => {
        this.setState({ posts: [...posts] });
    }

    render() {
        return (
            <>
                <nav className="nav-bar">
                    <Link className="link" to="/login" >
                        <FontAwesomeIcon icon = {["fas", "home"]} />
                         Login 
                         </Link>
                    <Link className="link" to="/register" > Register </Link>
                    <Link className="link" to="/posts" > Posts </Link>
                </nav>
                <Suspense fallback={<div>Loading...</div>} >
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/posts" render={() => <Posts posts={this.state.posts} handleChange={this.handleFetch} />} />
                        <Route render={() => (<h1>404 error</h1>)} />
                    </Switch>
                </Suspense>

            </>
        );
    }
}

export default hot(App);
