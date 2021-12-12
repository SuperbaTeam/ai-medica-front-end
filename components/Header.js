import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
export default function Header() {

    let login = true
    const router = useRouter();

    const handleClick = (e, path) => {
      if (path === "/pages/result") {
        console.log("I clicked on the result Page");
        router.push('../pages/result')
      }
      if (path === "/pages/discover") {
        console.log("I clicked on the discover Page");
        router.push('../pages/discover')
      }
    };

   

    return (



        <header style={{
            padding: '2px 1px', overflow: 'hidden', borderRadius: '4px', lineHeight: '25px', padding: '12px'
            , float: 'left', top: '0', position: 'absolute',
            width: '1550px', backgroundColor: "#46b69b"
        }}>


            <button style={{ float: "left", marginRight: "200px", width: "100px", backgroundColor: "#edfc44" }}> Logo</button>


            <button style={{ float: "left", marginRight: "10px", width: "80px", backgroundColor: "#edfc44", }}><i style={{ marginRight: "10px", }} class="fa fa-home"></i>Home</button>




 <Link href='../' >
 {login && <button style={{ float: "left", marginRight: "10px", width: "70px", backgroundColor: "#edfc44" }}

 onClick={(e) => handleClick(e, "/pages/discover")}> Discover </button>}
                    
                    </Link>

          


            {login ? <button style={{ float: "left", marginRight: "10px", width: "100px", backgroundColor: "#edfc44" }} > Logout</button> :
                <> <button style={{ float: "right", marginRight: "100px", width: "70px", backgroundColor: "#edfc44" }}  >Signup</button>
                    <button style={{ float: "right", marginRight: "50px", width: "70px", backgroundColor: "#edfc44" }}>Login</button>  </>}





            <button style={{ float: "left", marginRight: "10px", width: "100px", backgroundColor: "#edfc44" }} >Help Others</button>


            

                <Link href='../' >
                {login &&    <button style={{
                float: "right", marginRight: "50px", width: "80px", backgroundColor: "#edfc44",

            }} onClick={(e) => handleClick(e, "/pages/result")} > Result </button>}
                    
                    </Link>

           

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        </header>


    );
}



