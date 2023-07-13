<script setup lang="ts"></script>
<template>
  <div class="container">
    <h2 class="title">About Me</h2>

    <div class="about-me">
      <div class="image-container">
        <div class="image"></div>
      </div>

      <div class="details">
        <ul>
          <li>First Name:<span>Özgür</span></li>
          <li>Last Name:<span>Öztürk</span></li>
          <li>Birthdate:<span>08.05.2003</span></li>
          <li>Nationaly:<span>Turkey</span></li>
          <li>Experience:<span>3 years</span></li>
          <li>Adress:<span>Istanbul</span></li>
        </ul>
        <ul>
          <li>Freelance:<span>Available</span></li>
          <li>Languages:<span>Turkish</span></li>
          <li>Email:<span>ozgur@ozgurozturk.dev</span></li>
          <li>Github:<span>bestinspire</span></li>
          <li>Discord:<span>bestinspire</span></li>
          <li>Instagram:<span>ozguroztrkk</span></li>
        </ul>
      </div>
    </div>

    <h2 class="title">My Skills</h2>

    <div class="my-skills">
      <div class="skill">
        <span class="skill-text">html</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="100"
            style="width: 100%"
          ></span
          ><span class="percent" style="right: calc(1% - 21px)"
            >100%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">css</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="95"
            style="width: 95%"
          ></span
          ><span class="percent" style="right: calc(5% - 22px)"
            >95%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">javascript</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="90"
            style="width: 90%"
          ></span
          ><span class="percent" style="right: calc(10% - 21px)"
            >90%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">vue.js</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="90"
            style="width: 90%"
          ></span
          ><span class="percent" style="right: calc(10% - 21px)"
            >90%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">react.js</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="75"
            style="width: 75%"
          ></span
          ><span class="percent" style="right: calc(25% - 21px)"
            >75%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">angular</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="40"
            style="width: 40%"
          ></span
          ><span class="percent" style="right: calc(60% - 21px)"
            >40%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">svelte</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="65"
            style="width: 65%"
          ></span
          ><span class="percent" style="right: calc(35% - 21px)"
            >65%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">sass</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="65"
            style="width: 65%"
          ></span
          ><span class="percent" style="right: calc(35% - 21px)"
            >65%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">node.js</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="75"
            style="width: 75%"
          ></span
          ><span class="percent" style="right: calc(25% - 21px)"
            >75%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">typescript</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="95"
            style="width: 95%"
          ></span
          ><span class="percent" style="right: calc(5% - 21px)"
            >95%<b class="arrow"></b
          ></span>
        </div>
      </div>

      <div class="skill">
        <span class="skill-text">go</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="30"
            style="width: 30%"
          ></span
          ><span class="percent" style="right: calc(70% - 21px)"
            >30%<b class="arrow"></b
          ></span>
        </div>
      </div>
      <div class="skill">
        <span class="skill-text">mongodb</span>
        <div class="chart-bar">
          <span
            class="item-progress"
            data-percent="100"
            style="width: 100%"
          ></span
          ><span class="percent" style="right: calc(1% - 22px)"
            >100%<b class="arrow"></b
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import ../assets/sass/pages/my-self.sass
</style>
