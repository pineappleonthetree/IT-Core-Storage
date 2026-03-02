const pool = require('../db')

const getShelfByStockId = async(req, res)=>{
	try{
		const stock_id = req.params.id;
	
		const [rows] = await pool.query('select * from shelf where stock_id = ?', [stock_id])
		res.json(rows)
	}catch (err) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
	getShelfByStockId
}