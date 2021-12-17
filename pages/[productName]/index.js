import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'


const Product = () => {
    const router = useRouter()
    const {productName} = router.query
    const { id } = router.query

        return (
            <>
                {router.query.productName}
            </>
        )
    }

export default Product
