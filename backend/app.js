var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
const cors = require('cors');

var connectDB = require("./connectDB");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var employeeRouter = require("./routes/employee");
var internRouter = require("./routes/intern");
var  adminRouter = require("./routes/admins");
var app = express();
var http = require("http").createServer(app);
dotenv.config();
connectDB();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
};

// Use CORS middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const frontendDistPath = path.resolve(__dirname, "./../frontend/dist");
app.use(express.static(frontendDistPath));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/employees", employeeRouter);
app.use("/interns", internRouter);
app.use("/admin", adminRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
module.exports = app;
