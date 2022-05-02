import React from "react";

const Carta = () => {
    //desayunos
    let desayunoArray = [
        {
            nombre: "pan con huevo mas cafe",
            cantidades: "2 rebanadas de pan, 2 huevos y una taza de cafe"
        },
        {
            nombre: "avena con leche",
            cantidades: "30g de avena, 1 taza de leche y 1 cda de manjar"
        },
        {
            nombre: "yogurt con cereal",
            cantidades: "30g de cereal y tu yogurt favorito"

        }
    ]

    //almuerzos
    let almuerzoArray = [
        {
            nombre: "pizza",
            cantidades: "2 rebanadas"
        },
        {
            nombre: "fideos",
            cantidades: "1 plato"
        },
        {
            nombre: "sopa",
            cantidades: "1 tazon"

        }
    ]

    //merienda
    let meriendaArray = [
        {
            nombre: "ensalada",
            cantidades: "1 tazon"
        },
        {
            nombre: "frutas",
            cantidades: "1 paltano, 1 manzana"
        },
        {
            nombre: "papas fitas",
            cantidades: "30g"

        }
    ]

    //cena
    let cenaArray = [
        {
            nombre: "pan con queso",
            cantidades: "2 rebanadas de pan, 2 laminas de queso y una taza de cafe"
        },
        {
            nombre: "comida china",
            cantidades: "1 colacion"
        },
        {
            nombre: "sopaipillas",
            cantidades: "3 sopaipillas, 1 cup de mostaza"

        }
    ]

    let tiposDeComidaArray = ["desayuno", "almuerzo", "merienda", "cena"]
    let titular = document.getElementById("titular")
    
    const cambioHUno = () => {
        switch (titular.innerHTML) {
            case '¿que comera?': titular.innerHTML = tiposDeComidaArray[0]
                break;
            case tiposDeComidaArray[0]: titular.innerHTML = tiposDeComidaArray[1]
                break;
            case tiposDeComidaArray[1]: titular.innerHTML = tiposDeComidaArray[2]
                break;
            case tiposDeComidaArray[2]: titular.innerHTML = tiposDeComidaArray[3]
                break;
            case tiposDeComidaArray[3]: titular.innerHTML = tiposDeComidaArray[0]
                break;
        }

    }

    let comidasArray = [desayunoArray, almuerzoArray, meriendaArray, cenaArray]
    let parrafo = document.getElementById("parrafo")
    const cambioParrafo = () => {
            switch (titular.innerHTML) {
                case tiposDeComidaArray[0]: parrafo.innerHTML = `
                <h3>${comidasArray[0][0].nombre}</h3>
                <p>${comidasArray[0][0].cantidades}</p>
            `
                    break;
                case tiposDeComidaArray[1]: parrafo.innerHTML = `
                <h3>${comidasArray[1][0].nombre}</h3>
                <p>${comidasArray[1][0].cantidades}</p>
            `
                    break;
                case tiposDeComidaArray[2]: parrafo.innerHTML = `
                <h3>${comidasArray[2][0].nombre}</h3>
                <p>${comidasArray[2][0].cantidades}</p>
            `
                    break;
                case tiposDeComidaArray[3]: parrafo.innerHTML = `
                <h3>${comidasArray[3][0].nombre}</h3>
                <p>${comidasArray[3][0].cantidades}</p>
            `
                    break;
            }
        }


    return (
        <div>
            <h1 id="titular">¿que comera?</h1>
            <p id="parrafo"><strong></strong></p>
            <p></p>
            <button onClick={cambioHUno}>Comida</button>
            <button onClick={cambioParrafo}>Idea</button>
        </div>
    )
}
export default Carta 