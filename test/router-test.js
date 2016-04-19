var chai = require('chai');
var fs = require('fs');
var expect = chai.expect;
var Router = require(__dirname + '/../lib/router');

describe('routing function', () => {
  it('should route for REST', () => {
    expect(Router.routes).to.have.property('GET');
    expect(Router.routes).to.have.property('POST');
    expect(Router.routes).to.have.property('PATCH');
    expect(Router.routes).to.have.property('PUT');
    expect(Router.routes).to.have.property('DELETE');
  });
});

describe('testing routes', () => {
  beforeEach(() => {
    this.counter = 0;
  });

  it('should GET', (done) => {
    Router.get('/test', (req, res) => {
      res.writeHead(200);
      res.write('get test');
      expect(this.counter).to.eql(2);
      // expect(true).to.eql(false);
      done();
    });
    Router.route(
      {'method': 'GET', 'url': '/test'},
      {'writeHead': (status) => {
        expect(status).to.eql(200);
        this.counter++;
      },
      'write': (msg) => {
        expect(msg).to.eql('get test');
        // expect(true).to.eql(false);
        this.counter++;
      }
    });
  });

  it('should POST', (done) => {
    Router.post('/test', (req, res) => {
      res.writeHead(200);
      res.write('post test');
      expect(this.counter).to.eql(2);
      // expect(true).to.eql(false);
      done();
    });
    Router.route(
      {'method': 'POST', 'url': '/test'},
      {'writeHead': (status) => {
        expect(status).to.eql(200);
        this.counter++;
      },
      'write': (msg) => {
        expect(msg).to.eql('post test');
        // expect(true).to.eql(false);
        this.counter++;
      }
    });
  });
});
