import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import College from 'pages/College';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import QA from 'components/landing/Q_A';
import Prof from 'components/landing/Prof';
import { ToastContainer } from 'react-toastify';
import LatestNews from 'components/landing/LatestNews';
//import CollegePage from 'components/landing/CollegePage';

function App() {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Q_A" component={QA} />
            <Route exact path="/Prof" component={Prof}/>
            <Route exact path="/College" component={College}/>
            <Route exact path="/LatestNews" component={LatestNews} />
            
            <Redirect from="*" to="/" />
          
        </Switch>
        <ToastContainer/>
        </>
    );
}

export default App;
