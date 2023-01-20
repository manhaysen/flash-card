const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, {
        foreignKey: 'theme_id',
      });
      this.hasOne(Answer, {
        foreignKey: 'answer_id',
      });
      // define association here
    }
  }
  Question.init({
    question: DataTypes.TEXT,
    theme_id: DataTypes.INTEGER,
    answer_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
