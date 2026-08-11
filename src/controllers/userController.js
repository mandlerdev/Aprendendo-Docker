import User from "../models/User.js";
import crypto from "node:crypto";

export const createUser = async (req, res) => {
  try {
    const userToCreate = {
      id: crypto.randomUUID(),
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    };

    const user = await User.create(userToCreate);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

export const deleteUser = async (req, res) => {
  try {
    const deletedCount = await User.destroy({
      where: { id: req.params.id },
    });

    // Se o contador for 0, significa que nenhum usuário foi encontrado com esse ID
    if (deletedCount === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
