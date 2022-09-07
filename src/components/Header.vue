<template>
    <div>
        <div class="container-fluid p-0">
            <nav>
                <div class="brand">
                    LIVE SCORE
                </div>
                <ul class="m-0">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about-us">About Us</router-link>
                    <router-link to="/contact">Contact</router-link>
                </ul>
            </nav>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>

<style>
.brand {
    float: left;
    height: 50px;
    font-size: 1em;
    font-weight: 900;
    padding: 12px 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 3px;
    border: 2px solid black;
    margin: auto 5px;
}

nav {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid black;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #002741;
    /* background-color: black; */
}

nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px;
}

nav ul a {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* margin: 0 0 0 0; */
    padding: 12px;
    margin-left: 5px;
    margin-right: 5px;
}

nav ul a:hover {
    text-decoration: none;
    background-color: #222;
    color: aliceblue;
    border-radius: 4px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px; */
}


</style>