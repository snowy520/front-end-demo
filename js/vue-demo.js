/**
 * Created by xueliming on 9/5/16.
 */
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    newTodo: '',
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue.js' },
      { text: 'Build Something Awesome' }
    ]
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    addTodo: function () {
      var text = this.newTodo.trim();
      if (text) {
        this.todos.push({ text: text });
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
});

var MyComponent = Vue.extend({});
var myComponentInstance = new MyComponent();
