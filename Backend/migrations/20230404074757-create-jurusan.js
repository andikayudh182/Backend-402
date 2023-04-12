'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jurusan', {
      id_jurusan: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      NIP: {
        type: Sequelize.STRING,
        references:{
          model:'Dosen',
          key:'NIP'
        }
      },
      nama_jurusan: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jurusan');
  }
};