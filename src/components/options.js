/*import React , {Component} from 'react';
import axios from 'axios'
import './options.css'
import { userInfo } from 'os';
import { stringify } from 'querystring';
var sum=0;

class Options extends Component{
    state={
        iteams:[],
        pell:[],
      }
      

      componentDidMount() {
        axios.get(`http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu`)
          .then(res => {
            const iteams = res.data;
            this.setState({ iteams });
           
          })
      }  
      
      deliteams =(index ,i)=>{
        const iteams=Object.assign([],this.state.iteams);
        var a= iteams.splice(index,1);
        
        this.setState({iteams:iteams});
        this.state.pell.push(a);
        sum =sum + (a[0].itemPrice);
        console.log(this.state.pell);
       
       console.log(sum);
        
        
        
      }

      render(){
        return(
          
              <div>
                 <fieldset class="tab">
                 <legend>menu</legend>

                    <table id="table1">

                    <tr>
                          <th>itemDesc</th>
                          <th>itemPrice</th>
                          <th>itemImage</th>
                          <th >select</th>
                        </tr>
                        { this.state.iteams.map((iteam,index) =>
                        <tr >
                            <td >{iteam.itemDesc}</td>
                            <td> {iteam.itemPrice}</td>
                            <td>{iteam.itemImage}</td>
                            <input type="Radio" onClick={this.deliteams} ></input>
                          </tr>)}
                </table>
                </fieldset>
              


               

                <fieldset  class="tab1">
                  <legend>Bill</legend>
                  <table id="table2">
                  <tr>
                          <th>itemDesc</th>
                          <th>itemPrice</th>
                          <th>itemImage</th>
                        </tr>
                

                 { this.state.pell.map(( a,index ) =>
                 
                <tr  >
                  
                    <td >{a[0].itemDesc}</td>
                    <td > {a[0].itemPrice} </td>
                    <td>{a[0].itemImage}</td>
                    
                  </tr>)}
                  </table>
                </fieldset>
                
                
               


                
                  
                   
    
   
               </div>
        );
      }

    }
 
export default Options;*/










/*


import React , {Component} from 'react';
import axios from 'axios'
import './options.css'
import { userInfo } from 'os';
import { stringify } from 'querystring';
var sum=0;

class Options extends Component{
    state={
        iteams:[],
        pell:[],
      }
      

      componentDidMount() {
        axios.get(`http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu`)
          .then(res => {
            const iteams = res.data;
            this.setState({ iteams });
           
          })
      }  
      
      deliteams =(index ,i)=>{
        const iteams=Object.assign([],this.state.iteams);
        var a= iteams.splice(index,1);
        
        this.setState({iteams:iteams});
        this.state.pell.push(a);
        sum =sum + (a[0].itemPrice);
        console.log(this.state.pell);
       
       console.log(sum);
        
        
        
      }

      render(){
        return(
          
              <div>
                 <fieldset class="tab">
                 <legend>Menu</legend>

                    <table id="table1">

                    <tr>
                          <th>itemDesc</th>
                          <th>itemPrice</th>
                          <th>itemImage</th>
                          <th >select</th>
                        </tr>
                        { this.state.iteams.map((iteam,index) =>
                        <tr >
                            <td >{iteam.itemDesc}</td>
                            <td> {iteam.itemPrice}</td>
                            <td><img src={iteam.itemImage} height="90px" width="80px"></img></td>
                            <input type="Radio" onClick={this.deliteams} ></input>
                          </tr>)}
                </table>
                </fieldset>
              


               

                <fieldset  class="tab1">
                  <legend>Bill</legend>
                  <table id="table2">
                  <tr>
                          <th>itemDesc</th>
                          <th>itemPrice</th>
                          <th>itemImage</th>
                        </tr>
                

                 { this.state.pell.map(( a,index ) =>
                 
                <tr  >
                  
                    <td >{a[0].itemDesc}</td>
                    <td > {a[0].itemPrice} </td>
                    <td><img src={a[0].itemImage} height="60px" width="60px"></img></td>

                    
                  </tr>)}
                  </table>
                  <hr/><br/>
                  <label>Total : {sum}</label>
                </fieldset>
                
                
               


                
                  
                   
    
   
               </div>
        );
      }

    }
 
export default Options;
*/
































import React , {Component} from 'react';
import axios from 'axios'
import './options.css'
import { userInfo } from 'os';
import { stringify } from 'querystring';
var sum=0;

class Options extends Component{
    state={
        iteams:[],
        pell:[],
      }
      

      componentDidMount() {
        axios.get(`http://94.127.209.194:3333/AudioGramServices/webapi/myresource/menu`)
          .then(res => {
            const iteams = res.data;
            this.setState({ iteams });
            
           
          })
         // axios.post('http://94.127.209.194:3333/AudioGramServices/webapi/myresource/postmenu',
          //{ "itemDesc":'sushi' ,"itemImage":"https://peasandcrayons.com/wp-content/uploads/2012/10/homemade-sushi-tutorial-recipe-peas-and-crayons-1250.jpg","itemPrice":13.0 } );
         
      }  
      
        
      
      deliteams =(index ,i)=>{
        const iteams=Object.assign([],this.state.iteams);
        var a= iteams.splice(index,1);
        
        this.setState({iteams:iteams});
        this.state.pell.push(a);
        sum =sum + (a[0].itemPrice);
        console.log(this.state.pell);
       
       console.log(sum);
        
        
        
      }

      render(){
        return(
          
              <div>
                 <fieldset class="tab">
                 <legend>Menu</legend>

                    <table id="table1">

                    <tr>
                          <th>itemDesc</th>
                          <th>itemPrice</th>
                          <th>itemImage</th>
                          <th >select</th>
                        </tr>
                        { this.state.iteams.map((iteam,index) =>
                        <tr >
                            <td >{iteam.itemDesc}</td>
                            <td> {iteam.itemPrice}</td>
                            <td><img src={iteam.itemImage} height="90px" width="80px"></img></td>
                            <input type="Radio" onClick={this.deliteams} ></input>
                          </tr>)}
                </table>
                </fieldset>
              


               

                <fieldset  class="tab1">
                  <legend>Bill</legend>
                  <table id="table2">
                  <tr>
                          <th>itemDesc</th>
                          <th>itemPrice</th>
                          <th>itemImage</th>
                        </tr>
                

                 { this.state.pell.map(( a,index ) =>
                 
                <tr  >
                  
                    <td >{a[0].itemDesc}</td>
                    <td > {a[0].itemPrice} </td>
                    <td><img src={a[0].itemImage} height="60px" width="60px"></img></td>

                    
                  </tr>)}
                  </table>
                  <hr/><br/>
                  <label>Total : {sum}</label>
                </fieldset>
                
                
               


                
                  
                   
    
   
               </div>
        );
      }

    }
 
export default Options;
















































  