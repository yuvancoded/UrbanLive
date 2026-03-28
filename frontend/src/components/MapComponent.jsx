import {MapContainer,TileLayer,useMapEvents,ZoomControl} from "react-leaflet"
import API from "../api/api"
import "leaflet/dist/leaflet.css"

function MapClickHandler({setData}){

useMapEvents({

click(e){

API.post("/location-data",{

lat:e.latlng.lat,
lon:e.latlng.lng

}).then(res=>setData(res.data))

}

})

return null

}

function MapComponent({setData}){

return(

<MapContainer
center={[13.08,80.27]}
zoom={12}
className="h-[420px] rounded-xl"
zoomControl={false}
>

<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

<ZoomControl position="bottomright"/>

<MapClickHandler setData={setData}/>

</MapContainer>

)

}

export default MapComponent