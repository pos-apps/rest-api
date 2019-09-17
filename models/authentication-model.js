const koneksi = require('../config/database');
const response = require('../libs/response');
const Crypter = require('cryptr');
const crypter = new Crypter('myTotalySecretKey'); 
const jwt = require('jsonwebtoken');

// fungsi registrasi
exports.register = function(res, statement1, statement2, username, encryptedPassword, data) {
    koneksi.query(statement1, username, (err, rows, field) => {
        if (err) throw err;
        
        // validasi jika username sudah ada
        if (rows.length > 0) {
            response.response('Username already exists!', 'Error', res);
            return false;
        }

        // jika tidak ada kesalahan validasi, maka data registrasi dikirim ke database
        koneksi.query(statement2, data, (err, rows, field) => {
            if (err) throw err;

            // generate token jika berhasil registrasi
            var user = {
                username: username,
                password: encryptedPassword
            }
            var token = jwt.sign({user}, 'generate_token', {expiresIn: '1h'}); 
            
            // response json, kembalikan token dan password
            response.responseAuth('Register successfully', encryptedPassword, token, res);
            console.log('Sukses registrasi!');
        });
    });
}

// fungsi login
exports.login = function(statement, username, password, res) {
    koneksi.query(statement, username, (err, rows, field) => {
        if (err) throw err;

        // pengecekan jika data input form sama dengan data di database
        if (rows.length > 0) {
            var decryptedPassword = crypter.decrypt(rows[0].password);
            // var token = rows[0].token;

            // validasi password dan konfirmasi password
            if (password !== decryptedPassword) {
                response.response("Sorry, username or password incorrect!", "Error", res);
                return false;
            } else {
                // generate token jika berhasil login
                var user = {
                    username: rows[0].username,
                    password: rows[0].password
                }
                var token = jwt.sign({user}, 'generate_token', {expiresIn: '1h'}); 

                // response json, kembalikan token dan password
                response.responseAuth("Login Successfully", rows[0].password, token, res);
                console.log('Sukses login!');
            }
        }
    });
}

// cek autentikasi menggunakan token
exports.cekHalaman = function(token, res) {
    jwt.verify(token, 'generate_token', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            response.response(data, 'Success', res);
        }
    });
}
