import {
    Bell,
    UserCircle
} from "lucide-react";

export default function Navbar() {

    return (

        <div
            className="h-16 bg-white border-b flex items-center justify-between px-6"
        >

            <div>

                <h1 className="font-bold text-2xl">

                    Dashboard

                </h1>

                <p className="text-sm text-gray-500">

                    Smart Water Monitoring

                </p>

            </div>

            <div
                className="flex items-center gap-6"
            >

                <Bell />

                <div className="flex items-center gap-2">

                    <UserCircle />

                    <div>

                        <div className="font-semibold">

                            Admin

                        </div>

                        <div className="text-xs">

                            Administrator

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}