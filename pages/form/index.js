import React, {useState, useEffect} from 'react';

export default function Form(){
    const [coinName, setCoinName] = useState('')
    const [acronym, setAcronym] = useState('')
    const [logo, setLogo] = useState('')

    const createProduct = async (e) => {
        e.preventDefault()

        await fetch("/api/product", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                coinName: coinName,
                acronym: acronym,
                logo: logo,
                price : 'Test'
            })
        })
    }

    return(
        <div>

            <form onSubmit={createProduct}>
                <div>
                    <div>
                        <label htmlFor="">Coin name</label>
                        <input type="text" onChange={(e) => setCoinName(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="">Coin acronym</label>
                        <input type="text" onChange={(e) => setAcronym(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="">Coin logo</label>
                        <input type="text" onChange={(e) => setLogo(e.target.value)} required/>
                    </div>

                </div>

                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                </button>
            </form>
        </div>
    )
}