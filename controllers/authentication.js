const auth_model = require('../models/authentication-model');
const response = require('../libs/response');
const Crypter = require('cryptr');
const crypter = new Crypter('myTotalySecretKey'); 

// registrasi
exports.register = function(req, res) {
    // get data dari input form, gunakan x-www-form-urlencoded di bagian body pada app postman.
    // jangan pakai form-data
    var username = req.body.username;
    var password = req.body.password;
    var passwordConfirm = req.body.passwordConfirm;

    // enkripsi password dan enkripsi token dari password yang sudah di enkripsi
    var encryptedPassword = crypter.encrypt(password);
    var token = crypter.encrypt(encryptedPassword);

    // get data registrasi dari input form
    var data = {
        nama_lengkap: req.body.nama_lengkap,
        nik: req.body.nik,
        tempat_lahir: req.body.tempat_lahir,
        tgl_lahir: req.body.tgl_lahir,
        jk: req.body.jk,
        gol_darah: req.body.gol_darah,
        alamat: req.body.alamat,
        agama: req.body.agama,
        status_perkawinan: req.body.status_perkawinan,
        pengalaman_kerja: req.body.pengalaman_kerja,
        kewarganegaraan: req.body.kewarganegaraan,
        create_date: req.body.create_date,
        update_date: req.body.update_date,
        type_pengguna: req.body.type_pengguna,
        username: username,
        password: encryptedPassword,
        token: token
    }

    // valdasi password dan konfirmasi password
    if (password !== passwordConfirm) {
        response.response("Password dan password confirmation is not match!", 'Error', res);
        return false;
    }

    var sql1 = 'SELECT * FROM m_pengguna WHERE username = ?';
    var sql2 = 'INSERT INTO m_pengguna SET ?';

    // masukkan data dan query sql ke fungsi register di bagian model 
    auth_model.register(res, sql1, sql2, username, encryptedPassword, token, data); 
}

// login
exports.login = function(req, res) {
    // get data dari input form, gunakan x-www-form-urlencoded di bagian body pada app postman.
    // jangan pakai form-data
    var username = req.body.username;
    var password = req.body.password;

    var sql = 'SELECT * FROM m_pengguna WHERE username = ?';
    
    // masukkan data dan query sql ke fungsi register di bagian model 
    auth_model.login(sql, username, password, res);
}