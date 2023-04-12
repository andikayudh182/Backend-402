'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KoTA', {
      id_KoTA: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
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
      id_user: {
        type: Sequelize.INTEGER,
        references:{
          model:'User',
          key:'id_user'
        }
      },
      tahun_ajaran: {
        type: Sequelize.STRING
      },
      nama_KoTA: {
        type: Sequelize.STRING
      },
      jumlah_pembimbing: {
        type: Sequelize.INTEGER
      },
      jumlah_penguji: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('KoTA');
  }
};