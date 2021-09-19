var txt = "ABCD";
var sln = txt.length;

var t = new Date();
document.getElementById("demo").innerHTML=t.getTime();

var d = new Date();
document.getElementByID("demo").innerHTML=d.getFullYear();


<button onclick="myFunction()">Confirm you are not a Bandit</button>


function myFunction() {
  alert("Bandits Detected!");
}


var studentMarks = [['Maths', 80], ['English', 77], ['Japanese', 88], ['Geography', 95], ['History', 68]];

var Avgmarks = 0;

for (var i=0; i < studentMarks.length; i++) {
        Avgmarks += studentMarks[i][1];
        var avg = (Avgmarks/studentMarks.length);
  {

console.log("Total Score: " + studentmarks);
console.log("Average grade: " + (Avgmarks)/studentMarks.length);
console.log("List of scores: " + System.out.println(Arrays.toString(array))

         
  }




//Vue Component
<div id="app">
  <ol>
    <todo-item
      v-for="item in List"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app-7',
  data: {
    List: [
      { id: 0, text: 'Morphing Cube' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Oatmeal' }
    ]
  }
})
