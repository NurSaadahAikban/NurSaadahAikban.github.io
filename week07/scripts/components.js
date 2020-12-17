Vue.component("todo-item",{
    //variable that prepare to our component
    props:["todo"],
    //how to render our component
    template:"<li> {{todo.text}} </li>"
});

let app7 = new Vue({
    el:"#app7",
    data:{
        groceryList: [
            {
                id:0,
                text:"Vegetables"
            },
            {
                id=1,
                text:"Cheese"
            },
            {
                id:2,
                text:"Drinks"
            },
            {
                id:3,
                text:"Proteins"
            }
        ]
    }
});