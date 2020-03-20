<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class APIController extends CI_Controller {
    private $models, $auth;
    public function __construct($models, $auth) {
        parent::__construct();
        $this->models = $models;
        $this->auth = $auth;
    }

    /**
     * Create Pengguna = /users/create?api_token={found} | Post
     * Request Body
     *      @name           | string (100)
     *      @identityNumber | string (16)
     *      @placeOfBirth   | string (100)
     *      @dateOfBirth    | datetime | null
     *      @gender         | number (1) | null
     *      @bloodType      | string (3) | null
     *      @address        | string (100)
     *      @religion       | number (1) | null
     *      @maritalStatus  | number (1)
     *      @workExperience | string | null
     *      @citizenship    | string (100)
     *      @userType       | number (1) | default 0
     *      @status         | number (1) | default 0
     *      @parent         | number (1) | default 0
     *      @username       | string (100)
     *      @password       | string (255)
     **/ 
    public function createUser() {
        $this->form_validation->set_rules('name', 'Name', 'trim|required');
        $this->form_validation->set_rules('identityNumber', 'Identity Number', 'required|min_length[16]|max_length[16]');
        $this->form_validation->set_rules('placeOfBirth', 'Place Of Birth', 'trim|required');
        $this->form_validation->set_rules('address', 'Address', 'trim|required');
        $this->form_validation->set_rules('maritalStatus', 'Martial Status', 'trim|required|numeric');
        $this->form_validation->set_rules('citizenship', 'Citizenship', 'trim|required');
        $this->form_validation->set_rules('username', 'Username', 'trim|required|is_unique[m_pengguna.username]');
        $this->form_validation->set_rules('password', 'Password', 'trim|required');
        if ($this->form_validation->run() == FALSE)
            return array('message' => validation_errors());
        else {
            return array('message' => "This is hahaha");
        }
    }

    // Update Pengguna
    // Delete Pengguna
    // List Pengguna
    // Profile Pengguna
    // List Pengguna By ID

    // Default = /
	public function index() {
        return array('message' => "This is default response");
    }

    // No Authentication = /?api_token={not_found}
	public function noAuth() {
        return array('message' => "Permission denied");
    }
}
