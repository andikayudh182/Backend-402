'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Koordinator', {
      id_koor: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.INTEGER,
        references:{
          model:'User',
          key:'id_user'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      id_prodi: {
        type: Sequelize.STRING,
        references:{
          model:'Prodi',
          key:'id_prodi'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      nama_koordinator: {
        type: Sequelize.STRING
      },
      tahun_ajaran: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Koordinator');
  }
};