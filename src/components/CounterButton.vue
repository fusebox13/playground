<template>
    <div>
        <button @click="increment">{{btnText}}</button>
        <span>{{counter}}</span>
    </div>
</template>

<script>
export default {
    name: "CounterButton",
    data: () => {
        return {
            counter: 1,
        }
    },
    methods: {
        increment: function() {
            this.$emit('blah', 12);
            this.counter++;
        },
    },
    props: {
        btnText: String
    },
 
};
</script>

