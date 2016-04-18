var chai = require('chai');
var fs = require('fs');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var server = require(__dirname + '/../lib/router');
// const contentHead = require(__dirname + '/../lib/content-type');
//
// var origin = 'localhost:3000'

describe('routing function', function () {
  it('should route for REST', () => {
    expect(Router.routes).to.have.property('GET');
    expect(Router.routes).to.have.property('POST');
    
    });
  });
});
