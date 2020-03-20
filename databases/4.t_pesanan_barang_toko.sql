CREATE TABLE t_pesanan_barang_toko (
    id_pesanan_barang INT(11) PRIMARY KEY AUTO_INCREMENT,
    tgl_pesanan DATETIME,
    id_toko INT(11) NOT NULL
);

ALTER TABLE t_pesanan_barang_toko ADD
CONSTRAINT id_toko_pesanan_barang
FOREIGN KEY fk_id_toko_pesanan_barang(id_toko)
REFERENCES m_pengguna(id_pengguna);