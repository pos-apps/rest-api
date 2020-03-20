CREATE TABLE t_detail_pembelian_customer (
    id_detail_pembelian INT(11) PRIMARY KEY AUTO_INCREMENT,
    tgl_pembelian DATETIME,
    id_barang INT(11) NOT NULL
);

ALTER TABLE t_detail_pembelian_customer ADD
CONSTRAINT id_barang_pembelian_customer
FOREIGN KEY fk_id_barang_pembelian_customer(id_barang)
REFERENCES m_barang_toko(id_barang);