import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import ArtPage from "./features/ArtPage";
import PersonalHomepage from "./features/PersonalHomepage";
import { toArtPage, toHomepage } from "./app/routes";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path={toArtPage()}>
                    <ArtPage />
                </Route>
                <Route path={toHomepage()}>
                    <PersonalHomepage />
                </Route>
                <Route path="/">
                    <Redirect to={toHomepage()} />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;