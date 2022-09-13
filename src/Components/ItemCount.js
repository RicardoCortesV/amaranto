import React, {useState} from "react";

const ItemCount = ({ initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => contador < stock && setContador(contador +1)
    const restar = () => contador > initial && setContador(contador -1)

    return(
        <>
        <div>ItemCount</div>
        <h1>{contador}</h1>
        <button disabled={contador === stock} onClick={sumar}>+</button>
        <button disabled={contador === initial} onClick={restar}>- </button>
        <button>Agregar al carrito</button>

        </>
    )
}

export default ItemCount  