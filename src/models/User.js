import { Sequelize, Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        age: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },

        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
      },

      { sequelize },
    );
  }
}

export default User