<template>
    <div class="table-responsive-sm">
        <table id="ticker-table"  class="table dataTable table-hover">
            <thead>
                <tr>
                    <th 
                        v-for="headings in tableHeadings" 
                        v-bind:key="`${headings}-th`"
                        v-on:click="sortColumn"
                        class="sorting"
                        :data-heading="headings">{{ headings | capitalize }}</th>
                </tr>
            </thead>
            <transition-group name="fade-slide" tag="tbody"> 
                <tr v-for="ticker in tickerData" v-bind:key="`${ticker.currency}-tr`">
                    <td v-for="headings in tableHeadings" v-bind:key="`${ticker}-${headings}-td`">
                        <div class="mobile-th">{{ headings | capitalize }}</div>
                        <div v-if="isNaN(ticker[headings])">{{ ticker[headings] }}</div>
                        <div v-else>{{ ticker.symbol }} {{ ticker[headings].toFixed(2) }}</div>
                    </td>
                </tr>
            </transition-group>
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
          tableHeadings: ['currency', 'last', 'buy', 'sell'] // Headings we want to show
      }
  },
  methods: {
      sortColumn(event) {
        
        // Check if heading is newly clicked
        if(event.target.className === 'sorting') {
            // Reset all TRs to sorting
            for (let tr of event.target.parentElement.children) {
                tr.className = 'sorting';
            }
        }

        // Reference variable to determine class toggling and avoid if else
        const sortingClassRef = {
            'sorting': 'sorting_asc',
            'sorting_asc': 'sorting_desc',
            'sorting_desc': 'sorting_asc',
        };
        
        event.target.className = sortingClassRef[event.target.className];

        // Emit 'sortColumn' to the parent component to sort origin data
        bus.$emit('sortColumn', { sortBy: event.target.dataset.heading, dir: event.target.className.split('_')[1] });
      }
  }
}
</script>
