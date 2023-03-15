'use strict';

//Visualizzare a fianco ad ogni item ha una “x”: 
//cliccando su di essa, il todo viene rimosso dalla lista.

// Predisporre un campo di input testuale e un pulsante “aggiungi”: 
// cliccando sul pulsante, il testo digitato viene letto e utilizzato 
// per creare un nuovo todo, che quindi viene aggiunto alla lista dei 
// todo esistenti.

const { createApp } = Vue;

createApp({
    data() {
        return {
            myInput: {
                text:'',
                done: false
            },
            xOnToDo: '',
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
    },
    methods: {
        removeToDo() {
            console.log(this.toDoList)
        },
        addToDo() {
            this.toDoList.push(this.myInput);
        }
    }
}).mount('#app');