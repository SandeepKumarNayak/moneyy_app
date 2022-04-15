const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

//set security http headers
app.use(helmet());
//development logging
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//Body Parser, Reading data from the body into req.body
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this ip please try again in an hour",
});

app.use("/api", limiter);

app.use(
  express.json({
    limit: "10kb",
  })
);

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// Prevent parameter polution
app.use(
  hpp({
    //it is array ehich we can alloe=w to be duplicated in query
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

//allow other request to get access
app.use(cors());

app.use(require("./routes"));

app.all("*", (req, res, next) => {
  next(new AppError(`cant't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
