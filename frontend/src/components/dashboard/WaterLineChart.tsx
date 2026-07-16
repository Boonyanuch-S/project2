import {
    ResponsiveContainer,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const history = [

{day:"12 Jun",A:80,B:60},

{day:"13 Jun",A:82,B:62},

{day:"14 Jun",A:81,B:55},

{day:"15 Jun",A:76,B:48},

{day:"16 Jun",A:74,B:45},

{day:"17 Jun",A:81,B:60},

{day:"18 Jun",A:83,B:52},

];

export default function WaterLineChart(){

return(

<div className="bg-white rounded-xl shadow-sm p-5">

<h2 className="font-bold mb-4">

Water History

</h2>

<ResponsiveContainer
width="100%"
height={300}
>

<LineChart
data={history}
>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="A"
stroke="#22c55e"
strokeWidth={3}
/>

<Line
dataKey="B"
stroke="#2563eb"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

)

}