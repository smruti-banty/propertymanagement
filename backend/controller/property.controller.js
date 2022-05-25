const db = require("../utility/dbconfig");
module.exports.addProperty = (req, res) => {
  let data = req.body;
  data.property_id = (Math.random() * 10000).toFixed();
  db.table.create(data, (err, data) => {
    if (err) {
        console.log(err);
        return res.json({ status: "1", message: "Something went wrong" });
}
    else
      return res.json({
        status: "0",
        message: "Record Inserted",
        propertyId: data.propertyId,
      });
  });
};
module.exports.getAllProperty = (req, res) => {
    db.view.firstPage((err,data)=>{
        if(err)
        return res.json({ "status": "1", "message": "Something went wrong" });
        else{
            let arr=[];
            for(let i=0;i<data.length;i++)
            arr.push(data[i].fields);
            return res.json({"status": "0","data": arr.reverse()})
        }
    })    
};
module.exports.getProperty = (req, res) => {
    const record_id = req.params.id;
    db.table.find("2345",function(err,data){
        if(err){
            console.log(err,record_id);
            return res.json({ "status": "1", "message": "Something went wrong" });    
        }
        else{
            return res.json({"status": "0","data": data.fields})
        }
    })    
};
module.exports.removeProperty = (req, res) => {
    let record_id = req.params.id;
    db.table.destroy([record_id],function(err,data){
        if(err){
            console.log(err,record_id);
            return res.json({ "status": "1", "message": "Something went wrong" });    
        }
        else{
            return res.json({"status": "0","message": "Row deleted"})
        }
    })    
};
