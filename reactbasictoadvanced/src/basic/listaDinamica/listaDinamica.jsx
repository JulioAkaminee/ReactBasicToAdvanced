import React, { useState } from "react";

export default function ListaDinamica() {
    const [listaDinamica, SetListaDinamica] = useState([]);
    const [inputValue, SetInputValue] = useState("");

    function inputText(event) {
        SetInputValue(event.target.value);
    }

    function addToList() {
        const newItem = inputValue;
        if (newItem.trim() !== "") { // Evita adicionar itens vazios
            SetListaDinamica([...listaDinamica, newItem]); // Adiciona ao array
            SetInputValue(""); // Limpa o campo de input
        }
    }

    return (
        <main>
            <h1>Está é uma lista Dinâmica</h1>
            <input
                type="text"
                name="inputLista"
                className="inputLista"
                value={inputValue} // Controla o input pelo estado
                onChange={inputText}
            />
            <button onClick={addToList}>Adicionar à Lista</button>
            <ul>
                {listaDinamica.map((item, index) => (
                    <li key={index}>{item}</li> // Renderiza cada item como <li>
                ))}
            </ul>
        </main>
    );
}
