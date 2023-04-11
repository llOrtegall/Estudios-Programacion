import React, { Fragment, useState } from "react";

export const Contador = () => {
    const [numero, setNumero] = useState(0); // mantiene el estado del numero de programa
    const Aumentar = () => setNumero(numero + 1);
    const Reducir = () =>  setNumero(numero - 1);
    return (
        <Fragment>
            <h2>Cantidad Del Contador: {numero}</h2>
            <button onClick={Aumentar}> Aumentar </button>
            <button onClick={Reducir}> Reducir </button>
        </Fragment>
    )
}
export default Contador