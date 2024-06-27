import "./App.css";
import Sidebar from "./component/sidebar";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Challenges from "./pages/challenges/challenges";
import ChallengeDetails from "./pages/challenges/challengeDetails";
import CreateChallenges from "./pages/challenges/createChallege";
import CreateEvent from "./pages/Event/createEvent";
import CensusList from "./pages/CensusList/censusList";
import InsurancePlan from "./pages/InsurancePlan/insurancePlan";
import Event from "./pages/Event/event";
import GetApiFetch from "./pages/getApi";
import PostApiFetch from "./pages/postApi";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/get-api",
      element: <GetApiFetch />,
    },
    {
      path: "/post-api",
      element: <PostApiFetch />,
    },
    {
      path: "/challenges",
      element: <Challenges />,
    },
    {
      path: "/challenge-details",
      element: <ChallengeDetails />,
    },
    {
      path: "/create-challenge",
      element: <CreateChallenges />,
    },
    {
      path: "/create-event",
      element: <CreateEvent />,
    },
    {
      path: "/census-list",
      element: <CensusList />,
    },
    {
      path: "/insurance-plan",
      element: <InsurancePlan />,
    },
    {
      path: "/event",
      element: <Event />,
    },
  ]);
  return (
    <>
      <section className="main">
        <Sidebar />
        <div className="main-content">
          <RouterProvider router={router} />
        </div>
      </section>
    </>
  );
}

export default App;
