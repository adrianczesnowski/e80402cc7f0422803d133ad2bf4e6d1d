import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    )
};

export default Routes;