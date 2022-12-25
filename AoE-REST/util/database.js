const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://denizdemirbilek:adessoTurkey@cluster0.v578l5s.mongodb.net/aoe?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No MongoDB connection";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
