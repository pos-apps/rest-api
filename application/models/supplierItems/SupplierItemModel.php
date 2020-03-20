<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SupplierItemModel extends CI_Model {
    private 
        $table = 'm_barang_supplier',
        $index = array(
            'id'        => 'id_barang',
            'supplier'  => 'id_supplier'
        );

    // Create Supplier Item
    public function create($data=array()) {
        if (count($data) > 0)
            $this->db->insert($this->table, $data);
        return ($this->db->affected_rows() != 1) ? false : true;
    }

    // Read Supplier Item (All)
    public function all() {
        $this->db->order_by($this->index['id'], 'DESC');
        return $this->db->get($this->table)->result_array();
    }

    // Read Supplier Item By
    public function getBy($where=array()) {
        $this->db->where($where);
        return $this->all();
    }

    // Read Supplier Item All With Selection
    public function getWithSelection($selection=array()) {
        if (count($selection) > 0) 
            $this->db->select(implode(', ', $selection));
        return $this->all();
    }

    // Read Supplier Item All With Selection And Where
    public function getWithSelectionAndWhere($selection=array(), $where=array()) {
        if (count($selection) > 0) 
            $this->db->select(implode(', ', $selection));
        return $this->getBy($where);
    }

    // Update Supplier Item
    public function update($where=array(), $data=array()) {
        $this->db->where($where);
        if (count($data) > 0)
            $this->db->update($this->table, $data);
        return ($this->db->affected_rows() != 1) ? false : true;
    }

    // Delete Supplier Item
    public function delete($where=array()) {
        $this->db->where($where);
        $this->db->delete($this->table);
        return ($this->db->affected_rows() != 1) ? false : true;
    }
}