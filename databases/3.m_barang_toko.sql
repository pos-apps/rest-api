CREATE TABLE m_barang_toko (
    id_barang INT(11) PRIMARY KEY AUTO_INCREMENT,
    nama_barang VARCHAR(255) NOT NULL,
    kode_barang VARCHAR(255) NOT NULL,
    jumlah_barang INT(11) NOT NULL,
    harga_supplier INT(11) NOT NULL,
    harga_jual INT(11) NOT NULL,
    create_date DATETIME,
    update_date DATETIME,
    tgl_expired DATETIME,
    id_barang_supplier INT(11) NOT NULL,
    id_toko INT(11) NOT NULL
);

ALTER TABLE m_barang_toko ADD
CONSTRAINT id_barang_supplier
FOREIGN KEY fk_id_barang_supplier(id_barang_supplier)
REFERENCES m_barang_supplier(id_barang);

ALTER TABLE m_barang_toko ADD
CONSTRAINT id_toko
FOREIGN KEY fk_id_toko(id_toko)
REFERENCES m_pengguna(id_pengguna);