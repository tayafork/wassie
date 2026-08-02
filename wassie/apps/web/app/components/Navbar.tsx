export default function Navbar(){


return(

<nav className="flex justify-between items-center p-8">


<div className="text-2xl font-bold text-wassie">

🐸 WASSIE WORLD

</div>


<div className="flex gap-8 text-gray-300">


<span>Pet</span>

<span>Rooms</span>

<span>Mining</span>

<span>Season</span>


<button
className="
bg-wassie
text-black
px-5 py-2
rounded-xl
font-bold
">

Connect Wallet

</button>


</div>


</nav>


)

}
