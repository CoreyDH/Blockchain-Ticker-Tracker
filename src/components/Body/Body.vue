<template>
    <main>
        <div class="container-fluid page-wrapper" role="main">
            <div class="row">
                <BlockchainTicker />
            </div>
        </div>
    </main>
</template>

<script>
import BlockchainTicker from './BlockchainTicker/BlockchainTicker'

export default {
  name: 'Body',
  components: {
      BlockchainTicker
  }
}
</script>
