import {RadialBarChart,RadialBar,PolarAngleAxis} from "recharts"

function LivabilityRadial({data}){

if(!data) return(

<div className="glass p-4">
Select location
</div>

)

const chartData=[
{
name:"score",
value:data.livability*10
}
]

return(

<div className="glass p-4 flex flex-col items-center">

<h2 className="mb-2">Livability</h2>

<RadialBarChart
width={180}
height={180}
innerRadius="70%"
outerRadius="100%"
data={chartData}
startAngle={180}
endAngle={0}
>

<PolarAngleAxis type="number" domain={[0,100]} angleAxisId={0} tick={false}/>

<RadialBar
background
dataKey="value"
fill="#14b8a6"
/>

</RadialBarChart>

<p className="text-xl font-bold">
{data.livability}/10
</p>

</div>

)

}

export default LivabilityRadial