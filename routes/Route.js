const express=require('express')
const { createBuyerDue,updatebuyerduedata,BuyerDuelist,deletebuyerduedata, buyerdueSearch } = require('../controller/BuyerDue')
const { createAdminProfile, updateAdminProfile, findsuperadmin } = require('../controller/AdminProfile')
const { OrderCreate, getallorderdata } = require('../controller/reports/Order')
const { createpurchaseReport,deletepurchasereportdata, getallpurchasereport } = require('../controller/reports/PurchaseReport')
const { createSalesReport, getallsalesreport,deletesalesreportdata } = require('../controller/reports/SalesReport')
const { createSupplierDue, getallSupplierDue } = require('../controller/reports/SupplierDue')
const { createTransaction, getallTransaction } = require('../controller/reports/Transaction')
const { createSample, getallsampledata, deletesampledata, updatesampledata } = require('../controller/Sample/Sample')
const { createCurrency, getallcurrency,updatecurrencydata,deletecurrencydata } = require('../controller/Setting/AddNewCurrency')
const { createShipment, getallshipmentdata, deleteshipmentdata, updateshipmentdata, getallyearmonth } = require('../controller/Shipment/CreateShipment')
const { getallSupplierdata, createSupplier, deletesupplierdata, updatesupplierdata } = require('../controller/Buyer/Supplier')
// const { createOrder, deleteOrder, updateOrder, singleOrder, getAllOrder } = require('../controller/orderManagement/orderList')

const router=express.Router()






// sample file



router.post('/createsample',createSample)
router.get('/getallsample',getallsampledata)
router.delete('/delete/:_id',deletesampledata)
router.put('/update/:_id',updatesampledata)
// router.get('/searchsample')



// Report folder router

router.post('/createbuyerdue',createBuyerDue)
router.delete('/deletebuyerduedata/:_id',deletebuyerduedata)
router.put('/updatebuyerduedata/:_id',updatebuyerduedata)
router.get('/getallbuyerlist',BuyerDuelist)
router.get('/buyerduesearch',buyerdueSearch)
router.post('/super-admin',createAdminProfile)
router.put('/update-admin-profile/:_id',updateAdminProfile)
router.post('/createorder',OrderCreate)
router.get('/getallorderdata',getallorderdata)
router.post('/createpuchasereport',createpurchaseReport)
router.get('/getallpurchasereport',getallpurchasereport)
router.delete('/deletepurchasereportdata/:_id',deletepurchasereportdata)

router.post('/createsalesreport',createSalesReport)
router.get('/getallsalesreport',getallsalesreport)
router.delete('/deletesalesreportdata/:_id',deletesalesreportdata)
router.post('/createsupplierdue',createSupplierDue)
router.get('/getallSupplierDue',getallSupplierDue)
router.post('/createtransaction',createTransaction)
router.get('/getalltransaction',getallTransaction)


router.post('/addnewcurrency',createCurrency)
router.get('/getallcurrency',getallcurrency)
router.delete('/deletecurrencydata/:_id',deletecurrencydata)
router.put('/updatecurrencydata/:_id',updatecurrencydata)

deletecurrencydata,
updatecurrencydata

router.post('/create',createShipment)

router.get('/getallshipmentdata',getallshipmentdata)
router.delete('/deleteshipmentdata/:_id',deleteshipmentdata)
router.put('/updateshipmentdata/:_id',updateshipmentdata)

// buyerduelist 



// supplier folder

router.get('/getallsupplierdata',getallSupplierdata)
router.post('/createsupplier',createSupplier)
router.delete('/deletesupplierdata/:_id',deletesupplierdata)
router.put('/updatesupplierdata/:_id',updatesupplierdata)
// getallshipmentdata
router.get("/getallshipmentyearmontdata/:year",getallyearmonth)
// router.post('/create',createOrder)
// router.delete('/delete/:id',deleteOrder)
// router.put('/update/:id',updateOrder)
// router.get('/singleOrder/:id',singleOrder)
// router.get('/getAllOrder',getAllOrder)
router.post("/findsuperadmin",findsuperadmin)


module.exports=router