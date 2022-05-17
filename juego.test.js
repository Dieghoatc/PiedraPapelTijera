const game = require('./game.js')

test('Posible Results', () => {

    expect(game('Piedra','Tijera')).toMatch(/Gano Jugador con Piedra/)
    expect(game('Tijera', 'Piedra')).toMatch(/Gano IA con Piedra/)
    expect(game('Tijera','Papel')).toMatch(/Gano Jugador con Tijera/)
    expect(game('Papel', 'Tijera')).toMatch(/Gano IA con Tijera/)
    expect(game('Papel','Piedra')).toMatch(/Gano Jugador con Papel/)
    expect(game('Piedra', 'Papel')).toMatch(/Gano IA con Papel/)

    expect(game('Papel', 'Papel')).toMatch(/Vuelve a Jugar/);
    expect(game('Piedra', 'Piedra')).toMatch(/Vuelve a Jugar/);
    expect(game('Tijera', 'Tijera')).toMatch(/Vuelve a Jugar/);  
})