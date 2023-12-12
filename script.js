$(document).ready(function () {
  const armas = {
    lanza: new Arma("Lanza", 20, 8),
    espada: new Arma("Espada", 15, 10),
    hacha: new Arma("Hacha", 30, 6),
  };

  const jugador = new Personaje("Jugador", 80, armas.espada);
  const enemigo = new Personaje("Enemigo", 100, armas.lanza);
  actuVida(jugador, enemigo)


  $(".dmg").click(function () {
    jugador.atacar(enemigo);
    jugadaEnemigo(getRndInteger(1, 3),enemigo,jugador);
    actuVida(jugador, enemigo)
   
  });

  $(".heal").click(function () {
    jugador.curarse(jugador);
    console.log(jugador)
    jugadaEnemigo(getRndInteger(1, 3),enemigo,jugador);
    actuVida(jugador, enemigo)
    
  });

});

function actuVida(jugador, enemigo){

    $("#barraVidaJugador").css("width", `${jugador.vidaActual()}%`)
    $("#barraVidaEnemigo").css("width", `${enemigo.vidaActual()}%`)
    condicionVictoria(jugador,enemigo)
}

function condicionVictoria(jugador,enemigo){
    if(jugador.vidaActual() == 0){
        alert("El jugador ha perdido")
    }else if(enemigo.vidaActual() == 0){
        alert("El jugador ha ganado")
    }
}

function jugadaEnemigo(rndom,enemigo,jugador) {
    switch (rndom) {
        case 1:
          enemigo.atacar(jugador)
          console.log("El enemigo ataca")
          break;
        case 2:
          enemigo.curarse(enemigo)
          console.log("El enemigo se cura")

          break;
        case 3:
          enemigo.defenderse(jugador)
          console.log("El enemigo se defiende")

          break;
        default:
          console.log("El enemigo se ríe de ti")
          break;
      }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Personaje {
  constructor(nombre, salud, arma) {
    this.nombre = nombre;
    this._salud = salud;
    this.arma = arma;
  }

  atacar(target) {
    //Revisar precisión

    if (this.arma.precision == 10) {
      target._salud -= this.arma.damage;
    } else {
      if (10 - this.arma.precision < getRndInteger(1, 10)) {
        target._salud -= this.arma.damage;
      } else {
        console.log("Has fallado");
      }
    }
  }

  curarse(target) {
    let restaurado = getRndInteger(10, 31);

    if (target._salud + restaurado > 100) {
      target._salud = 100;
    } else {
      target._salud += restaurado;
    }
  }

  defenderse(target) {}

  vidaActual(){
    return this._salud;
  }

}

class Arma {
  constructor(nombre, damage, precision) {
    this.nombre = nombre;
    this.damage = damage;
    this.precision = precision;
  }

  damageRealizado() {
    return this.damage;
  }
}
