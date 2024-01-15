
var a = eval(prompt("Nhập vào cạnh a:"));
var b = eval(prompt("Nhập vào cạnh b:"));
var c = eval(prompt("Nhập vào cạnh c:"));
if (a + b > c && a + c > b && b + c > a) {
    if (a == b && a == c && b == c) {
       document.writeln("Tam giac đều")
    }
    else if (a == b || a == c || b == c) {
       document.writeln("Tam giác cân")
    }
    else {
       document.writeln("Tam giác thường")
    }
}
else {
   document.writeln("Khong phải tam giác")
}
