<template>
<div class="header">
    <div class="title">
        <h2>Form Generator</h2>
    </div>
</div>
</template>

<script>
export default {
    name: "header",
};
</script>

<style scoped>
.header {
    width: 100%;
    background-color: white;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px 15px;
}

.header > .title{
    border-bottom: 2px solid gray;
    font-size: 20px;
}

</style>
