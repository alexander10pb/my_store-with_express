const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

// http://localhost:3000/users?limit=100&offset=20
// router.get('/', (req, res) => {
//     const { limit, offset } = req.query;
//     if (limit && offset) {
//         res.json({
//             limit,
//             offset
//         })
//     } else {
//         res.send('No hay query parametros')
//     }
// })

router.get('/', async (req, res, next) => {
    try {
      const users = await service.find();
      res.json(users);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;