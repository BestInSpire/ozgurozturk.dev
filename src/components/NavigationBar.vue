<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

let isClosed = ref(true);
const menuButton = () => {
  isClosed.value = !isClosed.value;
};

const goRoute = (link: string) => {
  router.push(link);
  isClosed.value = true;
};

const goLink = (link: string) => {
  window.open(link, "_blank", "noreferrer");
};
</script>

<template>
  <nav>
    <h1>BestInSpire</h1>
    <ul :class="{ closed: isClosed }">
      <li @click="goRoute('/')">
        <i class="bx bxs-user-detail"></i>My Self
      </li>
      <li @click="goRoute('/blog')"><i class="bx bxl-blogger"></i>Blog</li>
      <li @click="goRoute('/contact')">
        <i class="bx bxs-phone-call"></i>Contact
      </li>
      <li @click="goLink('https://github.com/bestinspire')">
        <i class="bx bxl-github"></i>Github
      </li>
    </ul>
    <div></div>
    <i class="bx bx-menu" :class="{ closed: isClosed }" @click="menuButton"></i>
  </nav>
</template>

<style lang="sass" scoped>
@import ../assets/sass/components/navbar.sass
</style>
