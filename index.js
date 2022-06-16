let db;
function preload() {
  db = loadJSON("db.json");
}


function add(val) {
  db.vals.push(val);
  
}