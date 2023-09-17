<?php
use core_external\external_api;

require_once('./config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->dirroot . '/webservice/lib.php');

$webservicemanager = new webservice();

$functions = $DB->get_records('external_functions', array(), 'name');

$functiondescs = array();
foreach ($functions as $function) {
    $functiondescs[$function->name] = external_api::external_function_info($function);
}

echo json_encode($functiondescs);
