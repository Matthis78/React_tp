import React from "react";
import {useRouter} from 'next/router'


const Product = () => {
    const router = useRouter()
        return (
            <>
                {router.query.productName}
            </>
        )
    }

export default Product
