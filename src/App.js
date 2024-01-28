
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { Home } from './components/home-page/Home';
import { Login } from './components/login-page/Login';
import { Register } from './components/register-page/Register';
import { Catalog, Category } from './components/category-movies/Category';
import MovieContextProvider from './context/MovieContext';
import { Details } from './components/details-page/Details';
import AuthContextProvider from './context/AuthContext';
import { Profile } from './components/profile-page/Profile';
import { EditProfile } from './components/edit-profile/EditProfile';
import AuthGards from './util/AuthGards';
import { RouteGards } from './util/RouteGards';
import { Favorite } from './components/favorite-page/Favorite';
import { PageNotFound } from './components/not-found-page/PageNotFound';


function App() {
  return (
    <>
      <AuthContextProvider>
        <MovieContextProvider >
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<AuthGards><Login /> </AuthGards>} />
            <Route path='/register' element={<AuthGards><Register /> </AuthGards>} />
            <Route path='/profile' element={<RouteGards ><Profile /> </RouteGards>} />
            <Route path='/favorite-list' element={<Favorite />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/edit-profile/:id' element={<RouteGards> <EditProfile /></RouteGards>} />
            <Route path='/category/movies' element={<Category />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </MovieContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
