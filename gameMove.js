const messages = require('./messages')

const gameMove = {
    Piedra_Tijera: messages[1],
    Tijera_Piedra: messages[2],
    Tijera_Papel: messages[3],
    Papel_Tijera: messages[4],
    Papel_Piedra: messages[5],
    Piedra_Papel: messages[6]
}

module.exports = gameMove

///array de reglas