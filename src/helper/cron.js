const CronJob = require("cron").CronJob;
const { emailService } = require("../services");

/** It's running on every 3 seconds. */
new CronJob(
  "*/3 * * * * *",
  function () {
    console.log("It's running on every 3 seconds.");
  },
  null,
  false,
  "Asia/Kolkata"
).start();

/** Send email */
new CronJob(
  "01 12 * * *",
  function () {
    emailService.sendMail(
      "nmoradiya07@gmail.com",
      "Morning message",
      "Good morning Mily! Have a nice day ;)"
    );
  },
  null,
  false,
  "Asia/Kolkata"
).start();
