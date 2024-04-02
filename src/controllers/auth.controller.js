import authService from "../services/auth.service.js";

const loginController = async (req, res) => {
  const { nome, senha } = req.body;
  try {
    const token = await authService.loginService({ nome, senha });
    return res.send(token);
  } catch (e) {
    return res.status(401).send(e.message);
  }
};

export default { loginController };
