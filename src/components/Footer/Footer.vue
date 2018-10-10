<template>
    <footer>
        <div class="col-xs-12">
            <div class="dnb-global-footer dnb-global-footer-product">
                <div class="product-name" v-on:click="changeAsdf">
                    <img src="../../assets/img/dnb_full_logo.png" />
                    <span class="prod-name">Blockchain Ticker Tracker</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { bus } from '../../main'

export default {
  name: 'Footer'
}
</script>
