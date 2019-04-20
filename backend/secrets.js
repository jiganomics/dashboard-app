// secrets.js
// export DB_URI=mongodb://localhost:27017/myproject

const secrets = {
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/myproject'
};

export const getSecret = key => secrets[key];
