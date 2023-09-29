const {createApp}= Vue;

createApp ({
  data(){
      return{
          tasks: [
          {
            text: "fare la spesa",
            done:false
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
          selectFirst: false,
          
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
    removeTask(task, index){

      if (task.done==true) {
        this.tasks.splice(index,1)
      }else{
        this.selectFirst = true 
        setTimeout(() =>{
          this.selectFirst=false
        },3000)
        
        
      }
        
    },

    underline(task) {
      task.done = !task.done
    }

    },
      mounted(){
      console.log("montato");
    },
   
}).mount('#app');