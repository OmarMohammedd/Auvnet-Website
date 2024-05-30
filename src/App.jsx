import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import NavBar from "./components/Navbar/NavBar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Services from "./pages/services/Services";
import Courses from "./pages/courses/Courses";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import MobileAPP from "./pages/MobileAppService/MobileAPP";
import DesktopApp from "./pages/DesktopApp/DesktopApp";
import AppSecure from "./pages//AppSecure/AppSecure";
import Uiux_1 from "./pages/uiuxP_1/UiuxP_1";
import Uiux_2 from "./pages/uiuxP_2/UiuxP_2";
import SelectServices from "./pages/Select Services/SelectServices";
import Website from "./pages/websiteService/Website";
import Programming_1 from "./pages/ProjectProgramming/Programming";
import Dachboard_1 from "./pages/Dachboard-1/Dachboard_1";
import Dachboard_2 from "./pages/Dachboard-2/Dachboard_2";
import Dachboard_3 from "./pages/Dachboard-3/Dachboard_3";
import Dachboard_4 from "./pages/Dachboard-4/Dachboard_4";
import OurProjects from "./pages/OurProjects/OurProjects";
import Dachboard_5 from "./pages/Dachboard-5/Dachboard_5";
import Aiservice from "./pages/AIservice/Aiservice";
import Presentation from "./pages/Presentation/Presentation";
function App() {
  const LandingLayout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          // ddddddd
          path: "/services",
          element: <Services />,
        },
        {
          path: "/services/uiux",
          element: <Uiux_1 />,
        },
        {
          path: "/services/logo",
          element: <Uiux_2 />,
        },
        {
          path: "/services/graphicdesign",
          element: <GraphicDesign />,
        },
        {
          path: "/services/mobileapp",
          element: <MobileAPP />,
        },
        {
          path: "/services/desktopapp",
          element: <DesktopApp />,
        },
        {
          path: "/services/appsecure",
          element: <AppSecure />,
        },
        {
          path: "/services/make-your-magic",
          element: <SelectServices />,
        },
        {
          path: "/services/website",
          element: <Website />,
        },
        {
          path: "/services/Aiservice",
          element: <Aiservice />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/projects/our-projects",
          element: <OurProjects />,
        },
        {
          path: "/projects/:projctName",
          element: <Presentation />,
        },
        {
          // dddddddddd
          path: "/courses/our-courses",
          element: <Programming_1 />,
        },
      ],
    },
    {
      path: "/admin/projects/add-project",
      element: <Dachboard_1 />,
    },

    {
      path: "/admin/projects/project-details/:id",
      element: <Dachboard_2 />,
    },
    {
      path: "/admin/projects",
      element: <Dachboard_3 />,
    },
    {
      path: "/admin/home",
      element: <Dachboard_4 />,
    },
    {
      path: "/admin/login",
      element: <Dachboard_5 />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
