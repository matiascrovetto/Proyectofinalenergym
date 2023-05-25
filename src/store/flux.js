const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      API_URL: 'https://5000-matiascrove-proyectofin-rj89phtiszx.ws-us98.gitpod.io',
      currentUser: null,
      error: null,
      users: null,
      messages: null
    },
    actions: {
      setStore: updatedStore => setStore(updatedStore),

      login: async (e, navigate) => {
        e.preventDefault();
        try {
          const { API_URL } = getStore();
          const { username, password } = e.target;
          const credentials = { username: username.value, password: password.value };

          const options = {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json'
            }
          };

          const response = await fetch(`${API_URL}/login`, options);
          const data = await response.json();

          if (data.msg) {
            setStore({
              currentUser: null,
              error: data
            });
          } else {
            setStore({
              currentUser: data,
              error: null
            });
            sessionStorage.setItem('currentUser', JSON.stringify(data));
            navigate('/profile');
          }
        } catch (error) {
          console.log(error.message);
        }
      },

      register: async (e, navigate) => {
        e.preventDefault();
        try {
          const { API_URL } = getStore();
          const { username, password, role } = e.target;
          const credentials = { username: username.value, password: password.value, roles: [role.value] };

          const options = {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json'
            }
          };

          const response = await fetch(`${API_URL}/register`, options);
          const data = await response.json();

          if (data.msg) {
            setStore({
              currentUser: null,
              error: data
            });
          } else {
            setStore({
              currentUser: data,
              error: null
            });
            sessionStorage.setItem('currentUser', JSON.stringify(data));
            navigate('/Profile');
          }
        } catch (error) {
          console.log(error.message);
        }
      },

      logout: () => {
        if (sessionStorage.getItem('currentUser')) {
          setStore({
            currentUser: null
          });
          sessionStorage.removeItem('currentUser');
        }
      },

      checkCurrentUser: () => {
        if (sessionStorage.getItem('currentUser')) {
          setStore({
            currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
          });
        }
      },

      getUsers: async () => {
        try {
          const { currentUser, API_URL } = getStore();
          const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${currentUser?.access_token}`
            }
          };
          const response = await fetch(`${API_URL}/users`, options);
          const data = await response.json();

          setStore({
            users: data
          });
        } catch (error) {
          console.log(error.message);
        }
      },

      getMessages: async () => {
        try {
          const { currentUser, API_URL } = getStore();
          const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${currentUser?.access_token}`
            }
          };
          const response = await fetch(`${API_URL}/messages`, options);
          const data = await response.json();

          setStore({
            messages: data
          });
        } catch (error) {
          console.log(error.message);
        }
      },

      Profile: async (e, navigate) => {
        e.preventDefault();
        try {
          const { API_URL } = getStore();
          const { usuario, direccion, edad, sexo, estatura, peso, enfermedad  } = e.target;
          const credentials = {
            usuario: usuario.value,
            direccion: direccion.value,
            edad: edad.value,
            sexo: sexo.value,
            estatura: estatura.value,
            peso: peso.value,
            enfermedad: enfermedad.value
          };

          const options = {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
              'Content-Type': 'application/json'
            }
          };

          const response = await fetch(`${API_URL}/guardarperfil`, options);
          const data = await response.json();

          if (response.ok) {
          //Los datos se guardaron exitosamente en la base de datos
            // Realiza las acciones necesarias, como redirigir al usuario o actualizar la interfaz
          } else {
            // Hubo un error al guardar los datos en la base de datos
            // Maneja el error de acuerdo a tus necesidades
          }
        } catch (error) {
          console.log(error.message);
        }
      },

      
    }
  };
};

export default getState;
