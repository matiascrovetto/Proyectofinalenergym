const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            API_URL: 'https://5000-matiascrove-proyectofin-zsgxjzxdiw0.ws-us97.gitpod.io/',
            currentUser: null,
            error: null,
            users: null,
            messages: null
        }}
    }
        

export default getState;