const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('Should return a 404 with appropriate message error', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({error: 'Page Not Found'});
        })
        .end(done)
    });
  });

  describe('GET /users', () => {
    it('Should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Steve',
            age: 32
          });
        })
        .end(done)
    });
  });
});



