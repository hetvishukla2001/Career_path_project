import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import QA from 'components/landing/Q_A';
import Prof from 'components/landing/Prof';
import CollegePage from 'components/landing/CollegePage';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Q_A" component={QA} />
            <Route exact path="/Prof" component={Prof}/>
            <Route exact path="/college" component={CollegePage}/>
            
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
