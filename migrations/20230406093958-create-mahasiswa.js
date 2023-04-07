'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mahasiswa', {
      NIM: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_KoTA: {
        type: Sequelize.STRING,
        references:{
          model:"KoTA",
          key:"id_KoTA"
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      isKetua: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mahasiswa');
  }
};