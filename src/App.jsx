import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import './resources/css/app.css';

import Root from './pages/Root';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutTheArtist from './pages/AboutTheArtist';
import Kontakt from './pages/Kontakt';
import UberDieKunstlerin from './pages/UberDieKunstlerin';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> } >
    <Route index element={ <Home /> } />
    <Route path='about-the-artist' element={ <AboutTheArtist /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='ueber-die-kuenstlerin' element={ <UberDieKunstlerin /> } />
    <Route path='kontakt' element={ <Kontakt /> } />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App
