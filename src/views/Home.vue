<template>
<shopping-list></shopping-list>
</template>

<script>
import ShoppingList from "../components/ShoppingList";
import {EventBus} from "../utils/eventBus";

export default {
  components: {
    ShoppingList,
  }
}

const clickHandler = () => {
  console.log("Button was clicked");
}

EventBus.$on('button-clicked', clickHandler);


</script>
