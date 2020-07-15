<template>
    <span>
        <video v-if="isVideo"
               ref="videoPlayer"
               width="100%" height="100%"
               autoplay
               loop
               controls
               muted
               disablePictureInPicture
               controlsList="nodownload"
               :poster="cardAsset"
               :alt="item.metadata.name">
            <source :src="videoAsset" type="video/webm" v-if="isWebM">
            <source :src="videoAsset" type="video/mp4" v-else-if="isMp4">
            <p>
                Sorry your browser doesn't support HTML5 video.
            </p>
        </video>
        <span v-else v-lazy-container="{ selector: 'img' }">
            <img
                    :data-src="`https://cdn.knownorigin.io/cdn/images/network/1/edition/${item.editionNumber}`"
                    data-loading="https://knownorigin.io/static/64px_missingImageIcon.svg"
                    style="max-height: 300px; max-width: 300px; vertical-align: center"
                    :alt="item.metadata.name"
            >
        </span>
    </span>
</template>

<script>
  import * as _ from "lodash";

  const isFileType = (imageUri, extension) => {
    // Fall back to trying to work out if its based on file extension
    // Used when we only have token data and not edition data
    return imageUri && _.indexOf([extension], _.last(imageUri.split('.')).toLowerCase()) > -1;
  };

  export default {
    name: 'editionAsset',
    props: ['item'],
    components: {},
    computed: {
      isWebM() {
        const assetReference = this.item.metadata.animation_url || this.item.metadata.image;
        return isFileType(assetReference, 'webm')
      },
      isMp4() {
        const assetReference = this.item.metadata.animation_url || this.item.metadata.image;
        return isFileType(assetReference, 'mp4')
      },
      videoAsset() {
        return `https://cdn.knownorigin.io/cdn/images/network/1/edition/${this.item.editionNumber}`;
      },
      cardAsset() {
        return `https://cdn.knownorigin.io/cdn/images/network/1/edition/${this.item.editionNumber}/card`;
      },
      isVideo() {
        return this.isWebM || this.isMp4;
      },
    }
  };
</script>

<style scoped lang="scss">
    .video-container {
        height: 20em;
    }
</style>
