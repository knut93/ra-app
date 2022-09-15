import express from 'express';
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello from express");
});

// Middleware
app.use(cors())
app.use(express.json())

// Routes
// Create user
app.post("/todos", async (req, res) => {
  const userEntry = await prisma.user.create({

  })

})

//Update user
app.put("/users/:id", async(req, res) => {
  const { id } = req.params;
  const { user, emailAdd } = req.body;
  const userEntry = await prisma.user.update({
    where: {
      u_id: Number(id),
    },
    data: {
      lastName: String(user),
      email: String(emailAdd),
    }
  })
  res.json("Successfully updated user.")
})
//Show users
app.get("/users", async (req, res) => {
  const usersList = await prisma.user.findMany()
  res.json(usersList);
})

//Show user by id
app.get("/users/:id", async (req, res) => {
  const userList = await prisma.user.findUnique({
    where: {
      u_id: Number(req.params.id)
    }
  })
  res.json(userList);
})



// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
