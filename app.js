const app = Vue.createApp({
    //template: '<h2>This is a template </h2>'
    data(){
        return{
            url: 'https://twitter.com',
            showBooks : true,
            age: '22',
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg',isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg',isFav: false},
            ]
        }
    },
    methods:{
        changeTitle(title){
            //this.title = 'something else' v
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
             this.x = e.offsetX
             this.y = e.offsetY
        },
        toggleFav(book){
           book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})
app.mount('#app') 