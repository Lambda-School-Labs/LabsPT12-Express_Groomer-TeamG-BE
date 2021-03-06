exports.up = async (knex) => {
  await knex.schema.createTable('appointments', function (table) {
    table.increments('id');
    table
      .string('groomer_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .string('customer_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('pet_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('customer_pets')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('location_service_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('location_services')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string('service_provider_name').notNullable();
    table.integer('appointment_date_time').notNullable();
    table
      .enu('status', ['Pending', 'Approved', 'Rejected', 'Completed'])
      .notNullable();
    table.timestamps(true, true);
    table.integer('duration').notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('appointments');
};
