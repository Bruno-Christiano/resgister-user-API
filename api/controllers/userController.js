const database = require('../models');

class UserController {
  static async findAllUsers(req, res) {
    try {
      const users = await database.User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async findOneUsers(req, res) {
    const { id } = req.params;
    try {
      const oneUser = await database.User.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(oneUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    try {
      const newUserCreated = await database.User.create(newUser);
      return res.status(200).json(newUserCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateUser(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.User.update(newInfo, { where: { id: Number(id) } });
      const userUpdate = await database.User.findOne({ where: { id: Number(id) } });
      return res.status(200).json(userUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      await database.User.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
