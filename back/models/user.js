const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    img: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "icons-user.jpg"
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apartment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    code_postal: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    banking_informations: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    acceptance_of_the_gtcu: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    stay_connect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    eko_experience: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    badges: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    seller: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    eko_save: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    envy_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "envy_id"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "envy_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "envy_id" },
        ]
      },
    ]
  });
};
