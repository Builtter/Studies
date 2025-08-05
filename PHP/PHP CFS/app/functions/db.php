<?php

function connect()
{
    try {
        $pdo = new \PDO('mysql:host=localhost:3306;dbname=simp_db;charset=utf8', 'root', '');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        return $pdo;
    } catch (PDOException $e) {
        echo 'Erro de conexão: ' . $e->getMessage();
        exit;
    }
}

function create($table, $fields)
{
    if (!is_array($fields)) {
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

function all($table)
{
    $pdo = connect();
    $sql = "SELECT * FROM {$table}";
    $query = $pdo->query($sql);
    $query->execute();
    return $query->fetchAll(PDO::FETCH_ASSOC);
}

function update($table, $fields, $where) 
{
    if (!is_array($fields)) {
        $fields = (array) $fields;
    }

    $pdo = connect();

    $data = array_map(function ($field) {
        return "{$field} = :{$field}"; 
    }, array_keys($fields));

    $sql = "UPDATE {$table} SET " . implode(', ', $data);
    $sql .= " WHERE {$where[0]} = :{$where[0]}";

    $data = array_merge($fields, [$where[0] => $where[1]]);

    $update = $pdo->prepare($sql);
    $update->execute($data);

    return $update->rowCount();
}

function find($table, $field, $value)
{
    $value = filter_var($value, FILTER_SANITIZE_NUMBER_INT);

    $pdo = connect();
    $sql = "SELECT * FROM {$table} WHERE {$field} = :{$field}";
    $find = $pdo->prepare($sql);
    $find->bindValue(":{$field}", $value);
    $find->execute();
    return $find->fetch();
}

function delete() {}

function desconect() {}
