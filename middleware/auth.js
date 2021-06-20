
export default function auth({store, redirect, route}){
    
    if (!store.state.login.authenticated) {
        return redirect('/login');
    }

    return Promise.resolve();
}