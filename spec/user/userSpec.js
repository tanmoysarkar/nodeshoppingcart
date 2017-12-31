const dbURI = process.env.MONGO_DB_URI;
const should = require('chai').should();
const mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/shoppingcart';
var User = require('../../models/user');

describe("User test suite", () => {

  beforeEach((done) => {
    mongoose.Promise = global.Promise;

    if (mongoose.connection.db) return done();
    mongoose.connect(url, done);
  });

  it('should encrypt the password.', () => {
    let user = new User();
    user.password = 'tanmoysarkar';
    expect(user.encryptPassword(user.password)).toContain('$2a$05');
  });

  it("should remove from database", (done) => {
    User.findOneAndRemove({
      email: 'tnmsarkar96@gmail.com'
    }, (err, data) => {
      if (err) return done(err);
      return done();
    });
  });

  it("should save on the database", (done) => {
    const mockedUser = {
      name: 'Tanmoy Sarkar',
      email: 'tnmsarkar96@gmail.com',
      password: 'tanmoysarkar'
    }
    const newUser = new User(mockedUser);

    newUser.password = newUser.encryptPassword('tanmoysarkar');
    newUser.save((err, result) => {
      if (err) return done(err);
      return done(null, newUser);
    });
  });

});