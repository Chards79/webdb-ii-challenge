
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.string('vin', 128)
            .notNullable()
            .unique();
        tbl.string('make', 128)
            .notNullable();
        tbl.string('model', 128)
            .notNullable();
        tbl.integer('mileage')
            .notNullable();
        tbl.string('transmissionType', 128);
        tbl.string('titleStatus', 128);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};