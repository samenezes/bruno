var receber = document.querySelector('#tabCount');

import React from 'react'


export default function API() {
    return (
        <section>
            
            <header>
                <h1>Bem Vindo!</h1>
            </header>   

            <div>
                <table id="tabCount"></table>
            </div>

            <footer>
                <h1>Bruno Alejandro Monntero</h1>
            </footer>
        </section>
    )
}

        fetch('https://opentdb.com/api.php?amount=30&category=15')
        .then((response) => {
            return response.json()
        })
            renderizar();
    
    
    function renderizar() {
        var receber1 = ` <h1>Esta é a API</h1>`;
        
        receber.innerHTML = receber1;
    }