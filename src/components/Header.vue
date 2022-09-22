<template>
<div class="header">
    <div class="title">
        <h2>Form Builder</h2>
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 20px;
    padding: 20px 15px;
    text-transform: uppercase;
    letter-spacing: 7px;
    position: fixed;
    z-index: 1;
}

.header>.title {
    font-size: 20px;
}
</style>
