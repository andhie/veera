/*globals DevTools: true, State: true*/
var UPDATED = false;

DevTools.init(); //Listen for devtools conn
State.options.theme.current = 0; //TODO: Replace with proper options parsing and defaults setting

//Old function, kept for now due to ease of reading intended use.
function updateUI (type, value) {
    DevTools.send(type, value);
}
