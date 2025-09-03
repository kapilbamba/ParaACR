const { execSync } = require("child_process");
require("dotenv").config();

const port = process.env.REACT_APP_PORT || 5001; // Default to 5001 if not set

execSync(`cross-env PORT=${port} react-scripts start`, {
  stdio: "inherit",
});
