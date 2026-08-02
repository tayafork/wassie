export default function FeatureCard({

title,
text

}:{

title:string;

text:string

}){


return(

<div className="panel p-6">

<h3 className="
text-xl
text-wassie
">

{title}

</h3>


<p className="mt-3 text-gray-400">

{text}

</p>


</div>

)

}
