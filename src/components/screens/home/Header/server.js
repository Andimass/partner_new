const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Создаем или открываем файл базы данных
const db = new sqlite3.Database('auth-db.sqlite');

// Создаем таблицы
db.serialize(() => {
  // Таблица пользователей
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, email TEXT, password TEXT)");
  // Таблица заказов
  db.run("CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, userId INTEGER, status TEXT, createdAt TEXT, FOREIGN KEY(userId) REFERENCES users(id))");
  // Таблица товаров в корзине
  db.run("CREATE TABLE IF NOT EXISTS order_items (id INTEGER PRIMARY KEY, orderId INTEGER, productId INTEGER, quantity INTEGER, FOREIGN KEY(orderId) REFERENCES orders(id))");
  // Таблица продуктов (для примера)
  db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, price REAL)");
  db.run("CREATE TABLE IF NOT EXISTS services (id INTEGER PRIMARY KEY, username TEXT, serviceTitle TEXT)");
});

// Маршрут для регистрации пользователя
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const stmt = db.prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
  stmt.run(username, email, password, function(err) {
    if (err) {
      return res.status(500).send('Registration failed');
    }
    res.send('User registered');
  });
  stmt.finalize();
});

// Маршрут для авторизации пользователя
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err) {
      return res.status(500).send('Login failed');
    }
    if (row) {
      res.send('User authenticated');
    } else {
      res.send('Invalid credentials');
    }
  });
});

// Маршрут для сохранения услуги
// Маршрут для сохранения услуги
app.post('/saveService', (req, res) => {
  const { username, serviceTitle } = req.body;
  const stmt = db.prepare("INSERT INTO services (username, serviceTitle) VALUES (?, ?)");
  stmt.run(username, serviceTitle, function(err) {
    if (err) {
      return res.status(500).send('Failed to save service');
    }
    res.send({ message: 'Service saved successfully' });
  });
  stmt.finalize();
});

// Маршрут для получения всех пользователей
app.get('/api/users', (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ users: rows });
  });
});

// Маршрут для получения всех услуг
app.get('/services', (req, res) => {
  db.all("SELECT * FROM services", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ services: rows });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
