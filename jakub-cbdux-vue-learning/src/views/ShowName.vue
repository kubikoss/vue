<template>
  <div>
    <h1>Ukazat jmeno</h1>
    <p>Jmeno: {{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  name: "ShowName",
};
</script>
