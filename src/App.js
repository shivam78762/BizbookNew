// App.js
import React from "react";
import "./index.css";
import NavBar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import Service from "./components/Services/Service";
import Events from "./components/Services/Events";
import Products from "./components/Services/Products";
import Deals from "./components/Services/Deals";
import Blog from "./components/Services/Blog";
import Community from "./components/Services/Community";
import Dashboard from "./components/Profile/Dashboard";
import Listing from "./components/Profile/Listing";
import NewListing from "./components/Profile/NewListing";
import Lead from "./components/Profile/Lead";
import Event from "./components/Profile/Event";
import Blogs from "./components/Profile/Blogs";
import Reviews from "./components/Profile/Reviews";
import Profile from "./components/Profile/Profile";
import Liked from "./components/Profile/Liked";
import Summary from "./components/Profile/Summary";
import Invoice from "./components/Profile/Invoice";
import Notification from "./components/Profile/Notification";
import How from "./components/Profile/How";
import Setting from "./components/Profile/Setting";
import Gallary from "./components/Profile/Gallary";
import All from "./components/All/All";
import ProductsInner from "./components/Services/ProductsInner";
import MyBusinessInner from "./components/Services/MyBusinessInner";
import RealEstate from "./components/Services/RealEstate";
import EventInner from "./components/Services/EventInner";
import BlogInner from "./components/Services/BlogInner";
import StartNow from "./components/Form/StartNow";
import BuyPoint from "./components/Form/BuyPoint";
import EditProfile from "./components/Profile/EditProfile";
import EditBuiness from "./components/Profile/EditBuiness";
import BusinessPage from "./components/Profile/BusinessPage";
import AddNewListing from "./components/Profile/AddNewListing";
import EditBusiness from "./components/Profile/EditBusiness";
import AdsDetails from "./components/Profile/AdsDetails";
import AdsForm from "./components/Profile/AdsForm";
import Payment from "./components/Profile/Payment";
import MenuComponent from "./components/Profile/MenuComponent";
import About from "./components/Footer/About";
import FeedBack from "./components/Footer/FeedBack";
import ContactPage from "./components/Footer/ContactPage";

import BlogForm from "./components/Profile/BlogForm";
import PlanChangeForm from "./components/Profile/PlanChangeForm";
import Login from "./components/Pages/Login";
import UserTypesSection from "./components/Pages/UserTypesSection";

import DemoNav from "./components/Navbar/DemoNav";
import Logout from "./components/Navbar/Logout";
import Terms from "./components/Footer/Terms";
import Privacy from "./components/Footer/Privacy";
import StatusComponent from "./StatusComponent";

const App = () => {
  return (
    <div className="app-main">
      <NavBar />
      <DemoNav />
      {/* <StatusComponent /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/:cityname/services" element={<Service />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/:cityname/:cate" element={<RealEstate />} />
        <Route path="/:cityname/realestate" element={<RealEstate />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:city/products" element={<Products />} />
        <Route path="/events" element={<Events />} />
        <Route path="/:cityname/events" element={<Events />} />
        <Route path="/events-inner" element={<EventInner />} />
        <Route path="/products-inner" element={<ProductsInner />} />
        <Route path="/:cityname/products-inner" element={<ProductsInner />} />
        <Route path="/deal" element={<Deals />} />
        <Route path="/:cityname/deal" element={<Deals />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/:cityname/blogs" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/:cityname/community" element={<Community />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/:cityname/dashboard" element={<Dashboard />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/:cityname/listing" element={<Listing />} />
        <Route path="/newlisting" element={<NewListing />} />
        <Route path="/:cityname/newlisting" element={<NewListing />} />
        <Route path="/addnewlisting" element={<AddNewListing />} />
        <Route path="/:cityname/addnewlisting" element={<AddNewListing />} />
        <Route path="/lead" element={<Lead />} />
        <Route path="/:cityname/lead" element={<Lead />} />
        <Route path="/event" element={<Event />} />
        <Route path="/:cityname/event" element={<Event />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/:cityname/blog" element={<Blogs />} />
        <Route path="/:cityname/blog-inner" element={<BlogInner />} />
        <Route path="/blog-inner" element={<BlogInner />} />
        <Route path="/:cityname/blog-inner" element={<BlogInner />} />
        <Route path="/blog-form" element={<BlogForm />} />
        <Route path="/blog-form/:edit" element={<BlogForm />} />
        <Route path="/plan-change-form" element={<PlanChangeForm />} />
        <Route path="/:cityname/plan-change-form" element={<PlanChangeForm />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/:cityname/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:cityname/profile" element={<Profile />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/:cityname/liked" element={<Liked />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/:cityname/summary" element={<Summary />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/:cityname/invoice" element={<Invoice />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/:cityname/notification" element={<Notification />} />
        <Route path="/how" element={<How />} />
        <Route path="/:cityname/how" element={<How />} />
        <Route path="/how/:faqText" element={<How />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/:cityname/setting" element={<Setting />} />

        <Route path="/gallary" element={<Gallary />} />
        <Route path="/:cityname/gallary" element={<Gallary />} />
        <Route path="/all" element={<All />} />
        <Route path="/:cityname/all" element={<All />} />
        <Route path="/mybuiness" element={<MyBusinessInner />} />
        <Route path="/:cityname/mybuiness" element={<MyBusinessInner />} />
        <Route path="/start-now" element={<StartNow />} />
        <Route path="/:cityname/start-now" element={<StartNow />} />
        <Route path="/buy-point" element={<BuyPoint />} />
        <Route path="/:cityname/buy-point" element={<BuyPoint />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/:cityname/edit-profile" element={<EditProfile />} />
        <Route path="/edit-buisness" element={<EditBuiness />} />
        <Route path="/:cityname/edit-buisness" element={<EditBuiness />} />
        <Route path="/view-business" element={<BusinessPage />} />
        <Route path="/:cityname/view-business" element={<BusinessPage />} />
        <Route path="/ads-pricing" element={<AdsDetails />} />
        <Route path="/:cityname/ads-pricing" element={<AdsDetails />} />
        <Route path="/ads-form" element={<AdsForm />} />
        <Route path="/:cityname/ads-form" element={<AdsForm />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/:cityname/payment" element={<Payment />} />
        <Route path="/about" element={<About />} />
        <Route path="/:cityname/about" element={<About />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/:cityname/feedback" element={<FeedBack />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/:cityname/contact" element={<ContactPage />} />
        <Route path="/user-type" element={<UserTypesSection />} />
        <Route path="/:cityname/user-type" element={<UserTypesSection />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/:cityname/user-login" element={<Login />} />
        <Route path="/user-login/:sign" element={<Login />} />
        <Route path="/:cityname/user-login/:sign" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/:cityname/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/:cityname/privacy" element={<Privacy />} />
      </Routes>

      <MenuComponent />
      <Footer />
    </div>
  );
};

export default App;
