import React , {Component} from 'react';
import axios from 'axios'
import './options.css'


class Add extends Component{
    state={
      a: [{' itemDesc':'1','itemPrice':'1', itemImage:'1'}] }
    ;

handleChange=event=>{
    this.setState=({itemDesc:event.target.value},
    {itemPrice:event.target.value},{itemImage:event.target.value}
    );}

      handleSubmit =event=>{
          event.preventDefault();
      
      const menuIteam ={
          itemDesc:this.state.a[0].itemDesc,
         itemPrice:this.state.a[0].itemPrice,
         itemImage:this.state.a[0].itemImage

      }
    

        axios.post(`http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu`
          ,{ menuIteam })
          .then(res =>{
              console.log(res);
              console.log(res.data);
          });
             
           
         
        };
         // axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu',
          //{ "itemDesc":'sushi' ,"itemImage":"https://peasandcrayons.com/wp-content/uploads/2012/10/homemade-sushi-tutorial-recipe-peas-and-crayons-1250.jpg","itemPrice":13.0 } );
         
        
      
        
    
      

      render(){
        return(
          
              <div>
                  <form onSubmit={this.handleSubmit}>
                 <fieldset >
                 <legend>Add iteam</legend>

                   

                    
                          <label>Iteam Desc</label>
                          <input type='text' name='itemDesc' onChange={this.handleChange}></input>
                          <br></br>
                          <label>Iteam Price</label>
                        <input type='number' name='itemPrice' onChange={this.handleChange}></input>
                        <br></br>
                        <label>Iteam Image</label>
                        <input type='' name='itemImage' onChange={this.handleChange}></input>
                        <br></br>

                         <button type="submit"> Add</button>
                          
                          
                         
                          
               
                </fieldset>
                </form>


   
               </div>
        );
    }

  }


    
 
export default Add;
















   
           
            
       
         
           // <!--<input type="button" value="Submit" onclick="location.href='page2.html'" target="_blank"> -->
            