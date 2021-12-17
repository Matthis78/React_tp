import React from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'


const Product = () => {
    const router = useRouter()
    const {productName} = router.query
    const { id } = router.query

        return (
            <>
                <h1>Product: {productName}</h1>
                <ul>
                    <li>
                        <Link href="/pages/[id]/[productName]" as={`/pages/${id}/first-product`}>
                            <a>First product</a>
                        </Link>
                    </li>
                </ul>
            </>
        )
    }

export default Product
