function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;

    if (networkState === Connection.NONE) {
        document.getElementById('connected').innerHTML = 'You have no Internet connection :-(';
    } else {
        document.getElementById('connected').innerHTML = 'You are connected to the Internet :-)';

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';

        document.getElementById('state').innerHTML = 'Your connection type: ' + states[networkState];
    }
}