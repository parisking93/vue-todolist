// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue(
    {
        el : '#app',

        data : {
            newProm : '',
            arrayPromemoria : ['giocare a pallone','fare i compiti','studiare matematica']
        },
        methods : {
            inserisci(){
                if (this.newProm) {
                    this.arrayPromemoria.push(this.newProm);
                    this.newProm = '';
                }
            },
            cancella(indice){
                this.arrayPromemoria.splice(indice,1);
            }
        }
    }
    );