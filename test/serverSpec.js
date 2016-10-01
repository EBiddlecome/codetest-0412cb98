//basic e2e server/api test

process.env.NODE_ENV = 'test';

var request = require('supertest');
var supertest = require('supertest');
var express = require('express');

var server = supertest('http://localhost:8080');

describe('Server Test', function () {
  it('responds to / with 200 response', function testSlash(done) {
    server.get('/tasks').expect(200, done);
  });

  it('responds to everything else with 404', function testPath(done) {
    server.get('/foo/bar').expect(404, done);
  });
});