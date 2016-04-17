const = require(__dirname + '/test-server');
const = contentHead(__dirname + '/../lib/fileTypes');
const chai = require('chai').expect;
const chaiHttp = require('chai-http').request;

chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

describe('REST functionality', function () {
  it('should reqpond to 404 error with GET request unknown route', (done) => {
    request(origin)
      .get('/doesnotexist')
      .end((err, req) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('Page not found');
        done();
      });
  });

  it('should GET', (done) => {
    request(origin)
      .get('/test')
      .end(('err, res') => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('get test');
        done();
      });
  });

  it('should POST', (done) => {
    request(origin)
      .post('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('post test');
        done();
      });
  });

  it('should PUT', (done) => {
    request(origin)
      .put('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('put test');
        done();
      });
  });

  it('should PATCH', (done) => {
    request(origin)
      .patch('/test')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('delete test');
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
    request(origin)
      .get('/filePath')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('hi there\n');
        done();
      });
  });

  it('should POST request data with exportObj.data function', (done) => {
    request(origin)
      .post('/')
      .send('we are data')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('we are data');
        done();
      });
  });
});

describe('reading fileTypes', () => {
  it('should match specified extension', () => {
    expect(contentHead('/index.html')).to.eql({'Content-Type': 'text/html'});
    expect(contentHead('/index.js')).to.eql({'Content-Type': 'application/json'});
  });
});
