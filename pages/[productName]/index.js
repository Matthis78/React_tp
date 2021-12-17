import React from "react";
import {useRouter} from 'next/router'
import Header from '../../components/Header'
import Image from "next/image";


const Product = () => {
    const router = useRouter()
    const {name,acronym,logo} = router.query
        return (
            <>
                <Header/>
                Notre produit :<br/>
                {name}<br/>
                {acronym}<br/>
                {logo && <Image src={logo} alt="" width="100%" height="100%"/>}

            </>
        )

    }

export default Product
