const airtable = require("airtable");
const base = airtable.base("appBhJIgAsaGg83cL");
const table = base("property_details")
const view = table.select({view: 'Grid view'})

module.exports={table,view}
