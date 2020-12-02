import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import home from "./routes/home";
import signup from "./routes/signup";
import login from "./routes/login";

const App = () => {
    return <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={home}/>
                        <Route exact path="/login" component={signup}/>
                        <Route exact path="/signup" component={login}/>
                    </Switch>
                </Router> 
            </div>    
}

export default App;