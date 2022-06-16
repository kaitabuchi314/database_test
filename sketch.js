let txtIn;

function setup() {
  noCanvas();
  txtIn = createInput();
  txtIn.changed(dbadd);
}

function dbadd() {
  add(txtIn.value());
  console.log(db);
}