<template>
    <div>
        <div class="wrap-login100">
            <div class="login100-pic js-tilt" data-tilt>
                 <img src="/images/register.png" alt="IMG">
            </div>
               

            <form class="login100-form validate-form">
                <span class="login100-form-title">
                    Create Account
                </span>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="name" placeholder="Name">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="lastname" placeholder="LastName">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="email" placeholder="Email">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                    <input class="input100" type="password" name="password" placeholder="Password">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                    <input class="input100" type="password" name="confirm_password" placeholder="Password confirm">
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>                
                
                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                        Register
                    </button>
                </div>

                <div class="text-center p-t-136">
                    <nuxt-link class="txt2" :to="localePath('login')">Do you have Account? Login <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i></nuxt-link>
                </div>
            </form>
        </div>        
    </div>
</template>
<script>
export default {
    name: 'register',
    layout: 'loginRegister',
    middleware: 'guest',

    data() {
        return {
            
        }
    },

    mounted() {
        /* $('.js-tilt').tilt({
            scale: 1.1
        }); */
    },
}
</script>