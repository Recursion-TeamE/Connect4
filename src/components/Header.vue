<template>
  <header>
    <div>
      <b-navbar toggleable="lg" variant="light">
        <a-navbar-brand class="m-3">Connect 4</a-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="shadow">
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/">Top</router-link></b-nav-item>
            <b-nav-item
              ><router-link to="/setting">Setting</router-link></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>
