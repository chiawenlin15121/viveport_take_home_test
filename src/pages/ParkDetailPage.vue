<template lang="pug">
section
  .nav.sticky-top.border-bottom.shadow-sm.d-flex.align-items-center.justify-content-between
    .backBtn.btn(@click="goBack") < Back
    h1.flex-grow-1.text-center.overflow-auto.text-nowrap {{ title }}
  .container-fluid.content.py-3
    .not-found.d-flex.justify-content-center.align-items-center(
      v-if="notFound"
    )
      p Park Not Found
    .content.d-flex.flex-column(v-else)
      p {{ description }}
      #map
      .border-bottom
      h2 {{ location }}
      h3.text-muted.small {{ transit }}
</template>

<script>
import { mapGetters } from 'vuex'
import Map from '../helpers/Map'

export default {
  props: {
    parkId: {
      type: Number
    }
  },
  data() {
    return {
      notFound: false,
      title: '',
      description: '',
      location: '',
      longitude: '',
      latitude: '',
      transit: '',
      map: undefined
    }
  },
  beforeMount() {
    this.notFound = this.parkId === undefined
    if (!this.notFound) {
      const parkDetail = this.getParkDetail(this.parkId)
      if (!parkDetail) {
        this.notFound = true
        return
      }
      this.title = parkDetail.title
      this.location = parkDetail.location
      this.longitude = parkDetail.longitude
      this.latitude = parkDetail.latitude
      this.description = parkDetail.description
      this.transit = parkDetail.transit
    }
  },
  mounted() {
    const { latitude, longitude } = this
    this.map = new Map('map', latitude, longitude)
    this.map.addMarker({ latitude, longitude })
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters('parks', {
      getParkDetail: 'detail'
    })
  }
}
</script>

<style lang="scss">
$nav-height: 60px;
#map {
  height: 280px;
}
.nav {
  height: $nav-height;
  padding-left: 100px;
  padding-right: 100px;
  .backBtn {
    width: 100px;
    position: absolute;
    left: 0;
  }
}
.content {
  padding-top: -$nav-height;
}
.not-found {
  height: calc(100vh - $nav-height);
}
</style>
