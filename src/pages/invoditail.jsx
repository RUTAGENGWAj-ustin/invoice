import React from "react";
import {useParams} from "react-router-dom";
import Invioce from "./invoiceform";
import involist from "./data";



const InvoDitail = () =>{
         
          const {id} = useParams();
          const product = involist.find((product) => product.id ===id);
          const {street_address, city,postcode,country,client_name,client_email,client_street_address,payment_terms,invoice_date,client_county,client_post_code,client_city,item_Name,qty,price,total} = product;
          return(
                    <div className="f">
                             
                              
                         
                             
                    
                    
                     
                  
                             <div className="receipt__container">
                    
                        <div className="form1">
                           <div className="con1">
                           <div className="dit1">
                           <div className="go">
                       
                              <p className="go_back ">go back</p>
                              </div>
                           </div>
                           <div className="status-bar">
                           <div className="status1">
                              <label>stutus</label>
                              <h3 className="h3"style={{color:payment_terms==='paid'? "green":"yellow",}}>{payment_terms}</h3>
                              </div>
                          <div className="status1">
                         
                              <button className="edit">Edit</button>
                              <button className="delete">Delete</button> 
                               <button className="mark_as_paid">mark as paid</button>
                               </div>
                           </div >
                                           
                                            <div className="dit1-address">
                                             <div className="info__top-container">
                                            <div className="dit2">
                                             <h3 className="as">qwerf{id}</h3>
                                             <p className="as">graphic design</p>
                                             
                                            </div>
                                             <div className="dit2">
                                          
                                           <h3 className="h33">{street_address}</h3>
                                           <h3 className="h33">{city}</h3>
                                           <h3 className="h33">{postcode}</h3>
                                            <h3 className="h33">{country}</h3>
                                                      </div> 
                                                      </div>
                                          <div className="info__bottom-container">
                                            <div className="dit2">
                                            <label className="info__text">Invoice Date</label>
                                             <h3 className="info__title">{invoice_date}</h3>
                                            </div>
                                             <div className="dit2">
                                             <p>Bill to</p>
                                            
                                             <h3 className="info__title2">{client_name}</h3>
                                         <h3>{client_street_address}</h3>
                                            <h3>{client_city}</h3>
                                             <h3>{client_county}</h3>
                                             <h3>{client_post_code}</h3>
                                                      </div> 
                                                      <div className="dit2">
                                             <p>Send to</p>
                                            
                                       <h3 className="info__title2">{client_email}</h3>
                                                      </div> 
                                                      </div>
                                         
                         
                                 
                                  
                              
                        
                      
                        <div className="items">
                        <div className="con3 n">
                              <label>Item Name</label>
                             <h3>{item_Name}</h3>
                              </div>
                              <div className="con3 n">
                              <label>qty</label>
                              <h3>{qty}</h3>
                             
                              </div>
                              <div className="con3 n">
                              <label>price</label>
                              <h3>{price}</h3>
                              
                               </div>
                               <div className="con3 n">
                               <label
                              
                               >Total</label>
                              <h3>{total}</h3>
                              </div>
    
                        
                             
                        </div>
                        </div>
                       
    
    
    
               </div>
     </div>
    
                     </div>  
                     
                   
                  </div>     
          );
}
export default InvoDitail;