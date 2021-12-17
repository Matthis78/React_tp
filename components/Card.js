import react from 'react'
import Image from 'next/image'

export default function Card(props){

    const displayProps = () => {
        console.log(props)
    }

    return(
        <div>
            <p>{props.coin_name}</p>
            <p>{props.acronym}</p>
            {props.logo && <Image src={props.logo} alt="" width="100%" height="100%"/>}
            <button onClick={() => displayProps(props)}>Display props (console)</button>
        </div>
    )
}