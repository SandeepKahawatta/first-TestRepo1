const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();


const PORT = process.env.PORT || 8070;
// Allow requests from the specified origin
const corsOptions = {
    origin: 'https://localhost:3000', // Change this to your frontend URL
    credentials: true, // Include credentials (cookies, authorization headers, etc.)
  };
  
  app.use(cors(corsOptions));
app.use(bodyParser.json());

const StaffRouter = require("./BACKEND/routes/staff/staff.js");
const ManagerRouter = require("./BACKEND/routes/manager/manager.js");
const ManagerDashboardRouter = require("./BACKEND/routes/manager/managerDashboard.js");

const ConsultAppointmentsRouter = require("./BACKEND/routes/consultation/consultAppointments.js");
const RefundRouter = require("./BACKEND/routes/consultation/refunds.js");
const AvailabilityRouter = require("./BACKEND/routes/consultation/availabilities.js");
const SpecialistRouter = require("./BACKEND/routes/consultation/specialists.js");
const CenterRouter = require("./BACKEND/routes/consultation/centers.js");
const SpecialistNotificationsRouter = require("./BACKEND/routes/consultation/specialistNotifications.js");

const customerRouter = require( "./BACKEND/routes/user/customer.js" );

const sellerRouter = require( "./BACKEND/routes/sellerPartnership/seller.js" );
const sellerPartnershipRequestRouter = require( "./BACKEND/routes/sellerPartnership/sellerPartnershipRequest.js" );
const sellerProducts = require( "./BACKEND/routes/sellerPartnership/sellerProducts.js" )
const sellerBag = require( "./BACKEND/routes/sellerPartnership/sellerBag.js" );
const sellerOrder = require( "./BACKEND/routes/sellerPartnership/sellerOrders.js" );
const sellerNotification = require( "./BACKEND/routes/sellerPartnership/sellerNotification.js" );
const sellerAppointments = require( "./BACKEND/routes/sellerPartnership/sellerAppointments.js" );
const SellerHome = require( "./BACKEND/routes/sellerPartnership/sellerHome.js" );
const SellerProfile = require( "./BACKEND/routes/sellerPartnership/sellerProfile.js" );

const productRouter = require("./BACKEND/routes/inventory/inventoryManagers.js");
const approvalProcessRouter = require("./BACKEND/routes/inventory/approvalProcess.js");

const cartRouter =require("./BACKEND/routes/order/Cart.js")

const customizeGiftPackageRouter = require("./BACKEND/routes/GiftPackage/customizeGiftPackage.js");
const defaultGiftpackageRouter = require("./BACKEND/routes/GiftPackage/defaultGiftpackage.js");
const giftPackageOrderRouter = require("./BACKEND/routes/GiftPackage/giftPackageOrder.js");

const feedbackRouter = require("./BACKEND/routes/Feedback&complaints/feedbacks.js");
const complaintsRouter = require("./BACKEND/routes/Feedback&complaints/complaintses.js");

const packageRoutes = require("./BACKEND/routes/HolidayPackage/package.js");
const serviceRoutes = require("./BACKEND/routes/HolidayPackage/service.js");
const bookingRoutes = require("./BACKEND/routes/HolidayPackage/booking.js");
const FeedbackGiftPackageRouter = require("./BACKEND/routes/Feedback&complaints/feedbacksGiftPackages.js");

const orderRouter = require( "./BACKEND/routes/order/orders.js" );

const authRouter = require( "./BACKEND/routes/auth.js" );

const cookieParser = require("cookie-parser");


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true, 
    //useFindAndModify: false
});


app.use(cookieParser());


app.use("/staff", StaffRouter);
app.use("/manager", ManagerRouter);
app.use("/managerDashboard", ManagerDashboardRouter);

app.use("/consultAppointment", ConsultAppointmentsRouter);
app.use("/refund", RefundRouter);
app.use("/availability", AvailabilityRouter);
app.use("/specialist", SpecialistRouter);
app.use("/center", CenterRouter);
app.use("/specialistNotifications", SpecialistNotificationsRouter);

app.use("/seller", sellerRouter);
app.use("/sellerPartnershipRequest", sellerPartnershipRequestRouter);
app.use("/sellerProducts",  sellerProducts);
app.use("/sellerBag",  sellerBag);
app.use("/sellerOrder",  sellerOrder);
app.use("/sellerNotification", sellerNotification);
app.use("/sellerAppointments", sellerAppointments);
app.use("/sellerHome", SellerHome);
app.use("/sellerProfile", SellerProfile);


app.use("/product", productRouter);
app.use("/approvalProcess",approvalProcessRouter);


// Routes
app.use("/packages", packageRoutes);
app.use("/services", serviceRoutes);
app.use("/bookings", bookingRoutes);


//Order Management
app.use("/cart",cartRouter);


app.use("/customizeGiftPackage",customizeGiftPackageRouter);
app.use("/defaultGiftpackage",defaultGiftpackageRouter);
app.use("/giftPackageOrder",giftPackageOrderRouter);

app.use("/feedback",feedbackRouter);
app.use("/feedbackGiftPackage",FeedbackGiftPackageRouter);
app.use("/complaints",complaintsRouter);

app.use("/order", orderRouter);

app.use("/auth", authRouter);

app.use("/customer", customerRouter);


const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection Success!");

})


app.listen(PORT,() =>{

    console.log(`Server is up and running on port number: ${PORT}`);
})
