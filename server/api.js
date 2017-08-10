/*
 *  API for Maplewood site
 */
var appConfig = require('./config.json');
var mailUtil = require('./helpers/mailUtil');
var util = require('./helpers/util');

// App Constants
var settings = {
  contactEmail: {
    TO: appConfig.mailer.toEmail,
    SUBJECT: appConfig.mailer.subject,
    USERNAME: appConfig.mailer.fromEmail,
    PASSWORD: appConfig.mailer.password
  }
};


function sendContactEmail(name, email, phoneNum, message) {
  var s = settings.contactEmail;

  function buildSpan(name, value) {
    return "<span style='font-weight:bold'>" + name + ":   </span>" + (value ? value : "(Not Provided)") + "<br/><br/>";
  }

  //build message body
  var emailBody = "<span>The following information was typed in:</span><br/><br/>";
  emailBody += buildSpan("Name", name);
  emailBody += buildSpan("Email", email);
  emailBody += buildSpan("Phone Number", phoneNum);
  emailBody += buildSpan("Message", message);

  return mailUtil.sendThroughGmail(s.USERNAME, s.PASSWORD, s.TO, s.SUBJECT, emailBody);
}


/*
 * PUBLIC METHODS
 */

//method to send contact page email
module.exports.sendContactEmail = sendContactEmail;







