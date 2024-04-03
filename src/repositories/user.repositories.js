import User from "../models/User.js";

const findByNomeUserRepository = (email) => User.findOne({ email: email });

const createUserRepository = ({ email, password, tipo }) =>
  User.create({
    email,
    password,
    tipo,
  });

const findAllUserRepository = () => User.find();

const findByIdUserRepository = (idUser) => User.findById(idUser);

const updateUserRepository = async (id, email, password) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { email, password },
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
