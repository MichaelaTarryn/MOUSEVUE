const app=Vue.createApp({
    data(){
        return{
            showBooks:true,
            title:'the final empire',
            author:'Brnadon Sanderss',
            Age:20,
            x:0,
            y:0
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        },
        mouseEvent(e,data){
            console.log(e,e.type);
            if(data){
            console.log(data);
        }
        },
        mousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        }
        
    }
    
});
app.mount('#app');