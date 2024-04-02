import User from "../models/User.js";

const findByNomeUserRepository = (nome) => User.findOne({ nome: nome });

const createUserRepository = ({ nome, senha }) =>
  User.create({
    nome,
    senha,
  });

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

const updateUserRepository = async (id, nome, senha) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { nome, senha },
      { new: true } // Para retornar o documento atualizado
    );

    if (!updatedUser) {
      throw new Error("Usuário não encontrado");
    }

    return updatedUser;
  } catch (error) {
    throw new Error("Erro ao atualizar o usuário: " + error.message);
  }
};

export default {
  findByNomeUserRepository,
  createUserRepository,
  findAllUserRepository,
  findByIdUserRepository,
  updateUserRepository,
};
