'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Relasi_KoTA', {
      id_relasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_KoTA: {
        type: Sequelize.STRING,
        references:{
          model:"KoTA",
          key:"id_KoTA"
        },
        onDelete:"cascade",
        onUpdate:"cascade"
      },
      NIP: {
        type: Sequelize.STRING,
        references:{
          model:"Dosen",
          key:"NIP"
        },
        onDelete:"cascade",
        onUpdate:"cascade"
      },
      role: {
        type: Sequelize.STRING
      },
      urutan: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      img_ttd: {
        type: Sequelize.STRING
      },
      tgl_ttd: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Relasi_KoTA');
  }
};