import {ROOMS}
from "@/data/rooms";


export default function RoomPreview(){


return(

<section className="grid md:grid-cols-5 gap-5">


{
ROOMS.map(room=>(


<div
key={room.name}
className="panel p-5"
>


<div className="text-4xl">

🏠

</div>


<h3 className="mt-3">

{room.name}

</h3>


<p className="text-wassie">

{room.bonus}

</p>


<p>

{room.price}

</p>


</div>


))


}

</section>

)

}
