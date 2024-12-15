import React from "react"
import { useState } from "react"
import contadorStyle from './contadorStyle.css'

export default function Contador(){
    const [contador,SetContador] = useState(0)

    const Incrementar = () =>{
        SetContador(contador+1)
    }

    const Decrementar = () =>{
        SetContador(contador-1)
    }

   
    return(
        
        <main className="count">
            <section className="countContent">
                <h1>Contador</h1>
                <p>Contador Simples com Função de diminuir e aumentar utilizando o useState do React</p>
                {/* Se o contador for 0 a cor será Preto, Se for menor que 1 Será Vermelho e Caso Contrario Será Azul */}
                <p style={{color: contador === 0 ? 'black' : (contador < 1 ? 'red' : 'blue')}}>{contador}</p>
                <div>
                    <button className="buttonSetCount" onClick={Incrementar}>Incrementar</button>
                    <button className="buttonSetCount" onClick={Decrementar}>Decrementar</button>
                </div>
            </section>
        </main>
   
    )
}