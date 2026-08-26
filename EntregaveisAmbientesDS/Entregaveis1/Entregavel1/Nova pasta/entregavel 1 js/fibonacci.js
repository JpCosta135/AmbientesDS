<script>
var n = prompt("Número de termos:");
var a = 0;
var b = 1;
var i = 2;
var c;
27
if (n == 1) {
 document.write(a);
} else {
 document.write(a + ", " + b);
}
while (i < n) {
 i = i + 1;
 c = a + b;
 document.write(", " + c);
 a = b;
 b = c;
}
</script>
