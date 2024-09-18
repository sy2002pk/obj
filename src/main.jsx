import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home/home.jsx'
import CharityfundPage from './pages/charityfund/charityfund.jsx';
import ReligionPage from './pages/religion/religion.jsx';
import EventsPage from './pages/events/events.jsx';
import ContactPage from './pages/contact/contact.jsx';
import ReligionBuddhismPage from './components/religion/buddhism/containerReligion.jsx';
import ReligionHinduismPage from './components/religion/hinduism/containerReligion.jsx';
import LoginPage from './pages/login/login.jsx';
import CreateAccount from './pages/register/register.jsx';
import ReligionNaturaPage from './components/religion/Natural/natural.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/religion",
        element: <ReligionPage />,
      },
      {
        path: "/religion/buddhism",
        element: <ReligionBuddhismPage />
      },
      {
        path: "/religion/hinduism",
        element: <ReligionHinduismPage />
      },
      {
        path: "/religion/natural",
        element: <ReligionNaturaPage />
      },
      {
        path: "/charityFund",
        element: <CharityfundPage />
      },
      {
        path:"/events",
        element: <EventsPage/>
      },
      {
        path:"/contact",
        element: <ContactPage/>
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <CreateAccount />
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
