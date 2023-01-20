const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      this.hasOne(Question, {
        foreignKey: 'answer_id',
      });
      // define association her
    }
  }
  Answer.init(
    {
      answer: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Answer',
    }
  );
  return Answer;
};
