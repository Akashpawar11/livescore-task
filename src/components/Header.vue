<template>
    <div>
        <!-- <div class="container-fluid p-0">
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
        </div> -->
        
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="/">LIVE SCORE</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/about-us">About</b-nav-item>
        <b-nav-item href="/contact">Contact</b-nav-item>
      </b-navbar-nav>

     </b-collapse>
  </b-navbar>

        
    </div>

</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
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
    background-color: #7c1414;
    border-bottom: 2px solid black;
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
    background-color: rgb(241, 227, 227);
    color: aliceblue;
    border-radius: 4px;
    /* display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 0 0;
    padding: 0 10px; */
}


</style>