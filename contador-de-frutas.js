let frutas = {
    lista: ["manzana", "melocoton", "banano", "pera", "uva", "melocoton", "uva", "manzana", "banano", "melocoton", "banano", "melocoton"],
    contador: {},
    
    contador() {
        for (let fruta of this.lista) {
            this.contador[fruta] = (this.contador[fruta] || 0) + 1;
            }

            for (let fruta in this.contador) {
                console.log(`${fruta}: ${this.contador[fruta]}`);
            }
          }
    };

frutas.contador();