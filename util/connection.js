const MongoClient = require("mongodb").MongoClient;
let connection_url = "mongodb://localhost:27017";
const database_name = "products";
let connection;


const connect = () => {
    if(connection) {
        return connection;
    } else {
        return MongoClient.connect(connection_url, {useNewUrlParser: true})
        .then(client => connection = client.db(database_name) )
        .catch(err => console.log("There was a problem connecting to the database"));
    }
}

module.exports = {connect};