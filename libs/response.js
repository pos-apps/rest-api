// respon get data
exports.response = function (values, status, res) {
    var data = {
        'status': status,
        'data': values
    }
    res.json(data);
    res.end();
}

// respon get token
exports.responseAuth = function (status, encryptedPassword, token, res) {
    var data = {
        'Status': status,
        'data': {
            'password': encryptedPassword,
            'token': token
        }
    }
    res.json(data);
    res.end();
}