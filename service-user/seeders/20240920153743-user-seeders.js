'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users', [
      {
       name: "katol122",
       profession: "Admin Micro",
       role: "admin",
       email: "asterixkun560@gmail.com",
       password: await bcrypt.hash('sarangtawon123', 15),
       created_at: new Date(),
       updated_at: new Date()
      }, 
      {
        name: "marioblack123",
        profession: "Guru",
        role: "student",
        email: "asterixkun720@gmail.com",
        password: await bcrypt.hash('sarangtawon124', 15),
        created_at: new Date(),
        updated_at: new Date()
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
