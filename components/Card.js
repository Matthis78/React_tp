import react from 'react'
import Image from 'next/image'
import Link from "next/link";

export default function Card(props) {


    const displayProps = () => {
        console.log(props)
    }


    return (
        <div>
            <p>{props.coin_name}</p>
            <p>{props.acronym}</p>
            {props.logo && <Image src={props.logo} alt="" width="100%" height="100%"/>}
            <button onClick={() => displayProps(props)}>Display props (console)</button><br/><br/>
            <Link href={{
                pathname: '/[name]',
                query: { name: props.coin_name },
            }} >
                <a>Voir le Coin</a>
            </Link>
        </div>
    )
}