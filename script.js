const {createApp}= Vue;

createApp ({
  data(){
      return{
          tasks: [
          {
            text: "fare la spesa",
            done:true
          },
          {
            text: "fare la pasta",
            done:false
          },
          {
            text: "fare la carne",
            done:false
          }
        ],
          

          newTask:'',
          isError: false,
          isUnderlined: false
      } 

  },

  methods:{
    addTask(){
        if (this.newTask.length < 5) {
            this.isError = true   
        } else{

          var object = {
            text: this.newTask,
            done: false
          }
            this.tasks.push(object);
            this.newTask=''
            this.isError = false
        }
      

    },
    removeTask(index){
        this.tasks.splice(index,1)
    }
    },
      mounted(){
      console.log("montato");
    },
    underline() {
      this.isUnderlined = !this.isUnderlined;
    }
}).mount('#app');