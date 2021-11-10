function display(Value) {
    document.getElementById("monitor").value+=Value;
}
function compute() {
   x = document.getElementById("monitor").value;
   y = eval(x);
   document.getElementById("monitor").value = y;
}
function ac() {
    document.getElementById("monitor").value = "";
}