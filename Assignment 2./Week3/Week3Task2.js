<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Strings with Numbers</h2>

<p>The toString() method returns the value of a string.</p>

<p id="demo"></p>

<script>
let numbers = 234;
document.getElementById("demo").innerHTML = numbers.toString();
</script>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join("&");
</script>

</body>
</html>
