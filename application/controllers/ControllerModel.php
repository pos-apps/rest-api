<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ControllerModel extends CI_Controller {
    public function __construct() {
        parent::__construct();
        // Load All Model
        $this->load->model('users/UserModel');
    }

    // User Models
    public function getUserModel() {
        return $this->UserModel;
    }
}