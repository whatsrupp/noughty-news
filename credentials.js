
function aylien() {
  return {
    applicationId: process.env.AYLIEN_APPLICATION_ID,
    key: process.env.AYLIEN_APPLICATION_KEY
  };
};

module.exports = {
  aylien: aylien
}
