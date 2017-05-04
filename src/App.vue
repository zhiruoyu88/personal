<template>
    <div id="app">
        <hello></hello>
        <fuck></fuck> 
    </div>
</template>

<script>
import Hello from './components/Hello'
import Fuck from './components/Fuck'

export default {
    components: {
        Hello,
        Fuck
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
}
</style>
