<template>
  <div class="todo container">
    <h1>Shopping List</h1>
    <br /><br /><br />

    <div class="input-wrapper">
      <SyncfusionTextBox
          @keyup.enter.native="addTask"
          v-model="task"
          css-class="curr-input-normal-outlined"
          floatLabelType="Auto"
          label="Item"
          id="taskInput"
      ></SyncfusionTextBox>
    </div>
    <br />
    <br />
    <SyncfusionButton @click.native="addTask" cssClass="curr-btn curr-btn-normal-filled-primary curr-icon-before-plus">Submit</SyncfusionButton>
    <br />

    <ejs-grid ref="grid" :allowSorting="true" :dataSource="tasks"></ejs-grid>

  </div>
</template>

<script>
import {GridPlugin, Sort} from "@syncfusion/ej2-vue-grids";

export default {
  name: "ShoppingList",
  data() {
    return {
      tasks: [{"Task": "Task1", "Date":  new Date().toLocaleString()}, {"Task": "Task2", "Date": new Date().toLocaleString()}],
      task: "",
    };
  },
  provide: {
    grid: [Sort]
  },
  methods: {
    addTask() {
      if (this.task) {
        console.log("Add task")
        this.tasks.push({"Task": this.task, "Date":  new Date().toLocaleString()});
        this.task = "";
        this.$refs.grid.refresh();
      }
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
  },
}
</script>

<style scoped>

</style>