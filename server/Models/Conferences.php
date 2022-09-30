<?php

namespace Models;

use DataBase;

class Conferences
{
    private $db;
    public function __construct()
    {
        $this->db = new DataBase();
    }

    public function getConferences()
    {
        $data = $this->db->query("SELECT * FROM `conferences`");
        return json_encode($data);
    }

    public function getConference($id)
    {
        $data = $this->db->query("SELECT * FROM `conferences` WHERE `id` = '$id'");
        if (empty($data)) {
            return false;
        }
        return json_encode($data[0]);
    }
    public function addConference($data)
    {
        $title = $data['title'];
        $date = $data['date'];
        $address = $data['address'];
        $country = $data['country'];
        $this->db->query("INSERT INTO `conferences`(`title`, `date`, `address`, `country`) VALUES ('$title', '$date', '$address', '$country')");
        http_response_code(201);
        $res = [
            "status" => true,
            'message' => 'Conference is created'
        ];
        return json_encode($res);
    }
    public function updateConference($data, $id)
    {
        $title = $data['title'];
        $date = $data['date'];
        $address = $data['address'];
        $country = $data['country'];
        $this->db->query("UPDATE `conferences` SET `title` = '$title', `date` = '$date', `address` = '$address', `country` = '$country' WHERE `conferences`.`id` = '$id'");
        $res = ["status" => true, "message" => 'Post is updated'];
        return json_encode($res);
    }
    public function deleteConference($id)
    {
        $this->db->query("DELETE FROM `conferences` WHERE `conferences`.`id` = '$id'");
        $res = ["status" => true, "message" => 'Post is deleted'];
        return json_encode($res);
    }
}
