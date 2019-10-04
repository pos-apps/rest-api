const koneksi = require('../config/database');
const response = require('../libs/response');
const jwt = require('jsonwebtoken');
const jwt_config = require('../config/jwt-config');
const Crypter = require('cryptr');
const crypter = new Crypter('myTotalySecretKey'); 

// fungsi registrasi
exports.register = function(res, statement1, statement2, username, encryptedPassword, data) {
    koneksi.query(statement1, username, (err, rows, field) => {
        if (err) throw err;
        
        // validasi jika username sudah ada
        if (rows.length > 0) {
            response.response('Username sudah terdaftar!', 'Error', res);
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
            var token = jwt.sign({user}, jwt_config.secret); 
            
            // response json, kembalikan token dan password
            response.responseAuth('Registrasi berhasil!', encryptedPassword, token, res);
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

            // validasi password di database
            if (password !== decryptedPassword) {
                response.response('Username atau password salah!', 'Error', res);
                return false;
            } else {
                // generate token jika berhasil login
                var user = {
                    username: rows[0].username,
                    password: rows[0].password
                }
                var token = jwt.sign({user}, jwt_config.secret); 

                // response json, kembalikan token dan password
                response.responseAuth('Login berhasil!', rows[0].password, token, res);
                console.log('Sukses login!');
            }
        } else {
            response.response('Username atau password salah!', 'Error', res);
            return false;
        }
    });
}

// cek autentikasi menggunakan token
exports.cekHalaman = function(token, res) {
    jwt.verify(token, jwt_config.secret, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            response.response(data, 'Success', res);
        }
    });
}

// logout
exports.logout = function(token, res) {
    jwt.verify(token, jwt_config.secret, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            response.response('Sukses logout', true, res);
        }
    })
}