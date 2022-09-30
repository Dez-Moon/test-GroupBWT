<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: *');
header('Content-type: json/application');

require_once __DIR__ . '/System/autoload.php';
$router = new Routers\conferencesRouter();
$router->add(
    'GET',
    '/conferences',
    'getConferences'
);
$router->add(
    'GET',
    '/conferences/:id',
    'getConference'
);
$router->add(
    'POST',
    '/conferences',
    'addConference'
);
$router->add(
    'PUT',
    '/conferences/:id',
    'updateConference'
);
$router->add(
    'DELETE',
    '/conferences/:id',
    'deleteConference'
);
$router->on();
