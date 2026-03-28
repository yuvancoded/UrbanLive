import {CloudIcon} from "@heroicons/react/24/solid"

function WeatherCard({data}){

return(

<div className="glass p-4">

<div className="flex items-center gap-2 mb-2">

<CloudIcon className="w-6 text-blue-400"/>

<h2 className="font-semibold">Weather</h2>

</div>

{data ?

<div>

<p className="text-3xl font-bold">
{data.weather.temperature}°C
</p>

<p className="opacity-70">
{data.weather.description}
</p>

</div>

:

<p>Select location</p>

}

</div>

)

}

export default WeatherCard