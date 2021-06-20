
export default function guest({store, redirect}){
    
    if (store.state.login.authenticated) {
        return redirect('/');
    }

    return Promise.resolve();
}