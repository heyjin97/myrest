const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

let corsOptions = {
    origin: "http://localhost:4000"
}
app.use(cors(corsOptions));

const port = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));

const data = fs.readFileSync('./database/db.json');
const conf = JSON.parse(data);

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/myrest', (req, res)=>{
  let sql = `SELECT * FROM restaurant_ggy order by id desc LIMIT 0, 20`;
  console.log(sql);
  connection.query(
    sql, (err, rows, fields) => {
      res.send(rows);
    }
  )
})
/*
app.get('/api/myrest', (req, res)=> {
    res.send([
        {
            "id": 1,
            "sigun" : "고양시",
            "title":"가평축협 한우명가",
            "tel":"031-1234-1234",
            "title_food":"웃기는짬뽕",
            "zip":"12422",
            "address":"도로명 주소랍니다.",
            "address_old":"지번주소랍니다.",
            "latitude": "37.8158443",
            "longitude": "127.5161283",
            "radius" : "200"
          },
          {
            "id": 2,
            "sigun" : "고양시",
            "title":"청정바지락칼국수",
            "tel":"031-912-7676",
            "title_food":"천년초들깨수제비",
            "zip":"10359",
            "address":"도로명 주소랍니다.",
            "address_old":"지번주소랍니다.",
            "latitude": "37.6737073",
            "longitude": "126.7753751",
            "radius" : "200"
          },
          {
            "id": 3,
            "sigun" : "고양시",
            "title":"양촌리아구",
            "tel":"031-911-0430",
            "title_food":"아구탕",
            "zip":"10218",
            "address":"도로명 주소랍니다.",
            "address_old":"지번주소랍니다.",
            "latitude": "37.6719314",
            "longitude": "126.7362187",
            "radius" : "200"
          },
          {
            "id": 4,
            "sigun" : "고양시",
            "title":"정통중화요리 남궁",
            "tel":"031-911-3702",
            "title_food":"해물고추짬뽕, 양장피잡채",
            "zip":"10367",
            "address":"도로명 주소랍니다.",
            "address_old":"지번주소랍니다.",
            "latitude": "37.6820421",
            "longitude": "126.7535498",
            "radius" : "200"
          },
          {
            "id": 5,
            "sigun" : "고양시",
            "title":"야구장농원",
            "tel":"031-964-2884",
            "title_food":"오리진흙구이",
            "zip":"10313",
            "address":"도로명 주소랍니다.",
            "address_old":"지번주소랍니다.",
            "latitude": "37.6971016",
            "longitude": "126.8198191",
            "radius" : "200"
          }
        ])
});
*/
app.listen(port, ()=> console.log(`Listening on port ${port}`));