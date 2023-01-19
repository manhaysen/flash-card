const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      this.hasMany(Question, {
        foreignKey: 'theme_id',
      });
    }
  }
  Theme.init({
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
