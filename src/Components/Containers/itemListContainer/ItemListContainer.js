import React, { useEffect, useState } from "react";
import { products } from "../../../assets/productos";
import { ItemList } from "../ItemList"
import { customFetch } from "../../customFetch";
import { Spinner } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {

    const [listProducts, setlistProducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        customFetch(products)
        .then(res => {
                setloading(false)
                setlistProducts(res)
            })
    }, [])
    console.log(listProducts)
    return(
        <>
        <h1>{greeting}</h1>
        {
        loading ?
            <Spinner />
        :
            <ItemList listProducts={listProducts} />
        }       
        </>
    )
}

export default ItemListContainer