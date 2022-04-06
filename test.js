const { expect } = require('chai');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server  =  require('./index');

const ADDR = 'http://localhost:8080';

chai.should();

chai.use(chaiHTTP);

describe('Points API',  () => {

  // POST transaction route
  describe("POST /points", () => {
    it("Should POST a new transaction", (done) => {
      const transaction = {"payer": "DANNON", "points": 300, "timestamp": "2020-10-31T10:00:00Z"}
      chai.request(ADDR)
          .post("/points")
          .send(transaction)
          .end((err, res) => {
            res.should.have.status(200);
            expect(res.body.transaction).to.deep.equal(transaction);
          done();
          });
    });

    it("Should NOT POST a new transaction", (done) => {
      const transaction = {"payer": "DANNON", "timestamp": "2020-10-31T1000:00Z"}
      chai.request(ADDR)
          .post("/points")
          .send(transaction)
          .end((err, res) => {
            res.should.have.status(400);
          done();
          });
    });
  });
  
});