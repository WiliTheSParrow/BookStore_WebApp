var app = new Vue({
    el: "#app",
    data: {
        allbooks: [],
        filteredBooks: [],
        searchKey: "",
        hideTable: false,
        hideNoMatch: true
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
    },

    computed: {
        filterBooks: function () {
            this.filteredBooks = this.allbooks.filter((allbooks) => {
                return allbooks.title.toLowerCase().match(this.searchKey.toLowerCase()) || allbooks.description.toLowerCase().match(this.searchKey.toLowerCase()) || allbooks.language.toLowerCase().match(this.searchKey.toLowerCase());
            });
            if (this.filteredBooks == "") {
                this.hideTable = true;
                this.hideNoMatch = false;
            } else {
                this.hideTable = false;
                this.hideNoMatch = true;
            }
            return this.filteredBooks;
        }
    },
})