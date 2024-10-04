<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
  const content: string[] = ["Java", "C & C++", "TypeScript", "Vue.JS", "Sass"];

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
      I am a Freelance Front-End Developer living in Istanbul, Turkey.
      I strive to create immersive and beautiful web applications through carefully crafted code and user-centric design.
      Additionally, I continue to improve myself in game and system programming.
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/sass/global/veriables.sass

.container
  margin-top: 90px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 50px
  width: 100%
  margin-bottom: 100px

  .details
    width: 35%
    color: $white

  .image
    width: 350px
    height: 350px
    background-image: url("../assets/images/profile.jpeg")
    background-position: center
    background-repeat: no-repeat
    background-size: cover
    border-radius: 50%
    border: 10px solid $gray2
  .asd
    display: none

  #text
    display: inline-block
    vertical-align: middle
    color: $blue
    letter-spacing: 2px
    height: 41px

  #cursor
    display: inline-block
    vertical-align: middle
    width: 3px
    height: 40px
    margin-left: 5px
    background-color: $white
    animation: blink 1s step-end infinite

  @keyframes blink
    from,
    to
      background-color: transparent

    50%
      background-color: $white

@media only screen and (min-width: 100px) and (max-width: 768px)
  .container
    .image
      height: 350px
      width: 350px
    .details
      width: 75%
      text-align: center
      .asd
        display: block
</style>