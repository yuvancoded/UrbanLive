import {ExclamationTriangleIcon} from "@heroicons/react/24/solid"

function AQICard({data}){

return(

<div className="glass p-4">

<div className="flex items-center gap-2 mb-2">

<ExclamationTriangleIcon className="w-6 text-yellow-400"/>

<h2 className="font-semibold">AQI</h2>

</div>

{data ?

<p className="text-3xl font-bold">
{data.aqi}
</p>

:

<p>Select location</p>

}

</div>

)

}

export default AQICard