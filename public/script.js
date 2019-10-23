var app = new Vue({
    el: "#app",
    data: {
        allbooks: []
    },
    created: function () {
        this.getData("https://api.myjson.com/bins/14f61w");
    },
    methods: {
        getData: function (link) {
            fetch(link, {
                    method: "GET",
                })
                .then(response => response.json())
                .then(json => {
                    data = json;
                    app.allbooks = data.books;
                })
                .catch(error => error);
        }
    }
})