<template>
    <div class="table-responsive-sm">
        <table id="ticker-table"  class="table dataTable table-hover">
            <thead>
                <tr>
                    <th class="sorting" v-for="headings in tableHeadings" v-bind:key="`${headings}-th`" v-on:click="sortColumn">{{ headings | capitalize }}</th>
                </tr>
            </thead>
            <tbody>
                <transition-group name="fade" tag="tr" v-for="ticker in tickerData" v-bind:key="`${ticker.currency}-tr`">
                    <td v-for="headings in tableHeadings" v-bind:key="`${ticker}-${headings}-td`">
                        <div class="mobile-th">{{ headings | capitalize }}</div>
                        <div v-if="isNaN(ticker[headings])">{{ ticker[headings] }}</div>
                        <div v-else>{{ ticker.symbol }} {{ ticker[headings] }}</div>
                    </td>
                </transition-group>
            </tbody>
        </table>
    </div>
</template>

<script>
import { bus } from '../../../../../main';
import './blockchainticker-table.css';

export default {
  name: 'BlockchainTickerTable',
  props: {
      tickerData: Array
  },
  data() {
      return {
          tableHeadings: ['currency', 'last', 'buy', 'sell']
      }
  },
  methods: {
      sortColumn() {
        //   console.log(this);
          bus.$emit('sortColumn', 'last');
      }
  }
}
</script>
