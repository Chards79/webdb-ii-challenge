
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '3515166165', make: 'GMC', model: 'Envoy', mileage: 103000, transmissionType: 'standard', titleStatus: 'clear' },
      ]);
    });
};