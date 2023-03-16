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
                    done: false
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
            if (this.myInput.trim() !== '') {
                this.toDoList.push({ text: this.myInput, done: false });
                this.myInput = '';
            }
        },
        changeDoneValue(index) {
            if (this.toDoList[index].done === true) {
                this.toDoList[index].done = false;
            } else {
                this.toDoList[index].done = true;
            }

            // this.toDoList[index].done = !this.toDoList[index].done (soluzione con operatore not)
        }
    }
}).mount('#app');