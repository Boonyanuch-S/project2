import {
    AlertTriangle,
    Info,
    Droplets
} from "lucide-react";

const data = [

{
icon:<AlertTriangle color="red"/>,
title:"Water Level ต่ำกว่าปกติ",
time:"10:25"
},

{
icon:<Droplets color="orange"/>,
title:"เติมน้ำแล้ว",
time:"10:20"
},

{
icon:<Info color="blue"/>,
title:"System Online",
time:"09:50"
}

];

export default function NotificationList(){

return(

<div className="bg-white rounded-xl shadow-sm">

<div className="flex justify-between p-5 border-b">

<h2 className="font-bold">

Latest Notifications

</h2>

<button className="text-blue-500">

View All

</button>

</div>

<div>

{data.map((item,index)=>(

<div
key={index}
className="flex justify-between items-center p-4 border-b hover:bg-gray-50"
>

<div className="flex gap-3">

{item.icon}

<div>

<div className="font-medium">

{item.title}

</div>

</div>

</div>

<div className="text-gray-400">

{item.time}

</div>

</div>

))}

</div>

</div>

)

}