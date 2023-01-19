const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, {
        foreignKey: 'theme_id',
      });
      this.hasOne(Answer, {
        foreignKey: 'questions_id',
      });
      // define association here
    }
  }
  Question.init({
    title: DataTypes.TEXT,
    theme_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
