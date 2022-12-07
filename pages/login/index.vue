<template>
    <div>
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                 <img src="/images/img-01.png" alt="IMG">
            </div>

            <form class="login100-form validate-form">
                <span class="login100-form-title">
                  {{ $t('login.hello') }}
                </span>

                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link><br>
                <nuxt-link :to="switchLocalePath('es')">Español</nuxt-link><br><br>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="email" v-model="email" placeholder="Email" autocomplete>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                    <input class="input100" type="password" v-model="password" placeholder="Password">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                
                <div class="container-login100-form-btn">
                    <button type="button" @click="login" class="login100-form-btn">
                        Login
                    </button>
                </div>

                <div class="text-center p-t-12">
                    <span class="txt1">
                        Forgot
                    </span>
                    <a class="txt2" href="#">
                        Username / Password?
                    </a>
                </div>

                <div class="text-center p-t-136">
                    <nuxt-link class="txt2" :to="localePath('register')">Create your Account <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></nuxt-link>
                </div>
            </form>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'login',
    layout: 'loginRegister',
    middleware: 'guest',

    loading: {
        color: 'blue',
        height: '5px',
        duration: 500,
        continuous: true
    },

    /* async fetch() {
        console.log(this)
    }, */

    data() {
        return {
            email: 'klk@hotmail.com',
            password: '123456',
        }
    },

    head(){
        return {
            title: 'Login'
        }
    },

    mounted() {
        /* $('.js-tilt').tilt({
            scale: 1.1
        }); */
    },

    methods: {
       async login(){
           await this.$store.dispatch('login/login', { email: this.email, password: this.password })
           .then(() => {
                this.$router.push(this.localeRoute({ name: 'index' }))
            })
            .catch((err) => {
                console.log(err); 
            })
        },
    }
}
</script>