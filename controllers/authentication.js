const auth_model = require('../models/authentication-model');
const response = require('../libs/response');
const Crypter = require('cryptr');
const crypter = new Crypter('myTotalySecretKey'); 

// registrasi
exports.register = function(req, res) {
    // get username dan password
    var username = req.body.username;
    var password = req.body.password;
    var passwordConfirm = req.body.passwordConfirm;

    // enkripsi password 
    var encryptedPassword = crypter.encrypt(password);

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
        parent: req.body.parent,
        username: username,
        password: encryptedPassword
    }

    // valdasi password dan konfirmasi password
    if (password !== passwordConfirm) {
        response.response('Password dan password confirmation is not match!', 'Error', res);
        return false;
    }

    // validasi field kosong
    if (data.nama_lengkap == '') {
        response.response('Nama lengkap wajib diisi!', 'Error', res);
        return false;
    } else if(data.nik == '') {
        response.response('NIK wajib diisi!', 'Error', res);
        return false;
    } else if (data.tempat_lahir == '') {
        response.response('Tempat lahir wajib diisi!', 'Error', res);
        return false;
    } else if (data.alamat == '') {
        response.response('Alamat wajib diisi!', 'Error', res);
        return false;
    } else if (data.status_perkawinan == '') {
        response.response('Status perkawinan wajib diisi!', 'Error', res);
        return false;
    } else if (data.kewarganegaraan == '') {
        response.response('Kewarganegaraan wajib diisi!', 'Error', res);
        return false;
    } else if (data.username == '') {
        response.response('Username wajib diisi!', 'Error', res);
        return false;
    } else if (password == '') {
        response.response('Password wajib diisi!', 'Error', res);
        return false;
    }

    var sql1 = 'SELECT * FROM m_pengguna WHERE username = ?';
    var sql2 = 'INSERT INTO m_pengguna SET ?';
    // masukkan data dan query sql ke fungsi register di bagian model 
    auth_model.register(res, sql1, sql2, username, encryptedPassword, data); 
}

// login
exports.login = function(req, res) {
    // get username dan password
    var username = req.body.username;
    var password = req.body.password;

    // validasi field kosong
    if (username == '') {
        response.response('Username wajib diisi!', 'Error', res);
        return false;
    } else if (password == '') {
        response.response('Password wajib diisi!', 'Error', res);
        return false;
    }
    var sql = 'SELECT * FROM m_pengguna WHERE username = ?';
    
    // masukkan data dan query sql ke fungsi register di bagian model 
    auth_model.login(sql, username, password, res);
}

// cek autentikasi menggunakan token
exports.cekAuth = function(req, res) {
    // get token
    var token = req.token;
    auth_model.cekHalaman(token, res);
}

// logout
exports.logout = function(req, res) {
    var token = req.token;
    auth_model.logout(token, res);
}