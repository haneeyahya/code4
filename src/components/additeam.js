import React  from 'react';
import './additeam.css'



const Add = ()=> {
 return (

     <div className="A"> <form  className="B"  name="itam info" action="" method="post" target="_blank">
           
         <fieldset className="C"> 
         <legend className="D">Add iteam</legend>
         
       
           <label>Iteam Desc</label> 
           <input type="text" name="itemDesc" value="" id="1"/>
           <br></br>
           <label>Iteam Price</label> 
           <input type="number" name="itemPrice" value="" id="2"/>
           <br></br>
           <label>Iteam Image</label> 
           <input type="img" name="itemImage" value="" id="3"></input>
           
           
           <br></br>
           <br></br>
            <input type="submit"  value="Send information" onClick= ""/>

        </fieldset>
        </form> 
    </div>
   
   ) 
    }


    export  default Add ;
           
            
       
         
           // <!--<input type="button" value="Submit" onclick="location.href='page2.html'" target="_blank"> -->
            