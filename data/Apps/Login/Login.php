<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Eduardo
 * Date: 2/02/14
 * Time: 6:23
 * To change this template use File | Settings | File Templates.
 */
namespace Apps\Login;
define("SECURESESSION", FALSE);

use R;

class Login
{


    public function __construct()
    {
        // Do nothing
    }

    /**
     * LogIn method
     *
     * @return string
     * @throws Exception
     */
    public function logIn()
    {
        $username = trim($_POST['data']['username']);
        $password = trim($_POST['data']['password']);

        if(empty($username) || empty($password))
        {
            throw new Exception('Username or Password empty');
        }

        $result = R::findOne( 'users', ' username = "'.$username.'"');
        if($result == null)
        {
            throw new Exception('User not found');
        }

        $salt = $result->salt;
        if($salt == '')
        {
            throw new Exception('Salt password empty, please contact the administrator');
        }

        $result = R::findOne( 'users', 'username = "'.$username.'" && password = "'.$this->getPasswordHash($password,$salt).'"');
        if($result == null)
        {
            throw new Exception('Wrong password');
        }

        session_start();
        $_SESSION['Ethereal']['loggedIn'] = true;
        return true;
    }

    /**
     * This function generates a password salt as a string of x (default = 128) characters
     * in the a-zA-Z0-9!@#$%&*? range.
     * @param $max integer The number of characters in the string
     * @return string
     * @author AfroSoft <info@afrosoft.tk>
     */
    protected function generateSalt($max = 128)
    {
        $characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?";
        $i = 0;
        $salt = "";
        while ($i < $max) {
            $salt .= $characterList{mt_rand(0, (strlen($characterList) - 1))};
            $i++;
        }
        return $salt;
    }

    /**
     * Returns the hashed password
     *
     * @param string $password
     * @param string $salt
     * @return string
     */
    protected function getPasswordHash($password,$salt)
    {
        return hash('sha512', $password . $salt);
    }

    /**
     * LogOut Class
     *
     * @return string
     */
    public function logOut()
    {
        session_start();
        $_SESSION['Ethereal']['loggedIn'] = false;
        return 'LoggedOut';
    }


    /*function sec_session_start() {
        // This stops JavaScript being able to access the session id.
        $httponly = true;
        // Forces sessions to only use cookies.
        if (ini_set('session.use_only_cookies', 1) === FALSE) {
            throw Exception('Cant start secure session');
        }
        // Gets current cookies params.
        $cookieParams = session_get_cookie_params();
        session_set_cookie_params($cookieParams["lifetime"],
            $cookieParams["path"],
            $cookieParams["domain"],
            SECURESESSION,
            $httponly);
        // Sets the session name to the one set above.
        session_name('AAABBBCCC'); // Set a custom session name
        session_start();            // Start the PHP session
        session_regenerate_id();    // regenerated the session, delete the old one.
    }

    function login($email, $password, $mysqli) {
        // Using prepared statements means that SQL injection is not possible.
        if ($stmt = $mysqli->prepare("SELECT id, username, password, salt
        FROM members
       WHERE email = ?
        LIMIT 1")) {
            $stmt->bind_param('s', $email);  // Bind "$email" to parameter.
            $stmt->execute();    // Execute the prepared query.
            $stmt->store_result();

            // get variables from result.
            $stmt->bind_result($user_id, $username, $db_password, $salt);
            $stmt->fetch();

            // hash the password with the unique salt.
            $password = hash('sha512', $password . $salt);
            if ($stmt->num_rows == 1) {
                // If the user exists we check if the account is locked
                // from too many login attempts

                if (checkbrute($user_id, $mysqli) == true) {
                    // Account is locked
                    // Send an email to user saying their account is locked
                    return false;
                } else {
                    // Check if the password in the database matches
                    // the password the user submitted.
                    if ($db_password == $password) {
                        // Password is correct!
                        // Get the user-agent string of the user.
                        $user_browser = $_SERVER['HTTP_USER_AGENT'];
                        // XSS protection as we might print this value
                        $user_id = preg_replace("/[^0-9]+/", "", $user_id);
                        $_SESSION['user_id'] = $user_id;
                        // XSS protection as we might print this value
                        $username = preg_replace("/[^a-zA-Z0-9_\-]+/",
                            "",
                            $username);
                        $_SESSION['username'] = $username;
                        $_SESSION['login_string'] = hash('sha512',
                            $password . $user_browser);
                        // Login successful.
                        return true;
                    } else {
                        // Password is not correct
                        // We record this attempt in the database
                        $now = time();
                        $mysqli->query("INSERT INTO login_attempts(user_id, time)
                                    VALUES ('$user_id', '$now')");
                        return false;
                    }
                }
            } else {
                // No user exists.
                return false;
            }
        }
    }*/

    /*function checkbrute($user_id, $mysqli) {
        // Get timestamp of current time
        $now = time();

        // All login attempts are counted from the past 2 hours.
        $valid_attempts = $now - (2 * 60 * 60);

        if ($stmt = $mysqli->prepare("SELECT time
                             FROM login_attempts <code><pre>
                             WHERE user_id = ?
                            AND time > '$valid_attempts'")) {
            $stmt->bind_param('i', $user_id);

            // Execute the prepared query.
            $stmt->execute();
            $stmt->store_result();

            // If there have been more than 5 failed logins
            if ($stmt->num_rows > 5) {
                return true;
            } else {
                return false;
            }
        }
    }*/
}