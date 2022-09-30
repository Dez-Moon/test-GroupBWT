<?php

class DataBase
{
    private $link;

    public function __construct()
    {
        $this->connect();
    }

    private function connect()
    {
        $host = 'eu-cdbr-west-03.cleardb.net';
        $db_name = 'heroku_6b9e6783d4847a7';
        $username = 'b9d531a9537b35';
        $password = 'a9dd328f';
        $dsn = 'mysql:host=' . $host . ';dbname=' . $db_name . ';charset=utf8';
        $this->link = new PDO($dsn, $username, $password);
        return $this;
    }

    public function execute($sql)
    {
        $sth = $this->link->prepare($sql);
        return $sth->execute();
    }

    public function query($sql)
    {
        $sth = $this->link->prepare($sql);
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        if ($result === false) {
            return false;
        }
        return $result;
    }
}
