import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/hats' component={HatsPage} />
        </Switch>
    </BrowserRouter>
)

export default Routes