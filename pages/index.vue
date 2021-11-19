<template>
  <div>
    <div class="mb-8">
      <div class="max-w-5xl mx-auto mt-12">
        <div class="text-white text-center mb-8">
          <img src="@/assets/img/logo.png" class="mx-auto h-24 mb-4" />
          <h1 class="font-bold text-4xl">Fake Twitter NFT Avatar</h1>
          <p class="font-semibold text-xl">Give your profile picture a hexagonal shape!</p>
          <p class="text-md mt-1">
            Open source on <a class="text-blue-500 hover:text-blue-600 transition duration-50" href="https://github.com/tandpfun/nft-avatar" target="_blank">GitHub</a>. Made by
            <a class="text-blue-500 hover:text-blue-600 transition duration-50" href="https://twitter.com/cdngdev" target="_blank">@cdngdev</a>.
          </p>
        </div>
        <ImageEditor />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
body {
  background: #15202b;
  font-family: 'Roboto', sans-serif;
}
</style>
