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
    <ul class="list-group">
      <li
          v-for="(task, index) in tasks"
          :key="task.id"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        {{ task }}
        <span @click="deleteTask(index)" class="badge badge-danger badge-pill">
          <i class="fas fa-times-circle"></i
          ></span>
      </li>
    </ul>
    <syncfusion-grid
        allowSorting
        :dataSource='[{"OrderID":10248,"CustomerID":"VINET","Freight":32.38},{"OrderID":10249,"CustomerID":"TOMSP","Freight":11.61},{"OrderID":10250,"CustomerID":"HANAR","Freight":65.83},{"OrderID":10251,"CustomerID":"VICTE","Freight":41.34},{"OrderID":10252,"CustomerID":"SUPRD","Freight":51.3},{"OrderID":10253,"CustomerID":"HANAR","Freight":58.17},{"OrderID":10254,"CustomerID":"CHOPS","Freight":22.98},{"OrderID":10255,"CustomerID":"RICSU","Freight":148.33},{"OrderID":10256,"CustomerID":"WELLI","Freight":13.97}]'
        :rowHeight="48"
    />
  </div>
</template>

<script>

export default {
  name: "ShoppingList",
  data() {
    return {
      tasks: ["Create TODO app", "Task2"],
      task: "",
    };
  },
  methods: {
    addTask() {
      console.log("Add task")
      if (this.task) {
        this.tasks.push(this.task);
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