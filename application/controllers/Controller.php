<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once ('ControllerModel.php');
require_once ('ControllerAuth.php');
require_once ('api/APIController.php');

class Controller extends CI_Controller {
    private $routes, $models, $auth;
    public function __construct() {
        parent::__construct();
        $this->routes = array();
        $this->models = new ControllerModel();
        $this->auth = new ControllerAuth($this->models);

        $this->routes['api'] = new APIController($this->models, $this->auth);
        if (!$this->auth->checkAuth()) die ($this->noAuthentication());
    }

    // Default Response
	public function index() {
        echo json_encode($this->routes['api']->index());
    }

    // Default No Authentication Response
    public function noAuthentication() {
        echo json_encode($this->routes['api']->noAuth());
    }
}