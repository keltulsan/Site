const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parainnage', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    parain_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parainated_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "parainated_id"
    }
  }, {
    sequelize,
    tableName: 'parainnage',
    timestamps: false,
    indexes: [
      {
        name: "parain_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parain_id" },
        ]
      },
      {
        name: "parainated_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parainated_id" },
        ]
      },
    ]
  });
};
