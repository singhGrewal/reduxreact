// module.exports = {
//   mongoURI:
//     "mongodb://grewal:grewal3037@ds121311.mlab.com:21311/firstfullproject",
//   secretOrKey: "secret"
// };

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}
