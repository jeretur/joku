// users.mjs
const users = [
    {
      id: 1,
      username: "johndoe",
      password: "password1",
      email: "johndoe@example.com"
    },
    {
      id: 2,
      username: "janedoe",
      password: "password2",
      email: "janedoe@example.com"
    },
    {
      id: 3,
      username: "bobsmith",
      password: "password3",
      email: "bobsmith@example.com"
    }
  ];

  const createUser = (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
  };

  const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  };

  const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      res.json({ message: 'Login successful', user: { id: user.id, username: user.username, email: user.email } });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  };

  const getUsers = (req, res) => {
    res.json(users);
  };

  export { createUser, getUserById, loginUser, getUsers };
