const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      // define association here
      this.belongsTo(Question, {
        foreignKey: 'questions_id',
      });
    }
  }
  Answer.init({
    answer: DataTypes.TEXT,
    questions_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
