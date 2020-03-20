CREATE TABLE m_barang_supplier(
    id_barang INT(11) PRIMARY KEY AUTO_INCREMENT,
    nama_barang VARCHAR(255) NOT NULL,
    kode_barang VARCHAR(255) NOT NULL,
    jumlah_barang INT(11) NOT NULL,
    harga_supplier INT(11) NOT NULL,
    harga_jual INT(11) NOT NULL,
    create_date DATETIME,
    update_date DATETIME,
    tgl_expired DATETIME,
    id_supplier INT(11)
);

ALTER TABLE m_barang_supplier ADD
CONSTRAINT id_supplier
FOREIGN KEY fk_id_supplier(id_supplier)
REFERENCES m_pengguna(id_pengguna);