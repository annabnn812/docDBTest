import { Schema, model } from "mongoose";

const UserLogSchema = new Schema(
  {
    'User': { type: 'string', required: true, maxLength: 30, },
    'Access': { type: 'string', required: true, maxLength: 7, },
    'Login': { type: 'date', required: true },
    'Logout': { type: 'date', required: true },
    'Opened Patient ID': { type: 'string', maxLength: 20, },
    'Opened Patient Name': { type: 'string', maxLength: 40, },
    'Opened Patient Time': { type: 'date' },
    'Deleted Patient ID': { type: 'string', maxLength: 20, },
    'Report': { type: 'date' },
    'Signed Report': { type: 'date' },
    'Unsign Report': { type: 'date' },
  
  }
);

const SonoWeb = model("USERLOG", UserLogSchema);

const createUserLog = async (user) => {
  return await SonoWeb.create(user);
};

const findUserLog = async (id) => {
  const users = await SonoWeb.find({ id });
  return users.length === 1 ? users[0] : null;
};

const getUserLog = () => {
  return SonoWeb.find({});
};

module.exports = {
  createUserLog,
  findUserLog,
  getUserLog,
};
