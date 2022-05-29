{
    // *  Con El bucle for...of
    const gatos = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

    for (let gato of gatos) {
        console.log(gato);
    }

}





{
    // *Con  map

    function mayusculas(string) {
        return string.toUpperCase();
    }
    const gatos = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

    const gatosMayusculas = gatos.map(mayusculas);

    console.log(gatosMayusculas);
}




{
    //  * Con Filter

    const gatos = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

    function gatosConL(gatoL) {
        return gatoL.startsWith('L');
    }

    const gatosFiltradosComienzanConL = gatos.filter(gatosConL);

    console.log(gatosFiltradosComienzanConL);
}





{
    //* Con  mapa () y filtro () por separados

    // const gatos = ['leopard', 'serval', 'gaguar', 'tiger', 'caracal', 'lion'];
    const gatos = ['leopard', 'serval', 'jaguar', 'tiger', 'caracal', 'lion'];

    // function gatoConL(gatosL) {
    //     return gatosL.toUpperCase();
    // }
    const todoGatos = gatos.map((gatosMayuscula) => {
        return gatosMayuscula.toUpperCase();

    });

    console.log(todoGatos);

    const gatosConL = todoGatos.filter((gatoL,) => {
        return gatoL.startsWith('L');
    });

    console.log(gatosConL);
}




{
    //* Con filtro () primero  y  mapa() despues  en una sola funcion

    const gatos = ['leopard', 'serval', 'jaguar', 'tiger', 'caracal', 'lion'];

    const gatosSolo_l = gatos.filter((gatoL) => {
        return gatoL.startsWith('l');
    }).map((gatosEnMayusculas) => {
        return gatosEnMayusculas.toUpperCase();

    });

    console.log(gatosSolo_l);
}




{
    //* Con mapa() Primero   y   filtro ()  despues  en una sola funcion

    const gatos = ['leopard', 'serval', 'jaguar', 'tiger', 'caracal', 'lion'];


    const gatosSolo_l = gatos.map((gatosEnMayusculas) => {
        return gatosEnMayusculas.toUpperCase();
    }).filter((gatoL) => {
        return gatoL.startsWith('L');
    });

    console.log(gatosSolo_l);
}