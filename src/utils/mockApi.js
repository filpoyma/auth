export const fetch_checkAuth = async (props) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (props) {
        const { name, password } = props;
        if (name === 'Admin' && password === '12345') {
          resolve({ name });
          localStorage.setItem('name', 'Admin');
        } else {
          resolve({ err: 'Invalid username or password' });
        }
      } else {
        const name = localStorage.getItem('name');
        if (name) resolve({ name });
        else resolve(null);
      }
    }, 500);
  });
};

export const fetch_logOut = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem('name');
      resolve();
    }, 500);
  });
};
