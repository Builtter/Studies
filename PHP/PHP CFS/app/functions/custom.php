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