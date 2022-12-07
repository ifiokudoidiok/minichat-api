exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("messages")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("messages").insert([
        {
          username: "menadio",
          message: "Sample message here",
          room: "sample-room",
        },
      ]);
    });
};
