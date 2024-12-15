import React from "react";
import {Routes, Route} from 'react-router-dom';
import Contador from "../basic/contadorSimples/contador";
import ListaDinamica from "../basic/listaDinamica/listaDinamica";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<ListaDinamica/>} exact/>

        </Routes>
    )
}

export default Router;