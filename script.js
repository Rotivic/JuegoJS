$( document ).ready(function() {

    const armas = {
        lanza: new Arma("Lanza", 10, 0.8),
        espada: new Arma("Espada", 15, 1.0),
        hacha: new Arma("Hacha", 20, 0.6),
    };
    
    const jugador = new Personaje("Jugador", 100, armas.espada);
    const enemigo = new Personaje("Enemigo", 100, armas.hacha);
    
    $(".dmg").click(function(){
        jugador.atacar(enemigo)
        console.log(enemigo)
    })

    $(".heal").click(function(){
        jugador.curarse(jugador)
        console.log(jugador)
    })


});


class Personaje {
    constructor(nombre, salud, arma) {
        this.nombre = nombre;
        this.salud = salud;
        this.arma = arma;
    }

    atacar(target) {
        target.salud -= this.arma.damage;
        return this.arma.damage;
    }

    curarse(target){
        target.salud += 20;
        return 20;
    }

    defenderse(target){

    }

  
}


class Arma {
    constructor(nombre, damage, precision) {
        this.nombre = nombre;
        this.damage = damage;
        this.precision = precision;
    }

    damageRealizado(){
        return this.damage;
    }
}