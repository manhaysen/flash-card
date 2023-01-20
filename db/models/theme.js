const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      // define association here
      this.hasMany(Question, {
        foreignKey: 'theme_id',
      });
    }
  }
  Theme.init({
    title: DataTypes.TEXT,
    url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
