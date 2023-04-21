import test from 'tape'
import request from 'supertest'
import app from '../index.js'

test('GET /users', function (t) {
  request(app)
    .get('/users')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error')
      t.equals(res.statusCode, 200, 'Status code is 200')
      t.deepEqual(res.body, {message: 'OK'}, 'Response data is correct');
      t.end()
    })
})

test('POST /users', function (t) {
  request(app)
    .post('/users')
    .send({test: 'test'})
    .expect(200)
    .end(function (err, res) {
      t.error(err, 'No error')
      t.equals(res.statusCode, 200, 'Status code is 200')
      t.deepEqual(res.body, {message: 'OK'}, 'Response data is correct');
      t.end()
    })
})
