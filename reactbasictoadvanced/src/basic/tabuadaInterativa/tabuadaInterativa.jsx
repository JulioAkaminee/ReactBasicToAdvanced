import React, { useState } from "react";

export default function TabuadaInterativa() {
    const [inputValue, SetInputValue] = useState(0); // Estado para armazenar o valor do input
    const [tabuada, setTabuada] = useState([]); // Estado para armazenar a tabuada gerada

    function inputText(event) {
        SetInputValue(event.target.value); // Atualiza o valor do input no estado
    }       

    function Loop() {
        const numeros = [];
        for (var i = 1; i <= 10; i++) { // Gerar a tabuada do 1 ao 10
            numeros.push(<p key={i}>{inputValue} x {i} = {inputValue * i}</p>);
        }
        setTabuada(numeros); // Atualiza o estado da tabuada
    }

    return (
        <main>
            <h1>Digite um número e saiba a tabuada do 1 a 10</h1>
            <input 
                type="number" 
                onChange={inputText} 
                maxLength={10} 
                minLength={0} 
            />
            <button onClick={Loop}>Calcular Tabuada</button>
            <div>{tabuada}</div> {/* Exibe a tabuada gerada */}
        </main>
    );
}
