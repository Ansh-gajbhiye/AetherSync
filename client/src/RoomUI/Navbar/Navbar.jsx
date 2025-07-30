import { useState } from "react";


function Navbar() {
   
    return (
        <div>
            <div className="text-2xl font-serif ">
                AetherSync
            </div>
           <ul>
            {["quest" , "devloper" , "support" ,"blog"].map(label =>{
                return <li key={label}>{label}</li>
            })}
              
           </ul>
        </div>
    );
}

export default Navbar;