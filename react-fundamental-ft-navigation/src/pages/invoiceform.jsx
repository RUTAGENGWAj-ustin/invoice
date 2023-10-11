import React from "react";
import { useState } from "react";
import involist from "./data";

const Invioce = () =>{
         
          const [street_address, setStreet_address] = useState('');
          const [city, setCity] = useState('');
          const [postcode, setPostcode] = useState('');
          const [country, setStCountry] = useState('');
          const [client_name, setClient_name] = useState('');
          const [client_email, setClient_email] = useState('');
          const [client_street_address, setClient_street_address] = useState('');
          const [payment_terms, setPayment_terms] = useState('Today');
          const [invoice_date, setInvoice_date] = useState('');
          const [client_county,setClient_country] = useState('');
          const [client_post_code,setClient_post_code] = useState('');
          const [client_city,setClient_city] = useState('');
          const [item_Name,setItem_Name] = useState('');
          const [qty,setQty]= useState('');
          const [price,setPrice] = useState('');
          let [id,setId] = useState(String(involist.length));

          const[addInvoice,setAddInvoice]=useState([]);
          //const [is_Pending,setIs_pending]= useState(false);
          //const [is_paid,setIs_paid] = useState(false);
          const [total,setTotal] = useState(0);
          function calculate_total(){
            setTotal(qty*price);
          }
         
         
        const Add_item  = (e) => {
          
          e.preventDefault();
          
          const item = {id,street_address, city,postcode,country,client_name,client_email,client_street_address,payment_terms,
          invoice_date,client_county,client_post_code,client_city,item_Name,};

        if (item==="") {
          return(
            <div>
              <h1>add all filds</h1>
            </div>
          )
  
        }else{
          setId = String(involist.length);
          involist.push(item);
          // let invoice = involist;
          // setAddInvoice([...addInvoice,item]);
         
          // // invoice.push(item);
          console.log(involist);
          localStorage.setItem("data",involist);  
          // console.log(addInvoice);
          alert('Invoice added successfull');
        }
         
          //setIs_pending(true);
        }
 

          return(
                    <section>
                 <div className="container_for">
                 <form onSubmit={Add_item}>
                    <div className="form1">
                       <div className="con1">
                                        <p className="form-title">Bill Form</p>
                                        <div className="con3">
                                       <label>Stret address</label>
                                       <input 
                                       type="text" 
                                       value={street_address}
                                       onChange={(e) => setStreet_address(e.target.value)}
                                       />
                                       </div>
                                       <div className="con2">
                                       <div className="con3">
                                              <label>City</label>
                                              <input 
                                              type="text"
                                              value={city}
                                              onChange={(e) => setCity(e.target.value)}
                                              />
                                         </div>
                                              <div className="con3">
                                                   <label>PostCode</label>
                                                  <input 
                                                  type="text" 
                                                  value={postcode}
                                                  onChange={(e) => setPostcode(e.target.value)}
                                                  />
                                             </div>
                                              <div className="con3">
                                                  <label>Country</label>
                                                  <input 
                                                  type="text"
                                                  value={country}
                                                  onChange={(e) => setStCountry(e.target.value)}
                                                  />
                                              </div>
                                        </div>
                     </div>
                     <div className="con1">
                              <p className="form-title">Bill to</p>
                              <div className="con3">
                                   <label>Clien's Name</label>
                                    <input 
                                    type="text"
                                    value={client_name}
                                    onChange={(e) => setClient_name(e.target.value)}
                                    />
                               </div>
                               <div className="con3">
                                   <label>Client's Email</label>
                                   <input 
                                   type="text"
                                   value={client_email}
                                   onChange={(e) => setClient_email(e.target.value)}
                                   />
                              </div>
                               <div className="con3">
                                     <label>Street adress</label>
                                    <input 
                                    type="text"
                                    value={client_street_address}
                                    onChange={(e) => setClient_street_address(e.target.value)}
                                    /> 
                                </div>
                              <div className="con2">
                                     <div className="con3">
                                        <label>City</label>
                                        <input 
                                        type="text"
                                        value={client_city}
                                        onChange={(e) => setClient_city(e.target.value)}
                                         />
                                     </div>
                                     <div className="con3">
                                         <label>PostCode</label>
                                         <input 
                                         type="text"
                                         value={client_post_code}
                                         onChange={(e) => setClient_post_code(e.target.value)}
                                         />
                                     </div>
                                     <div className="con3">
                                         <label>Country</label>
                                         <input 
                                         type="text" 
                                         value={client_county}
                                         onChange={(e) => setClient_country(e.target.value)}
                                         />
                                   </div>
                              </div>
                    <div className="con2">
                   
                    <div className="con3-q">
                         <label>Invoice Date</label>
                          <input 
                          className="date"
                           type="date"
                           value={invoice_date}
                           onChange={(e) => setInvoice_date(e.target.value)} 
                          />
                          </div>
                         
                          <div className="con3-q">
                          <label>Payment status</label>
                          <select
                           className="date2"
                          value={payment_terms}
                          onChange={(e) => setPayment_terms(e.target.value)}
                          >
                              <option value="Paid" key="">Paid</option>
                              <option value="Pending" key="">Pending</option>
                            
                              
                          </select>
                          </div>
                          </div>
                   
                    <div className="con3">
                    <label>Project Description</label>
                    <input type="text" />
                    </div>
                    <p>Item Name</p>
                    <div className="con2">
                    <div className="con3">
                          <label>Item Name</label>
                          <input 
                          type="text"
                          value={item_Name}
                          onChange={(e) => setItem_Name(e.target.value)}
                          />
                          </div>
                          <div className="con3">
                          <label>qty</label>
                          <input 
                          type="text"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                          />
                          </div>
                          <div className="con3">
                          <label>price</label>
                           <input 
                           type="text"
                           value={price}
                          onChange={(e) => setPrice(e.target.value)}
                           />
                           </div>
                           <div className="con3">
                           <label
                           onMouseMove={calculate_total}
                           >Total</label>
                          <p>{total ||""}</p>
                          <p><i></i></p></div>

                    

                    </div>
                    <div className="buttons">
                    <button
                    onSubmit={Add_item}
                    >Add new Item</button>
                    <div className="change">
                    <button>Cancer</button>
                    <button className="save">Save change</button>
                    </div>
                    </div>



           </div>
 </div>
                 </form>

                 </div> 
                 
                 </section>  
          );
};
export default Invioce;