import React from "react";
import {Routes, Route} from 'react-router-dom';
import Contador from "../basic/contadorSimples/contador";
import ListaDinamica from "../basic/listaDinamica/listaDinamica";
import TabuadaInterativa from "../basic/tabuadaInterativa/tabuadaInterativa";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<TabuadaInterativa/>} exact/>

        </Routes>
    )
}

export default Router;