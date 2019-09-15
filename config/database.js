const mysql = require('mysql');

// buat koneksi database
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_pos',
    multipleStatements: true
});

// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('mySQL connected...');
});

module.exports = koneksi;