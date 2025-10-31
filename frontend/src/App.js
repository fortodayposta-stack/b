import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/seller/AddProduct";
import MyProducts from "./pages/seller/MyProducts";

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="App flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/seller/add-product" element={<AddProduct />} />
                <Route path="/seller/products" element={<MyProducts />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
