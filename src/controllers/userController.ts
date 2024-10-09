import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';
import { isValidEmail } from '../helpers/validationHelper';

const userRepository = new UserRepository();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  // Validando o e-mail com o helper
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  try {
    const user = await userRepository.addUser(name, email);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao adicionar usuário' });
  }
};