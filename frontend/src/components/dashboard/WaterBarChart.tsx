import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar
} from "recharts";

import { waterData } from "../../data/chart";

export default function WaterBarChart() {

    return (

        <div className="bg-white rounded-xl shadow-sm p-5">

            <h2 className="font-bold mb-4">

                Water Level

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={waterData}>

                    <XAxis dataKey="device"/>

                    <YAxis/>

                    <Tooltip/>

                    <Bar
                        dataKey="level"
                        fill="#22c55e"
                        radius={[5,5,0,0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}