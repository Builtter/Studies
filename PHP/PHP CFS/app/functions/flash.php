<?php

/**
 * Stores a flash message in the session.
 *
 * @param string $key
 *   Key to store the message under.
 * @param string $message
 *   The message.
 * @param string $type
 *   (optional) The Bootstrap class to add to the message. Defaults to 'danger'.
 */
function flash($key, $message, $type = 'danger') {
    if(!isset($_SESSION['flash'][$key])){
        $_SESSION['flash'][$key] = '<span class="alert alert-' . $type . '">' . $message . "</span>";
    }
}



/**
 * Retrieves a flash message from the session.
 * @param string $key
 *   The key to retrieve the message from.
 * @return string|null
 *   The message or null if the key doesn't exist.
 */
function get($key){

    if(isset($_SESSION['flash'][$key])){
        $message = $_SESSION['flash'][$key];
        unset($_SESSION['flash'][$key]);
        return $message ?? "";
    }

}