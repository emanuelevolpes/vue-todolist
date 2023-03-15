'use strict';

// Stampare all’interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const { createApp } = Vue;

createApp({
    data() {
        return {
            toDoList: [
                {
                    text: 'Rifare documentazione Vue',
                    done: true
                },
                {
                    text: 'Comprare il pane',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: false
                }
            ]
        }
    }
}).mount('#app');