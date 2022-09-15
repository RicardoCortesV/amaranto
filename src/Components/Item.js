import { Button } from "@chakra-ui/react";

const Item = ({ product }) => {

    return(
        <> 
        <h3>{product.product}</h3>
        <img src={product.image} width="180" height="180"/>
        <p>{product.price}</p>
        <Button>Ver detalle</Button>
        </>
    )
}

export { Item }