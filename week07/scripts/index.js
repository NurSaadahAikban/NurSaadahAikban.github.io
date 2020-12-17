var app=new Vue({
    el: "#app",
    data:{
        message: "Hello World"
    }
});

let app2 = new Vue({
    el:"#app2",
    data:{
        message: "Your loaded this page on "+ new Date().toLocaleString()


    }
});