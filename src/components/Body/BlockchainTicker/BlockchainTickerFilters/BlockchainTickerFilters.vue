<template>
    <div id="bt-filters" class="panel">
        <div class="panel-heading pointer" v-on:click="toggleFilterPanel">
            <h3 class="panel-title"><span class="arrow" v-bind:class="{ 'arrow-right': !showFilters }"></span> Hide Currency</h3>
        </div>
        <div class="panel-body panel-collapse collapse" v-bind:class="{ in: showFilters }">
            <div v-for="cur in currencies" v-bind:key="`${cur}-filter-checkbox-key`">
                <input :id="`${cur}-filter-checkbox`" type="checkbox" v-model="filteredCurrencies[cur]"> <label :for="`${cur}-filter-checkbox`">{{ cur }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import './blockchainticker-filters.css'

export default {
  name: 'BlockchainTickerFilters',
  props: {
      currencies: Array,
      filteredCurrencies: Object
  },
  data() {
      return {
          showFilters: true
      }
  },
  methods: {
      toggleFilterPanel() {
          this.showFilters = !this.showFilters;
      }
  }
}
</script>
