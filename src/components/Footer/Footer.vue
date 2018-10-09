<template>
    <footer>
        <div class="col-xs-12">
            <div class="dnb-global-footer dnb-global-footer-product">
                <div class="product-name" v-on:click="changeAsdf">
                    <img src="../../assets/img/dnb_full_logo.png" />
                    <span class="prod-name">Blockchain Ticker Tracker</span>
                </div>
                <!-- <div class="company-info">
                    <ul class="legal">
                        <li class="copyright">© Dun &amp; Bradstreet, Inc. 2015. All Rights Reserved.</li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms </a></li>
                    </ul>
                </div> -->
            </div>
        </div>
    </footer>
</template>

<script>
import { bus } from '../../main'

export default {
  name: 'Footer',
  methods: {
      changeAsdf () {
        //   console.log('hit adsf');
          bus.$emit('changeTest', 'asdfasdf')
      }
  }
}
</script>
