'use strict';

//Visualizzare a fianco ad ogni item ha una “x”: 
//cliccando su di essa, il todo viene rimosso dalla lista.

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
                    done: true
                },
                {
                    text: 'Andare in palestra',
                    done: false
                }
            ]
        }
    }
}).mount('#app');