const request = require('supertest')

const server = require('./server')

test('First test works', () => {
    expect(true).toBeTruthy()
})

test('GET / is working', (done) => {
    request(server)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('food label')
            done()
        })
})