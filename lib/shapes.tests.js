const { Triangle, Circle, Square } = require('./shapes')


test('Triangle is generated in blue', () => {
    const triangle = new Triangle('blue')
    expect(triangle.render()).toEqual('<polygon points="150,20 230,160 70,160" fill="blue"/>')
})


test('Circle is generated in red', () => {
    const circle = new Circle('red')
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>')
})


test('Square is generated in green', () => {
    const square = new Square('green')
    expect(square.render()).toEqual('<rect x="70" y="40" width="160" height="160" fill="green"/>')
})

