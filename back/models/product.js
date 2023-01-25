const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
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
    link_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    seller_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    eko_score: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    label_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "labbel_name"
    }
  }, {
    sequelize,
    tableName: 'product',
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
        name: "labbel_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "label_name" },
        ]
      },
    ]
  });
};
