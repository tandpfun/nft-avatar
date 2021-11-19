<template>
  <div class="flex flex-col md:flex-row items-center justify-center">
    <div class="flex flex-col justify-center items-center px-4">
      <p class="text-yellow-400 font-semibold text-xl mb-2">upload</p>
      <div class="border border-dashed border-yellow-300 p-5 md:mx-8 text-white rounded-md w-96 bg-gray-800">
        <div class="container flex flex-col items-center">
          <img ref="uploadPreview" class="w-32 h-32 object-contain mb-4 rounded-full" :src="image" />
          <input ref="uploadFile" class="flex flex-row items-center justify-center" type="file" accept="image/*" @change="imageChange" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center px-4 mt-8 md:mt-0">
      <p class="text-yellow-400 font-semibold text-xl mb-2">output</p>
      <div class="border border-dashed border-yellow-300 p-5 md:mx-8 text-white rounded-md w-96 bg-gray-800">
        <div class="container flex flex-col items-center">
          <canvas ref="outputCanvas" class="mb-4 w-32 h-32" width="250" height="250"></canvas>
          <a
            ref="downloadButton"
            class="border-yellow-300 border-2 rounded-lg py-1 px-2 duration-200 hover:bg-yellow-300 hover:text-black font-semibold cursor-pointer"
            @click="downloadImage"
            >Download Image</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=',
      hexagon: null,
    };
  },
  mounted() {
    const image = new Image();
    image.src = '/hexagon.png';
    this.hexagon = image;

    const canvas = this.$refs.outputCanvas;
    const ctx = canvas.getContext('2d');

    image.onload = function () {
      ctx.drawImage(image, 0, 0, 250, 250);
    };
  },
  methods: {
    imageChange(event) {
      const _this = this;
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;

      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        _this.image = e.target.result;
        this.generateImage();
      };
      reader.readAsDataURL(file);
    },
    generateImage() {
      const canvas = this.$refs.outputCanvas;
      const ctx = canvas.getContext('2d');

      ctx.globalCompositeOperation = 'source-over';

      ctx.drawImage(this.hexagon, 0, 0, 250, 250);
      ctx.globalCompositeOperation = 'source-in';

      const image = new Image();
      image.onload = function () {
        ctx.drawImage(image, 0, 0, 250, 250);
      };
      image.src = this.image;
    },
    downloadImage() {
      const canvas = this.$refs.outputCanvas;
      const imageUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.download = 'nft-avatar.png';
      link.href = imageUrl;
      link.click();
    },
  },
};
</script>
