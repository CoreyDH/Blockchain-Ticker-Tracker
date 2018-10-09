<template>
    <div class="panel panel-table">
        <div class="panel-heading">
            <h3 class="panel-title">Bitcoin Prices</h3>
        </div>
        <div class="panel-body">
            <BlockchainTickerTable 
                v-show="tickerData"
                :tickerData="tickerData"
            />
        </div>
        <div class="panel-footer text-center" v-show="tickerData">
            <button class="btn btn-primary" v-on:click="getTickerData">Refresh Prices</button>
        </div>
    </div>
</template>

<script>
import BlockchainTickerTable from './BlockchainTickerTable/BlockchainTickerTable'

export default {
  name: 'BlockchainTickerPrices',
  props: {
      tickerData: Array,
      getTickerData: Function
  },
  components: {
      BlockchainTickerTable
  }
}
</script>
