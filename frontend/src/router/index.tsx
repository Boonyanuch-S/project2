import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Devices from "../pages/Devices";
import WaterStatus from "../pages/WaterStatus";
import Notification from "../pages/Notification";
import Report from "../pages/Report";

export default function Router() {

    return (

        <BrowserRouter>

            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/devices"
                        element={<Devices />}
                    />

                    <Route
                        path="/water"
                        element={<WaterStatus />}
                    />

                    <Route
                        path="/notification"
                        element={<Notification />}
                    />

                    <Route
                        path="/report"
                        element={<Report />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>

    );

}