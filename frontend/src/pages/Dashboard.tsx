import StatCard from "../components/dashboard/StatCard";
import DeviceTable from "../components/dashboard/DeviceTable";
import NotificationList from "../components/dashboard/NotificationList";
import WaterBarChart from "../components/dashboard/WaterBarChart";
import WaterLineChart from "../components/dashboard/WaterLineChart";

import {
  Wifi,
  Droplets,
  Bell,
  Activity,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

        <StatCard
          title="Devices"
          value="24"
          subtitle="20 Online"
          icon={<Wifi size={40} />}
        />

        <StatCard
          title="Water Level"
          value="72%"
          subtitle="Normal"
          icon={<Droplets size={40} />}
        />

        <StatCard
          title="Alerts"
          value="5"
          subtitle="3 New"
          icon={<Bell size={40} />}
        />

        <StatCard
          title="System Status"
          value="Normal"
          subtitle="Updated 10:30"
          icon={<Activity size={40} />}
        />

      </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <DeviceTable />
            <NotificationList />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <WaterBarChart/>
            <WaterLineChart/>
        </div>

        <div className="space-y-6">

    {/* Summary */}

    <div className="grid grid-cols-4 gap-5">

    </div>

    {/* Table */}

    <div className="grid grid-cols-2 gap-5">

    </div>

    {/* Charts */}

    <div className="grid grid-cols-2 gap-5">

    </div>

</div>
    </div>
  );
}