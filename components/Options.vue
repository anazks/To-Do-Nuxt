<template>
    <div class="fixed bottom-2  inset-x-0 flex justify-center">
      <div class="flex space-x-4">
        <button @click="pendingTask" class="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transform transition hover:scale-105">Pending</button>
        <button    @click="compleatedTask"  class="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transform transition hover:scale-105">Completed</button>
        <button    @click="getAll"  class="px-6 py-3 bg-black text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-blue-500 transform transition hover:scale-105">All</button>

    </div>
    </div>
  </template>
  

<script>
    export default {
        methods:{
            pendingTask(){
                let value = false;
                 this.$emit("pendingFunction",value);
                console.log("hai")
            },
            compleatedTask(){
                let value = true;
                 this.$emit("pendingFunction",value);
                console.log("hai")
            },
            getAll(){
                this.$emit("getTasks");
            }
        }
    }
</script>

<style>

</style>