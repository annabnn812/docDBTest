import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    'User': { type: 'string', maxLength: 30 },
    'Password': { type: 'string', maxLength: 16 },
    'R/W': { type: 'boolean' },
    'Can Sign': { type: 'boolean' },
    'Can Delete': { type: 'boolean' },
    'Timeout': { type: 'number' }, // Assuming DOUBLE PRECISION as number
    'Hx1': { type: 'number' }, // Assuming DOUBLE PRECISION as number
    'Hx2': { type: 'number' }, // Assuming DOUBLE PRECISION as number
    'Hx3': { type: 'number' }, // Assuming DOUBLE PRECISION as number
    'Hx4': { type: 'number' }, // Assuming DOUBLE PRECISION as number
    'Last Reset': { type: 'date' },
    'Reset Interval': { type: 'integer' },
    'Restrict Location': { type: 'boolean' },
    'Location1': { type: 'string', maxLength: 40 },
    'Location2': { type: 'string', maxLength: 40 },
    'Location3': { type: 'string', maxLength: 40 },
    'Location4': { type: 'string', maxLength: 40 },
    'Location5': { type: 'string', maxLength: 40 },
    'Location6': { type: 'string', maxLength: 40 },
    'Restrict Provider': { type: 'boolean' },
    'Provider1': { type: 'string', maxLength: 40 },
    'Provider2': { type: 'string', maxLength: 40 },
    'Provider3': { type: 'string', maxLength: 40 },
    'Provider4': { type: 'string', maxLength: 40 },
    'Provider5': { type: 'string', maxLength: 40 },
    'Provider6': { type: 'string', maxLength: 40 },
    'Restrict Reporter': { type: 'boolean' },
    'Reporter1': { type: 'string', maxLength: 40 },
    'Reporter2': { type: 'string', maxLength: 40 },
    'Reporter3': { type: 'string', maxLength: 40 },
    'Reporter4': { type: 'string', maxLength: 40 },
    'Reporter5': { type: 'string', maxLength: 40 },
    'Reporter6': { type: 'string', maxLength: 40 },
    'Enable Provider Whitelist': { type: 'boolean' },
    'Provider Whitelist': { type: 'string' }, // Assuming BLOB SUB_TYPE 1 SEGMENT SIZE 80 as string
    'Enable Sonographer Whitelist': { type: 'boolean' },
    'Sonographer Whitelist': { type: 'string' }, // Assuming BLOB SUB_TYPE 1 SEGMENT SIZE 80 as string
    'NameAsReporter': { type: 'string', maxLength: 40 },
    'SysAdmin': { type: 'boolean', required: true, default: false } // DEFAULT FALSE NOT NULL as required and default value
  }
);

const SonoWeb = model("Users", UserSchema);

const createUser = async (user) => {
  return await SonoWeb.create(user);
};

const findUser = async (id) => {
  const users = await SonoWeb.find({ id });
  return users.length === 1 ? users[0] : null;
};

const getUsers = () => {
  return SonoWeb.find({});
};

module.exports = {
  createUser,
  findUser,
  getUsers,
};
