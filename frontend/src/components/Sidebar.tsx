import {
    LayoutDashboard,
    Cpu,
    Droplets,
    Bell,
    FileBarChart,
    Menu
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard
    },
    {
        name: "Devices",
        path: "/devices",
        icon: Cpu
    },
    {
        name: "Water Status",
        path: "/water",
        icon: Droplets
    },
    {
        name: "Notifications",
        path: "/notification",
        icon: Bell
    },
    {
        name: "Reports",
        path: "/report",
        icon: FileBarChart
    }
];

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">

            <div className="flex items-center gap-3 p-5 border-b border-slate-700">

                <Menu />

                <div>

                    <h1 className="font-bold">
                        Smart IoT
                    </h1>

                    <p className="text-xs text-slate-300">
                        Water Monitoring
                    </p>

                </div>

            </div>

            <div className="flex-1 mt-4">

                {menus.map((menu) => {

                    const Icon = menu.icon;

                    return (

                        <NavLink
                            key={menu.name}
                            to={menu.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 mx-3 my-2 px-4 py-3 rounded-xl transition

                                ${isActive
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-800"}`
                            }
                        >

                            <Icon size={20} />

                            {menu.name}

                        </NavLink>

                    );

                })}

            </div>

            <div className="p-5 border-t border-slate-700">

                <div className="font-semibold">

                    Admin

                </div>

                <div className="text-sm text-slate-400">

                    Administrator

                </div>

            </div>

        </div>
    );
}