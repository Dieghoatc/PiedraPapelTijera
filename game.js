const gameMove = require('./gameMove')

function game(player, IA){



    const condition = `${player}_${IA}`
    const gameResult = gameMove[condition] || 'Vuelve a Jugar'
    return gameResult
}

module.exports = game