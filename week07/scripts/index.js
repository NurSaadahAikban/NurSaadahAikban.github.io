var app=new Vue({
    el: "#app",
    data:{
        message: "Hello World"
    }
});

let app2 = new Vue({
    el:"#app2",
    data:{
        message: "Your loaded this page on "+ new Date().toLocaleString(),
        linkURL: "https://bbc.in/2LAnJs8",
        linkText: "Google is down!"

    }
});

let app3 = new Vue({
    el:"#app3",
    data:{
        seen:true
    }
});

let app4= new Vue({
    el:"#app4",
    data:{
        todos:[
            {
                text:"Learn Web Development"
            },
            {
                text:"Learn Laravel"
            },
            {
                text:"Build something awesome"
            }
        ]
    }
});

let app5 = new Vue({
    el:"#app5",
    data: {
        message:"Saadah Aikban"
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
});