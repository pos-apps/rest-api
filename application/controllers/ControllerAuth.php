<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ControllerAuth extends CI_Controller {
    private $models;
    public function __construct($models) {
        parent::__construct();
        $this->models = $models;
    }

    // Check Auth
    public function checkAuth() {
        $auth = array(
            'api_key'   => $this->input->post_get('api_token', TRUE)
        );
        if (isset($auth['api_key'])) {
            $res = $this->models->getUserModel()->getBy($auth);
            return !empty($res);
        }
        return false;
    }

    // Get Auth
    public function auth() {
        $auth = array(
            'api_key'   => $this->input->post_get('api_token', TRUE)
        );
        if (isset($auth['api_key'])) {
            $res = $this->models->getUserModel()->getBy($auth);
            return !empty($res) ? $res : null;
        }
        return null;
    }
}
