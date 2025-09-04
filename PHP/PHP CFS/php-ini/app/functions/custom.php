<?php

/**
 * Dumps the given variable and ends the execution of the script.
 * Die Dump - dd
 * @param mixed $dump The variable to dump.
 */
function dd($dump){
    var_dump($dump);
    die();
}

/**
 * Returns the request data as array.
 *
 * @return array The request data as array.
 */
function request (){
    $request = $_SERVER['REQUEST_METHOD'];
    if ($request == 'POST') {
        return $_POST;
    }
    return $_GET;
}

/**
 * Redirects the user to a specified page.
 *
 * @param string $page The name of the page to redirect to.
 * @return void
 */

function redirect ($page) {
    return header("location:/?page={$page}");
}

/**
 * Redirects the user to the home page.
 *
 * @return void
 */
function redirectToHome () {
    return header("location:/");
}