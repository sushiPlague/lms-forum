import * as Joi from 'joi';

export const schema = Joi.object({
  JWT_SECRET: Joi.string().required().description('JWT Secret Key'),
  MONGODB_URL: Joi.string()
    .required()
    .description("MongoDB URL (e.g. 'mongodb://localhost:27017/nest')"),
  PORT: Joi.number().required().description(' Server port (e.g. 3000)'),
});
