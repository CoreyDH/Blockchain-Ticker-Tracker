<template>
  <div id="app">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import './assets/css/dnb-product-design-guide.css'
import './assets/css/custom.css'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>
