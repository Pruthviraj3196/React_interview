import React, { useState } from 'react'

const EmailTemplate = () => {


    const[name,setName] = useState("");
    const[company, setComapny] = useState('');
    const[effective,setEffective] = useState('');
    const[lastdate,setLastdate] = useState('');

    const getvalue = (e) => {
        setName(e.target.value);
    }

    const getcomp = (e) => {
        setComapny(e.target.value)
    }

    const getdate = (e) => {
        setEffective(e.target.value)
    }

    const getlastdate = (e) => {
        setLastdate(e.target.value)
    }

  return (
    <div>
        <h1>Email Template</h1>
        <div>
            <label>Name</label>
            <input onChange={getvalue} type='text' />
            <label>Comapny Name</label>
            <input onChange={getcomp} type='text' />
            <label>Effective date</label>
            <input onChange={getdate} type='date' />
            <label>Last Date</label>
            <input onChange={getlastdate} type='date' />
        </div>
        <hr></hr>
        <div>
            <p>
                Hi,<br></br>

                Please accept this email as my formal resignation from {company}. I have taken this decision as I have got a different/better work opportunity and would like to pursue my career in the same.<br></br>

                Request you to consider my letter of resignation effective from {effective}. I understand that as per the policy I am required to serve a notice period of 60 days and my last working day accordingly shall be {lastdate}.<br></br>

                I would request you to consider if an early release is possible. I am grateful to {company} and looking forward to your support.<br></br>


                Thanks and Regards,<br></br>
                {name}
            </p>
        </div>
    </div>
  )
}

export default EmailTemplate