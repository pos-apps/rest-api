CREATE TABLE m_pengguna (
    id_pengguna INT(11) PRIMARY KEY AUTO_INCREMENT,
    nama_lengkap VARCHAR(100) NOT NULL,
    nik VARCHAR(16) NOT NULL,
    tempat_lahir VARCHAR(100) NOT NULL,
    tgl_lahir DATETIME,
    jk INT(1),
    gol_darah VARCHAR(3) NULL,
    alamat VARCHAR(100) NOT NULL,
    agama INT(1),
    status_perkawinan INT(1) NOT NULL,
    pengalaman_kerja TEXT NULL,
    kewarganegaraan VARCHAR(100) NOT NULL,
    create_date DATETIME,
    update_date DATETIME,
    type_pengguna INT(1) DEFAULT 0,
    status INT(1) DEFAULT 0,
    parent INT(11) DEFAULT 0,
    api_key VARCHAR(255) NULL,
);

ALTER TABLE m_pengguna ADD username VARCHAR(100) NOT NULL AFTER parent;
ALTER TABLE m_pengguna ADD password VARCHAR(255) NOT NULL AFTER username;