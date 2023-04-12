'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prodi', {
      id_prodi: {
        allowNull:false,
        primaryKey:true,
        type: Sequelize.STRING
      },
      NIP: {
        type: Sequelize.STRING,
        references:{
          model:'Dosen',
          key:'NIP'
        }
      },
      nama_prodi: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prodi');
  }
};