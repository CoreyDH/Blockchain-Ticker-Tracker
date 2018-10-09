<template>
    <div class="col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-md-2">
                <BlockchainTickerFilters 
                    :currencies="currencies"
                    :filteredCurrencies="filteredCurrencies" />
            </div>
            <div class="col-xs-12 col-md-10">
                <BlockchainTickerPrices 
                    :tickerData="filteredTickerData"
                    :getTickerData="getTickerData" />
            </div>
        </div>
    </div>
</template>

<script>
import BlockchainTickerPrices from './BlockchainTickerPrices/BlockchainTickerPrices'
import BlockchainTickerFilters from './BlockchainTickerFilters/BlockchainTickerFilters'
import { bus } from '../../../main';
import { sortArrByKey } from '../../../helpers/helpers.js'

export default {
  name: 'BlockchainTicker',
  components: {
      BlockchainTickerPrices,
      BlockchainTickerFilters
  },
  data() {
      return {
          currencies: [],
          filteredCurrencies: {},
          tickerData: [],
          sorted: {}
      }
  },
  methods: {
      getTickerData() {
           this.$http.get('https://blockchain.info/ticker')
                .then(
                    response => {
                        this.currencies = Object.keys(response.body);
                        this.tickerData = this.currencies.map(cur => {
                            response.body[cur].currency = cur;

                            return response.body[cur];
                        });

                        return response.body;
                    }, 
                    response => { throw new Error('GET REQUEST for ticker failed', response) }
                );
      },
      setSorted(sObj) {
          if(sObj.dir && sObj.sortBy) {
              this.sorted = {...sObj};
          }
      }
  },
  created() {
      this.getTickerData();

      // Sort Column data from event in component(s):
      // ./BlockchainTickerPrices/BlockchainTickerTable/BlockchainTickerTable
      bus.$on('sortColumn', this.setSorted);
  },
  computed: {
      filteredTickerData() {
          let filteredArr = [...(this.tickerData.filter(tData => !this.filteredCurrencies[tData.currency]))];

          if(this.sorted) {
              filteredArr = sortArrByKey(filteredArr, this.sorted);
          }

          return filteredArr;
      }
  }
}
</script>
