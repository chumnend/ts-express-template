import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('App', () => {
  describe('/status', () => {
    it('expects to hit health check', function (done) {
      chai
        .request(app)
        .get('/status')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('/', () => {
    it('expects to get html file', function (done) {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          expect(res.text).to.include('<html');
          done();
        });
    });
  });

  describe('GET /not-a-path', function () {
    it('expects to encounter 404', function (done) {
      chai
        .request(app)
        .get(`/not-a-path?apiKey=${process.env.API_LOCK}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          expect(res.body).to.have.property('message');
          expect(res.body).to.have.property('extra');
          done();
        });
    });
  });
});
