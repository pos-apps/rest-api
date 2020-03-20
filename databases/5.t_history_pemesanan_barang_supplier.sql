CREATE TABLE t_history_pemesanan_barang_supplier (
    id_history_pesanan_barang_supplier INT (11) PRIMARY KEY AUTO_INCREMENT,
    nama_barang VARCHAR(255) NOT NULL,
    jumlah_pemesanan INT(11) NOT NULL,
    harga_satuan INT(11) NOT NULL,
    subtotal INT(11) NOT NULL,
    tgl_pesanan DATETIME,
    id_barang INT(11) NOT NULL,
    id_pesanan_barang INT(11) NOT NULL
);

ALTER TABLE t_history_pemesanan_barang_supplier ADD
CONSTRAINT id_barang_history_pesanan
FOREIGN KEY fk_id_barang_history_pesanan(id_barang)
REFERENCES m_barang_supplier(id_barang);

ALTER TABLE t_history_pemesanan_barang_supplier ADD
CONSTRAINT id_pemesanan_history_pesanan
FOREIGN KEY fk_id_pemesanan_history_pesanan(id_pesanan_barang)
REFERENCES t_pesanan_barang_toko(id_pesanan_barang);