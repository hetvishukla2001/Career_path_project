import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import College from 'pages/College';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/career.css';
import QA from 'components/landing/Q_A';
import Prof from 'components/landing/Prof';
import { ToastContainer } from 'react-toastify';
import LatestNews from 'components/landing/LatestNews';
import Usa from 'components/college/Usa';
import ReadMore from 'components/landing/ReadMore';
import Logout from 'components/Logout'
import { createContext } from 'react';
import { useReducer } from 'react';
import { initialState,reducer } from 'components/reducer/UserReducer';
import ResetPassword  from 'pages/ResetPassword'
import CollegePage from 'components/landing/CollegePage';
import Review from 'components/review/Review';
import Exam from 'pages/Exam';

export const UserContext = createContext();
const Routing = () => {
    return (
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Q_A" component={QA} />
        <Route exact path="/Prof" component={Prof}/>
        <Route exact path="/College" component={College}/>
        <Route exact path="/LatestNews" component={LatestNews} />
        <Route exact path="/Usa" component={Usa} />
        <Route exact path="/ReadMore" component={ReadMore} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path='/info'  component={CollegePage} />
        <Route exact path="/Review" component={Review} />
        <Route exact path="/Exam" component={Exam}/>
        
        <Redirect from="*" to="/" />
      
    </Switch>
    )
}


function App() {
    const [state,dispatch]=useReducer(reducer,initialState)
    
    return (
        <>
        <UserContext.Provider value={{state,dispatch}}>
            <Routing />
            <ToastContainer/>
        </UserContext.Provider>
      
        </>
    );
}

export default App;
