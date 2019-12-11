
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.string('name', 128)
            .notNullable()
            .unique()
            .index();
        tbl.boolean('like_it').defaultTo(true);
    })
};

exports.down = function (knex) {

};
