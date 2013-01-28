/**
 * SocialNetwork
 * Interface
 *
 * There is no interface type on JavaScript, so this file tries to simulate one
 * All concrete implementations must follow this pattern to guarantee the polymorphism in the system
 * Note that these functions are similar to methods with no implementations
 * Feel free to add any comments to clarify the code
*/

// Returns the name of the Social Network
// Example: "Facebook"
function getName() {};

// Returns the username currently set for this instance
function getUsername() {};

// Sets the username for this instance
function setUsername(username) {};

// Returns the password (plain text) of this instance
function getPassword() {};

// Sets the password for this instance
function setPassword(password) {};

// Returns the unique ID of the user
// This should be a string (although there is no type on JavaScript)
// If the user is not authenticated, returns an error
function getUID() {};

// Checks if the user is authenticated in the Social Network
// Returns a boolean
function isAuthenticated() {};

// Asks the Social Network to authenticate using the credentials set
// Returns a status code based on the server's response:
// 1: OK
// 2: Server timed out
// 3: Username/password is wrong
function requestAuthentication() {};

// Checks if the application has permission to access the user's data
function hasPermission() {};

// Requests permission to the Social Network to access the user's information
// Returns a status code based on the server's response:
// 1: OK
// 2: Server timed out
// 3: Username/password is wrong
function requestPermission() {};

// Tries to add another user as a friend on this Social Network
function addUser(user) {};