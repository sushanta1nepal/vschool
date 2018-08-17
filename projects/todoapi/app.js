var section = document.querySelector("section");
var form = document.querySelector("form");
var btn = document.querySelector("button");

var url = "https://api.vschool.io/sushant/todo/";

var displayTodo = function(todo){
    var wrapper = document.createElement("div");
    var h3 = document.createElement("h3");

    h3.innerHTML = todo.title;

    var des = document.createElement("p");

    des.innerHTML = todo.description;
    
    var price = document.createElement("p");
    price.innerHTML = todo.price;

    var delt = document.createElement("button");
    delt.textContent = "Delete";


    delt.addEventListener('click', function(){
        // axios delete to todo._id
        axios
            .delete(url + todo._id).then(function(res){
                console.log(res)
            }).catch(function(err){

            })
    })

    var label = document.createElement("label");
    label.id = "label";
    label.innerHTML = "complete";

    var input = document.createElement("input");
    input.id = "checkbox";
    input.type = "checkbox";
    label.appendChild(input);
    

    wrapper.appendChild(h3);
    wrapper.appendChild(des);
    wrapper.appendChild(price);
    wrapper.appendChild(label);
    wrapper.appendChild(delt)

    section.appendChild(wrapper);
};

axios
    .get(url)
    .then(function(response){
        var todos = response.data;
        todos.forEach(displayTodo)
    })
    .catch(function(err){
        console.log(err);
    });

form.addEventListener("submit", function(e){
    e.preventDefault();

    var output = {};

    function addTodo(todoItem){
        axios
            .post(url, todoItem)
            .then(function(response){
                console.log(response.data);
            })
            .catch(function(err){
                console.log(err);
            });
    }

    addTodo({
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value
    }),
    displayTodo(addTodo)
});


