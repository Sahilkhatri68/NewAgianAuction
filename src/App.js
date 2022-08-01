import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aboutus from "./components/AboutUs/Aboutus";
import Bank from "./components/Bank Auction/Bank";
import Bottom from "./components/Bottom/Bottom";
import ChooseMore from "./components/Bottom/Choose";
import ViewMore from "./components/Bottom/ViewMore";
import Membership from "./components/Card/Membership";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/Footer/FooterPages/ContactUs";
import Navbar from "./components/Header/Nav";
import Table from "./components/LiveAucion/Table";
import CoPlans from "./components/Login/CoPlans";
import Coplatinum from "./components/Login/Coplatinum";
import Cosign from "./components/Login/CoSign";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Sg";
import Notfound from "./components/NotfoundPage/NotFound";
import Page from "./components/page/Page";
import ViewmoreCard from "./components/RelatedCard/ViewmoreCard";
import MemberLogin from "./components/Staff/MemberLogin";
import AddAuction from "./components/Staff/StaffAction/AddAuction";
import AddProducts from "./components/Staff/StaffAction/AddProducts";
import AddUser from "./components/Staff/StaffAction/AddUser";
import EditAuction from "./components/Staff/StaffAction/EditAuction";
import EditProduct from "./components/Staff/StaffAction/EditProduct";
import EditUser from "./components/Staff/StaffAction/EditUser";
import ViewAuction from "./components/Staff/StaffAction/ViewAuction";
import ViewProducts from "./components/Staff/StaffAction/ViewProducts";
import ViewUser from "./components/Staff/StaffAction/ViewUser";
import StaffLogin from "./components/Staff/StaffLogin";
import EditProfile from "./components/StaffProfile/EditProfile";
import StaffProfile from "./components/StaffProfile/StaffProfile";
import Upcoming from "./components/UpcomingAuction/Upcoming";
import UserProfile from "./components/User/UserProfile";
import BodyNav from "./components/view/BodyNav";
import GlobalNav from "./components/view/GlobalNav";
import NavView from "./components/view/NavView";
import Product from "./components/view/ProductPage";
import Profile from "./components/view/Profilepage";
import View from "./components/view/view";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/page" element={<Page />} />
        <Route path="/view" element={<View />} />
        <Route path="/navview" element={<NavView />} />
        <Route path="/product" element={<Product />} /> {/* Getting product */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/live" element={<Table />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/member" element={<Membership />} />{" "}
        {/* membership cards  */}
        <Route path="/bank" element={<Bank />} />
        <Route path="/memberlogin" element={<MemberLogin />} />{" "}
        {/* member login  */}
        <Route path="/stafflogin" element={<StaffLogin />} />{" "}
        {/* Staff login  */}
        <Route path="/staffprofile" element={<StaffProfile />} />{" "}
        {/* Staff profile */}
        <Route path="/globalnav" element={<GlobalNav />} />{" "}
        {/* for global nav */}
        <Route path="/addproduct" element={<AddProducts />} />{" "}
        {/* Staff adding products */}
        <Route path="/addauction" element={<AddAuction />} />{" "}
        {/* Staff adding auction */}
        <Route path="/adduser" element={<AddUser />} />{" "}
        {/* Staff adding new user */}
        <Route path="/editprofile" element={<EditProfile />} />{" "}
        {/* Staff edit profile  */}
        <Route path="/viewauction" element={<ViewAuction />} />{" "}
        {/* Staff view auction  */}
        <Route path="/viewproduct" element={<ViewProducts />} />{" "}
        {/* Staff View Products  */}
        <Route path="/viewuser" element={<ViewUser />} />{" "}
        {/* Staff View user  */}
        <Route path="/editproduct" element={<EditProduct />} />{" "}
        {/* Staff Edit product  */}
        <Route path="/editauction" element={<EditAuction />} />{" "}
        {/* Staff Edit auction  */}
        <Route path="/edituser" element={<EditUser />} />{" "}
        {/* Staff Edit User  */}
        <Route path="/viewmore" element={<ViewMore />} />{" "}
        {/* Bottom View More  */}
        <Route path="/contactus" element={<ContactUs />} />{" "}
        {/* Footer Contact us page  */}
        <Route path="*" element={<Notfound />} /> {/*Not found page  */}
        <Route path="/choose" element={<ChooseMore />} />{" "}
        {/*Choosemore page  */}
        <Route path="/bodynav" element={<BodyNav />} />{" "}
        {/*main nav on home page  */}
        <Route path="/aboutus" element={<Aboutus />} /> {/*about us page */}
        <Route path="/cosign" element={<Cosign />} />{" "}
        {/*copart like signup page  */}
        <Route path="/coplan" element={<CoPlans />} />{" "}
        {/*copart like MEmbership page*/}
        <Route path="/coplatinum" element={<Coplatinum />} />{" "}
        {/*copart platinum like MEmbership page*/}
        <Route path="/viewmorecard" element={<ViewmoreCard />} />{" "}
        {/*copart platinum like MEmbership page*/}
      </Routes>

      <Footer />
    </>
  );
}
