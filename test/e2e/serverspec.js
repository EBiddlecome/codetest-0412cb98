var request = require('supertest');
var supertest = require('supertest');
var express = require('express');

var server = supertest('http://localhost:8080');

describe('loading server', function () {
  it('responds to / with 200 response', function testSlash(done) {
    server.get('/tasks')
      .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    console.log('test 404');
    server.get('/foo/bar')
      .expect(404, done);
    });
});