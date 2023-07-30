const express = require('express');
const { userRouter } = require('./routes/userRoutes');
const app =express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/create", userRouter)
app.use("/update", userRouter)
 app.use("/delete", userRouter)


app.use("/", (req, res) => {
    return res.status(404).json({
      message: "No such route found",
    });

})

app.listen(5000)