
exports.up = function (knex) {
    return knex.schema.createTable("cars", tbl => {
        tbl.increments();


        tbl
            .string("make")
            .notNullable()
            .index();

        tbl
            .string("model")
            .notNullable()
            .index();

        tbl.string("vin", 17).notNullable();

        tbl.string("mileage").notNullable();

        tbl.string("transmission").index();

        tbl.string("title").index();
    });
};



exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')

};
