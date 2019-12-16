//MANDEEP KAUR C0742602
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created management collections");
var mydatabase=db.db('college');
var mycol=[

{position:'Director',name:'Michael', m_availabilty_days:'Monday,Tuesday,Wednesday',m_availabilty_time:'10 AM to 4 PM'},
{position:'Head of Department',name:'John', m_availabilty_days:'Tuesday,Wednesday,Thrusday',m_availabilty_time:'10 AM to 4 PM'},
{position:'StudentService',name:'Ahmed', m_availabilty_days:'Monday,Tuesday,Wednesday,Thrusday',m_availabilty_time:'10 AM to 5 PM'},
{position:'Dean',name:'Robert', m_availabilty_days:'Monday,Wednesday',m_availabilty_time:'11 AM to 4 PM'},
{position:'InCharge',name:'Rony', m_availabilty_days:'Monday,Tuesday,Wednesday',m_availabilty_time:'10AM to 4PM'}
]
mydatabase.collection("management").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});