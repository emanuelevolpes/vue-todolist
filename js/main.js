'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            myInput: '',   
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
        removeToDo(index) {
            this.toDoList.splice(index, 1);
        },
        addToDo() {
            this.toDoList.push({ text: this.myInput, done: false });
            this.myInput = '';
        }
    }
}).mount('#app');