<?php

namespace Routers;

use Controllers\conferencesController;

class conferencesRouter
{
    public $routes = [];
    public function on()
    {
        $routes = $this->routes;
        foreach ($routes as &$el) {
            $urlParts = explode('/', $el->url);
            $requestUrlParts = explode('/', $_SERVER['REQUEST_URI']);
            if (($el->method === $_SERVER['REQUEST_METHOD'] && $el->url === $_SERVER['REQUEST_URI']) ||
                ($el->method === $_SERVER['REQUEST_METHOD'] && $urlParts[1] === $requestUrlParts[1] &&
                    count($requestUrlParts) === 3 && count($urlParts) === 3)
            ) {
                $conferenceController = new conferencesController();
                call_user_func(array($conferenceController, $el->function));
            } else {
            }
        }
    }
    public function add($method,  $url, $function)
    {
        $route = new \stdClass();
        $route->method = $method;
        $route->url = $url;
        $route->function = $function;
        $this->routes[] = $route;
    }
}
