exports.up = async (knex) => {
  await knex.schema.createTable('business_profiles', function (table) {
    table.increments('id');
    table
      .string('profile_id')
      // forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.string('business_name').notNullable();
    table.timestamps(true, true);
    table.text('why_choose_description');
    table.text('service_intro');
    table.string('groomer_service_heading');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('business_profiles');
};
