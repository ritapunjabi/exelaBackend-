
module.exports = (sequelize, Sequelize) => {
    const Bill = sequelize.define("bill", {
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        bill_date: {
            type: Sequelize.STRING
        },
        paid_date: {
            type: Sequelize.STRING
        },
        units_consumed: {
            type: Sequelize.INTEGER
        },
        amount: {
            type: Sequelize.DOUBLE
        }

    });
    return Bill;
};