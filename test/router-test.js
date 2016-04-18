var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var expect = chai.expect;
var server = require(__dirname + '/../lib/router');
// const contentHead = require(__dirname + '/../lib/content-type');

var origin = 'localhost:3000'

describe('REST functionality', function () {
  it('should respond to 404 error with GET request unknown route', (done) => {
    chai.request(origin)
      .get('/doesnotexist')
      .end((err, req) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('Page not found');
        done();
      });
  });

  it('should GET', (done) => {
    chai.request(origin)
      .get('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('get test');
        done();
      });
  });

  it('should POST', (done) => {
    chai.request(origin)
      .post('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('post test');
        done();
      });
  });

});

describe('server test', () => {
  after(() => {
    server.close();
  });

  //write get and post tests with correct exportObj.data function from fileTypes
  it('should GET and read files with exportObj.view function', (done) => {
    chai.request(origin)
      .get('/filePath')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('hi there\n');
        done();
      });
  });

  it('should POST request data with exportObj.data function', (done) => {
    chai.request(origin)
      .post('/')
      .send('we are data')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('we are data');
        done();
      });
  });
});

describe('reading content-Type', () => {
  it('should match specified extension', () => {
    expect(contentHead('/index.html')).to.eql({'Content-Type': 'text/html'});
    expect(contentHead('/index.js')).to.eql({'Content-Type': 'application/json'});
  });
});
