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
                    :tickerData="filteredTickers"
                    :getTickerData="getTickerData" />
            </div>
        </div>
    </div>
</template>

<script>
import BlockchainTickerPrices from './BlockchainTickerPrices/BlockchainTickerPrices'
import BlockchainTickerFilters from './BlockchainTickerFilters/BlockchainTickerFilters'
import { bus } from '../../../main';

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
          tickerData: []
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
      sortData(sortBy, dir = 'asc') {
          if(this.tickerData && sortBy) {
              this.tickerData = this.tickerData.sort(function(a, b) {

                if(dir === 'desc') {
                    let temp = a;
                    a = b;
                    b = temp;
                }

                if(typeof a[sortBy] === 'string')
                    return a[sortBy].localeCompare(b[sortBy]);
                
                if(typeof a[sortBy] === 'number')
                    return a[sortBy] - b[sortBy];
            });
          }
      }
  },
  created() {
      this.getTickerData();

      // Sort Column data from event
      bus.$on('sortColumn', this.sortData);
  },
  computed: {
      filteredTickers() {
          return this.tickerData.filter(tData => this.filteredCurrencies[tData.currency])
      }
  }
}
</script>
