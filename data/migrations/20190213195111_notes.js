exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', table=>{
        table.increments('id');
        table.string('title').notNullable();
        table.string('details').notNullable();
      
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notes');

};