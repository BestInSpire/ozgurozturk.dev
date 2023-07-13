<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
  const content: string[] = ["TypeScript", "Vue.JS", "Sass"];

  let intervalVal: number | undefined;
  let part: number = 0;
  let partIndex: number = 0;
  let element: Element | null = document.querySelector("#text");
  let cursor: HTMLElement | null = document.getElementById("cursor");

  const TypeText: () => void = () => {
    const text: string = content[part].substring(0, partIndex + 1);
    if (element) element.innerHTML = text;
    partIndex = partIndex + 1;
    if (text === content[part]) {
      clearInterval(intervalVal);
      setTimeout(function () {
        intervalVal = setInterval(DeleteText, 50);
      }, 2 * 1000);
    }
  };

  const DeleteText: () => void = () => {
    const text: string = content[part].substring(0, partIndex - 1);
    if (element) element.innerHTML = text;
    partIndex = partIndex - 1;

    if (text === "") {
      clearInterval(intervalVal);
      if (part == content.length - 1) {
        part = 0;
      } else {
        part = part + 1;
      }
      partIndex = 0;

      setTimeout(() => {
        if (cursor) cursor.style.display = "inline-block";
        intervalVal = setInterval(TypeText, 150);
      }, 200);
    }
  };
  intervalVal = setInterval(TypeText, 150);
});
</script>
<template>
  <div class="container">
    <div class="image"></div>
    <div class="details">
      <h1>
        Enjoys Writing
        <br class="asd" />
        <div id="text"></div>
        <div id="cursor"></div>
      </h1>
      <br />
      I'm a Freelance Frontend Developer based in İstanbul, Turkey. I strives to
      build immersive and beautiful web applications trough carefully crafted
      code and user-centric desgin.
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/sass/pages/home.sass
</style>
