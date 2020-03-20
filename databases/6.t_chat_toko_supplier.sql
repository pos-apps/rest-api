CREATE TABLE t_chat_toko_supplier (
    id_chat INT(11) PRIMARY KEY AUTO_INCREMENT,
    tgl_chat DATETIME,
    chat TEXT,
    id_toko INT(11) NOT NULL,
    id_supplier INT(11) NOT NULL
);

ALTER TABLE t_chat_toko_supplier ADD
CONSTRAINT id_toko_chat_toko_supplier
FOREIGN KEY fk_id_toko_chat_toko_supplier(id_toko)
REFERENCES m_pengguna(id_pengguna);

ALTER TABLE t_chat_toko_supplier ADD
CONSTRAINT id_supplier_chat_toko_supplier
FOREIGN KEY fk_id_supplier_chat_toko_supplier(id_supplier)
REFERENCES m_pengguna(id_pengguna);