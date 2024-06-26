import userService from "../services/user.service.js";

async function createUserController(req, res) {
  const { email, password, tipo } = req.body;

  try {
    const token = await userService.createUserService({
      email,
      password,
      tipo,
    });
    res.status(201).send({ token: token });
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function findAllUserController(req, res) {
  try {
    const users = await userService.findAllUserService();
    return res.send(users);
  } catch (e) {
    return res.status(404).send(e.message);
  }
}

async function findUserByIdController(req, res) {
  try {
    const user = await userService.findUserByIdService(
      req.params.id,
      req.userId
    );
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function updateUserController(req, res) {
  try {
    const { email, password } = req.body;
    const { id: userId } = req.params;
    const userIdLogged = req.userId;

    const response = await userService.updateUserService(
      { email, password },
      userId,
      userIdLogged
    );

    // Aqui, response contém tanto o usuário atualizado quanto o token de acesso
    return res.send(response);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

export default {
  createUserController,
  findAllUserController,
  findUserByIdController,
  updateUserController,
};
