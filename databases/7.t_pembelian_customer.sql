CREATE TABLE t_pembelian_customer (
    id_pembelian INT(11) PRIMARY KEY AUTO_INCREMENT,
    tgl_pembelian DATETIME,
    total_bayar_customer INT(11) NOT NULL,
    total_harga_barang INT(11) NOT NULL,
    id_toko INT(11) NOT NULL,
    id_pegawai INT(11) NOT NULL
);

ALTER TABLE t_pembelian_customer ADD
CONSTRAINT id_toko_pembelian_customer
FOREIGN KEY fk_id_toko_pembelian_customer(id_toko)
REFERENCES m_pengguna(id_pengguna);

ALTER TABLE t_pembelian_customer ADD
CONSTRAINT id_pegawai_pembelian_customer
FOREIGN KEY fk_id_pegawai_pembelian_customer(id_pegawai)
REFERENCES m_pengguna(id_pengguna);