<?php

namespace Controllers;


use Models\Conferences;

class conferencesController
{
    public function getConferences()
    {
        $conferenceModel = new Conferences();
        $data = $conferenceModel->getConferences();
        echo $data;
    }
    public function getConference()
    {
        $id = explode('/', $_SERVER['REQUEST_URI'])[2];
        $conferenceModel = new Conferences();
        $data = $conferenceModel->getConference($id);
        if (!$data) {
            http_response_code(404);
            $data = json_encode(["status" => false, "message" => "Conference not found"]);
        }
        echo $data;
    }
    public function addConference()
    {
        $conferenceModel = new Conferences();
        $data = $conferenceModel->addConference($_POST);
        http_response_code(201);
        echo $data;
    }
    public function updateConference()
    {
        $conferenceModel = new Conferences();
        $id = explode('/', $_SERVER['REQUEST_URI'])[2];
        $data = file_get_contents('php://input');
        $data = json_decode($data, true);
        $data = $conferenceModel->updateConference($data, $id);
        echo $data;
    }
    public function deleteConference()
    {
        $conferenceModel = new Conferences();
        $id = explode('/', $_SERVER['REQUEST_URI'])[2];
        $data = $conferenceModel->deleteConference($id);
        echo $data;
    }
}
