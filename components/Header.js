import React, { Component } from 'react';
import Link from 'next/link'
import {useAuth} from '../contexts/auth'
export default function Header() {
    const { user, login,logout } = useAuth()
    
   
    return (


        <header style={{
            padding: '2px 1px', overflow: 'hidden', borderRadius: '4px', lineHeight: '25px', padding: '12px'
            , float: 'left', top: '0', position: 'absolute',
            width: '1550px', backgroundColor: "#46b69b"
        }}>


            <button style={{ float: "left", marginRight: "200px", width: "100px", backgroundColor: "#edfc44" }}> Logo</button>

            <button style={{ float: "left", marginRight: "10px", width: "80px", backgroundColor: "#edfc44", }}>
              <i style={{ marginRight: "10px", }} class="fa fa-home"></i><Link href='../' >Home</Link></button>


       <button style={{ float: "left", marginRight: "200px", width: "100px", backgroundColor: "#edfc44" }}> 
       <Link href='../aboutus' >About us </Link></button>




 {login && <button style={{ float: "left", marginRight: "10px", width: "70px", backgroundColor: "#edfc44" }}

>  <Link href='../discover' >Discover</Link> </button>}
                    
                  
          

            {user ? <button onClick={()=>{logout()}} style={{ float: "left", marginRight: "10px", width: "100px", backgroundColor: "#edfc44" }} > Logout</button> :
                <> <button style={{ float: "right", marginRight: "100px", width: "70px", backgroundColor: "#edfc44" }}  >Signup</button>
                    <button onClick={()=>{login('test','test')}} style={{ float: "right", marginRight: "50px", width: "70px", backgroundColor: "#edfc44" }}>Login</button>  </>}




 <button style={{ float: "left", marginRight: "10px", width: "100px", backgroundColor: "#edfc44" }} ><Link href='../helpothers' >Help Others</Link></button>

  
               
            
                {login &&    <button style={{
                float: "right", marginRight: "50px", width: "80px", backgroundColor: "#edfc44"}} >  <Link href='../result' >Result</Link>  </button>}
 
           

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

        </header>


    );
}
