const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('condition', {
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
    desc: {
      type: DataTypes.TEXT(1000),
      allowNull: true,
      defaultValue: null
    }
    
  }, {
    sequelize,
    tableName: 'condtion',
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
    ]
  });
};
