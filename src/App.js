import React, { useState } from 'react'
// import './App.css';

const options = [
  {
    label: "Apple",
    Value: "apple",
  },
  {
    label: "Mango",
    Value: "mango",
  },
  {
    label: "Banana",
    Value: "banana",
  },
  {
    label: "Pineapple",
    Value: "pineapple",
  },
]
function App() {

  const [inputList, setInputList] = useState([{selectItem:'', selectQuantity:''}]);
  const handleaddclick = () => { 
    let users = {
      id: Date.now(),
      

    }
    setInputList([...inputList,{selectItem:'', selectQuantity:''}])
  }

  const handleinputchange=(e, index) =>{
    const {item,  quantity}= e.target;
    const list=[...inputList];
    list[index][item] = quantity;
    setInputList(list);

  }

  return (
    <div>
    <h1>Billing Form</h1>
   <label htmlFor="">Customer Name</label> 
   <input type = "text" placeholder="Customer name here" ></input>

   <hr/>
   <hr/>
{ 
inputList.map( (x,i) => {
  return(
   <div>
   <label htmlFor="">Select Product</label>
    <select name="selectItem" onChange={e=>handleinputchange(e,i) }>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
    <label htmlFor="">Select Product</label>
    <input type='number' name="selectQuantity" placeholder = "Quantity" onChange={e=>handleinputchange(e,i)}></input>
    {

    }
    { inputList.length-1===i &&
    <button onClick= { handleaddclick}>Add More Items</button>
}
    </div>
  );
})}
    <hr/>
    <hr/>
   <button>Create Bill</button>
   <div className='Table'>
      <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
      </thead>
      <tbody>
        {}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>
      </tbody>
      </table>
   </div>


    
    </div>
  )
}

export default App;
