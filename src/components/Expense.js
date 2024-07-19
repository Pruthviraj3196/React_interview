import React, { useState } from 'react'

const Expense = () => {

    const[date, setDate] = useState('');
    const[input, setInput] = useState('');
    const[select, setSelect] = useState('');
    const[expenses, setExpenses] = useState([]);
    const[price, setPrice] = useState([])

    const getdate = (e) => {
        setDate(e.target.value);
    }

    const getinput = (e) => {
        setInput(e.target.value);
    }

    const getselect = (e) => {
        setSelect(e.target.value);
    }

    const getexpenses = () => {
        const newExpenses = { date, input, select};
        setExpenses([...expenses, newExpenses]);
        setPrice([...price,input]);
    }
   
    const deletes = (index) => {
        const newexpen = expenses.filter((_,exp) => exp !== index);
        setExpenses(newexpen);
    }

  return (
    <div>
        <h1>Expense Tracker</h1>
        <div className='table'>
            <input value={date} onChange={getdate} type='date' />
            <input value={input} onChange={getinput} type='number' placeholder='Please inter the Amount' />
            <select value={select} onChange={getselect}>
                 <option>Select Option</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Entertainment</option>
                <option>Others</option>
            </select>
            <button onClick={getexpenses}>Add Expense</button>
        </div>
        <div>
           <div>
               <h1>Expenses</h1>
               {
                expenses.map((expense,index) => {
                    return <div key={index}>
                        <p>{expense.date} {expense.input} {expense.select}</p>
                        <button onClick={()=> deletes(index)}>Delet</button>
                    </div>
                })
               }
           </div>
            <div>
                <h2>Summary</h2>
                {
                   
                }
            </div>
        </div>
    </div>
  )
}

export default Expense