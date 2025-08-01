<?php

function connect() {
    try {
        $pdo = new \PDO('mysql:host=localhost:3306;dbname=simp_db;charset=utf8','root','');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $pdo;
    } catch (PDOException $e) {
        echo 'Erro de conexão: ' . $e->getMessage();
        exit;
    }
    
}

function create($table, $fields) {
    if(!is_array($fields)) {
        $fields = (array) $fields;
    }
    
    $sql = "INSERT INTO {$table} (" . implode(',', array_keys($fields)) . ") VALUES (:" . implode(', :', array_keys($fields)) . ")";

    $pdo = connect();
    $insert = $pdo->prepare($sql);

    foreach ($fields as $key => $value) {
        $insert->bindValue(":{$key}", $value);
    }
    
    $insert->execute();
    return $pdo;
}

function update() {
    
}

function find() {
    
}

function delete() {
    
}

function desconect() {
    
}










?>