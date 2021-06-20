export default function authenticated({store, redirect, route}){

    const authUser = store.state.login.user;

    if(!authUser && (route.name === 'index___en' || route.name === 'index___es' || route.name === 'inspire___en' || route.name === 'inspire___es'))
    {
        redirect('login')
    }
    else if(authUser && (route.name === 'login___en' || route.name === 'login___es' || route.name === 'register___en' || route.name === 'register___es'))
    {
        redirect({ name: 'index'})
    }

    return Promise.resolve()
}