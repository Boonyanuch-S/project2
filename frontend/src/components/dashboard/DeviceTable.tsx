import { Pencil, Trash2 } from "lucide-react";
import ProgressBar from "../common/ProgressBar";
import StatusBadge from "../common/StatusBadge";
import { devices } from "../../mock/dashboard";

export default function DeviceTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm">

      <div className="flex justify-between items-center p-5 border-b">

        <h2 className="font-bold text-lg">
          Device Status
        </h2>

        <button
          className="border rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
        >
          View All
        </button>

      </div>

      <table className="w-full">

        <thead className="text-gray-500 text-sm">

          <tr>

            <th className="text-left p-4">
              Device
            </th>

            <th>
              Water
            </th>

            <th>
              Status
            </th>

            <th>
              Updated
            </th>

            <th>
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {devices.map((device) => (

            <tr
              key={device.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="p-4">

                <div className="font-semibold">
                  {device.name}
                </div>

                <div className="text-sm text-gray-400">
                  {device.location}
                </div>

              </td>

              <td className="w-52">

                <ProgressBar
                  value={device.waterLevel}
                />

              </td>

              <td>

                <StatusBadge
                  status={device.status}
                />

              </td>

              <td>

                {device.updatedAt}

              </td>

              <td>

                <div className="flex justify-center gap-3">

                  <button>

                    <Pencil
                      size={18}
                    />

                  </button>

                  <button>

                    <Trash2
                      size={18}
                    />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}