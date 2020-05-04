<template>
    <video v-if="isVideo"
           width="100%"
           height="100%"
           autoplay="autoplay"
           loop="loop"
           controls="controls"
           controlsList="nodownload"
           muted="muted">
        <source :src="item.metadata.image" type="video/webm">
    </video>
    <img v-else :src="item.metadata.image" style="max-height: 100px; vertical-align: center" :alt="item.metadata.name">
</template>

<script>
  import * as _ from "lodash";

  const isFileType = (imageUri, extension) => {
    // Fall back to trying to work out if its based on file extension
    // Used when we only have token data and not edition data
    return imageUri && _.indexOf([extension], _.last(imageUri.split('.')).toLowerCase()) > -1;
  };

  const isWebM = (imageUri) => {
    return isFileType(imageUri, 'webm');
  };

  export default {
    name: 'editionAsset',
    props: ['item'],
    components: {},
    computed: {
      isVideo() {
        return isWebM(this.item.metadata.image);
      },
    }
  };
</script>

<style scoped lang="scss">
    .video-container {
        height: 20em;
    }
</style>
