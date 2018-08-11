import Joi from 'joi';

export default {
  // POST-PUT /api/tasks
  create: {
    body: {
      description: Joi.string(),
      email: Joi.string().email({ minDomainAtoms: 2 }),
	  username: Joi.string().alphanum().min(3).max(30),
	  profile_picture: Joi.string().alphanum(), /* To be changed later */
	  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
	  passwordConf: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
	  phone: {
	    number: Joi.string().regex(/^[0-9]{10}$/)
	  },
    }
  },

  // GET-PUT-DELETE /api/tasks/:taskId
  get: {
    params: {
      taskId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }
  },
};