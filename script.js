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
    },

    underline(task) {
      task.done = !task.done
    }

    },
      mounted(){
      console.log("montato");
    },
   
}).mount('#app');