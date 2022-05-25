const express = require("express");
const router = express.Router();
const propertyController = require("../controller/property.controller");
router.post("/property", propertyController.addProperty);
router.get("/properties", propertyController.getAllProperty);
router.get("/property/:id", propertyController.getProperty);
router.delete("/property/:id", propertyController.removeProperty);
module.exports = router;
