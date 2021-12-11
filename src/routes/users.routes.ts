import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

/**
 * @openapi
 * /users:
 *   post:
 *     description: Post User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               email:
 *                 type: string
 *                 description: Description.
 *                 example: teste@teste.com
 *     responses:
 *       201:
 *         description: Return the user.
 */
usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

/**
 * @openapi
 * /users/{user_id}/admin:
 *   patch:
 *     description: Turn user admin
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID from user.
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Turn user a Admin.

 */
usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

/**
 * @openapi
 * /users/{user_id}:
 *   get:
 *     description: Get user
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID from user.
 *         schema:
 *           type: string
 *
 *     responses:
 *       200:
 *         description: Return the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 name:
 *                   type: string
 */
usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

/**
 * @openapi
 * /users:
 *   get:
 *     description: Get users
 *     parameters:
 *       - in: header
 *         name: user_id
 *         required: true
 *         description: ID from user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Return the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 name:
 *                   type: string
 */
usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };

/**
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 */
