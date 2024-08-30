import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../views/Layout";
import HomePage from "../views/Index";
import SettingsPage from "../views/Settings";
import FilesPage from "../views/Files";
import FriendsPage from "../views/Friends";
import CoursesPage from "../views/Courses";
import NotFound from "../views/NotFound";
import PlansPage from "../views/Plans";
import ProfilePage from "../views/Profile";
import ProjectsPage from "../views/Projects";


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="files" element={<FilesPage />} />
            <Route path="friends" element={<FriendsPage />} />
            <Route path="plans" element={<PlansPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="courses" element={<CoursesPage />} />
        </Route>

        <Route path="*" element={<NotFound />}/>
    </>

));

export default router