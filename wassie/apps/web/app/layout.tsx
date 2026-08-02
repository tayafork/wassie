import "./globals.css";


export const metadata={

title:"Wassie World",

description:
"Trade. Feed. Level Up. Mine."

};


export default function RootLayout({

children

}:{

children:React.ReactNode

}){


return(

<html lang="en">

<body>

{children}

</body>

</html>

)

}
