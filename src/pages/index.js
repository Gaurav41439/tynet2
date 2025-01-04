import HomeOne from "./HomeOne"; 

import TeamDetails from "./TeamDetails";
import HomeThree from "./HomeThree";
import HomeTwo from "./HomeTwo";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import ProjectList from "./ProjectList";
import ProjectDetails from "./ProjectDetails";
import SubmitProject from "./SubmitProject";
import Token from "./Token";
import ConnectWallet from "./ConnectWallet";
import SubmitIGO from "./SubmitIGO";

import Login from "./Login";
import Register from "./Register";
import ForgetPass from "./ForgetPass";

import BlogGrid from "./BlogGrid";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";

import Contact from "./Contact";
import PageFaqs from "./PageFaqs";
import Roadmap from "./Roadmap";


const routes = [
  
  { path: '/', component: <HomeOne />},
  { path: '/faqs', component: <PageFaqs />},
  { path: '/roadmap', component: <Roadmap />},
  { path: '/contact', component: <Contact />},
  { path: '/team_details', component: <TeamDetails /> },
  
  { name: 'Domains', links: '/home', yOffset: 1200 },

  
  { path: '/home_v2', component: <HomeTwo />},
  { path: '/home_v3', component: <HomeThree />},
  { path: '/project_v1', component: <Project1 />},
  { path: '/project_v2', component: <Project2 />},
  { path: '/project_v3', component: <Project3 />},
  { path: '/project_v4', component: <Project4 />},
  { path: '/project_v5', component: <Project5 />},
  { path: '/project_list', component: <ProjectList />},
  { path: '/project_details', component: <ProjectDetails />},
  { path: '/project_submit', component: <SubmitProject />},
  { path: '/token', component: <Token />},
  { path: '/connect', component: <ConnectWallet />},
  { path: '/team_details', component: <TeamDetails />},
    { path: '/login', component: <Login />},
  { path: '/register', component: <Register />},
  { path: '/forgetPass', component: <ForgetPass />},
    { path: '/problem_statements', component: <BlogGrid />},
  { path: '/blog_list', component: <BlogList />},
  { path: '/problem_statement', component: <BlogDetails />},


]

export default routes;