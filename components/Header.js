import React from "react";
import Link from "next/link";

export default function header(){
    return(
        <div className="navbar">
            <Link href={{
                pathname: '/'
            }} >
                <button>
                    Marketplace
                </button>
            </Link>
            <h1>Hello</h1>
            <button>Login</button>
        </div>
    )
}