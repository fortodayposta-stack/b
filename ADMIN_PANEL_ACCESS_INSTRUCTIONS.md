# 🔐 KIVU Marketplace - Admin Panel Access Instructions

## How to Access the Admin Panel

The admin panel is a special area where you (the marketplace owner) can manage all aspects of your KIVU marketplace.

---

## Step 1: Create Admin Account

To access the admin panel, you need to create an account with the admin email address.

### Using the Website:

1. **Open your browser** and go to: `http://localhost:3000/register`
   
2. **Fill in the registration form:**
   - **Account Type**: Select "Buyer" (doesn't matter for admin)
   - **Full Name**: Your name (e.g., "Admin User")
   - **Email**: **MUST BE**: `admin@kivu.market`  ⚠️ THIS IS IMPORTANT
   - **Password**: Choose a strong password (remember it!)

3. **Click "Sign Up"**

4. You're now registered as admin!

---

## Step 2: Access the Admin Panel

Once you're logged in with the admin email (`admin@kivu.market`), you can access the admin panel:

### Method 1: Direct URL
Simply go to: **`http://localhost:3000/admin`**

### Method 2: Bookmark It
- Bookmark the URL `http://localhost:3000/admin` for quick access
- Name it "KIVU Admin Panel"

---

## 🎛️ Admin Panel Features

Once you're in the admin panel, you'll see:

### 1. **Dashboard Overview** (Statistics Cards)
   - **Total Orders**: See how many orders have been placed
   - **Pending Products**: Number of products waiting for your approval
   - **Total Reviews**: All customer reviews
   - **Total Users**: Number of registered users

### 2. **Pending Products Tab** 
   - **What it shows**: Products that sellers want to add to the marketplace
   - **What you can do**:
     - ✅ **View Details**: Click "View Details" to see full product information with photos
     - ✅ **Approve**: Click green "Approve" button to add product to marketplace
     - ❌ **Reject**: Click red "Reject" button to deny the product (you'll be asked for a reason)
   
   - **Product Information Displayed**:
     - Product name and description
     - Seller name who submitted it
     - Category
     - Regular price and Pool price
     - Product photos
     - Submission date/time

### 3. **All Orders Tab**
   - **What it shows**: Every order placed on your marketplace
   - **Information displayed**:
     - Order ID (e.g., KIVU-2025-001)
     - Customer name and email
     - Items purchased (with quantities)
     - Total amount paid
     - Payment method used (Stripe, PayPal, MTN MoMo, Airtel Money)
     - Delivery country (Rwanda, Tanzania, Uganda, Kenya, Burundi)
     - Order status:
       - 🟡 **Processing**: Order received, being prepared
       - 🔵 **Shipped**: Order sent to customer
       - 🟢 **Delivered**: Customer received the order
   
### 4. **Reviews Tab**
   - **What it shows**: All customer reviews and ratings
   - **Information displayed**:
     - Product name being reviewed
     - Customer name
     - Star rating (1-5 stars)
     - Review comment
     - Date submitted
     - Verified purchase badge (✓)
     - Helpful count (how many people found it useful)
   
   - **What you can do**:
     - 🗑️ **Delete Review**: Click trash icon to remove inappropriate reviews

---

## 🔒 Security Note

**IMPORTANT**: Only accounts with email `admin@kivu.market` can access the admin panel.

If someone tries to access `/admin` without this email, they will be automatically redirected to the homepage.

---

## 📱 Quick Access Tips

### For Daily Use:
1. **Bookmark these URLs**:
   - Admin Panel: `http://localhost:3000/admin`
   - Main Site: `http://localhost:3000`
   - Contact Page: `http://localhost:3000/contact`

2. **Keep Admin Email Safe**: 
   - Never share your admin password
   - Use a strong password (mix of letters, numbers, symbols)
   - Change password regularly

3. **Check Regularly**:
   - **Daily**: Check pending products (approve/reject quickly)
   - **Daily**: Review new orders and update order status
   - **Weekly**: Review customer comments for feedback
   - **Weekly**: Check for spam or inappropriate reviews

---

## 🎯 Common Admin Tasks

### Task 1: Approve a Seller's Product
1. Go to `/admin`
2. Click **"Pending Products"** tab
3. Find the product you want to review
4. Click **"View Details"** to see full information
5. If product is good:
   - Click green **"Approve"** button
   - Product will now appear on marketplace
6. If product is not acceptable:
   - Click red **"Reject"** button
   - Enter reason for rejection
   - Seller will be notified

### Task 2: Monitor Orders
1. Go to `/admin`
2. Click **"All Orders"** tab
3. Review order details:
   - Check customer information
   - Verify items ordered
   - Note payment method
   - See delivery country
4. Update order status as needed (feature can be added)

### Task 3: Manage Reviews
1. Go to `/admin`
2. Click **"Reviews"** tab
3. Read through customer reviews
4. Delete any:
   - Spam reviews
   - Inappropriate language
   - Fake reviews
   - Off-topic comments

---

## 🚀 Admin Panel URL (For Production)

When you deploy your site to production:

**Development (now)**: `http://localhost:3000/admin`

**Production (after deployment)**: `https://yourwebsite.com/admin`

Replace `yourwebsite.com` with your actual domain name.

---

## 📧 Admin Login Credentials

**Admin Email**: `admin@kivu.market`
**Password**: (The password you created during registration)

⚠️ **KEEP THESE CREDENTIALS SAFE AND PRIVATE!**

---

## 🆘 Troubleshooting

### Problem: Can't access admin panel
**Solution**: 
- Make sure you're logged in with email: `admin@kivu.market`
- Try logging out and logging back in
- Clear browser cookies and try again

### Problem: Admin panel looks broken
**Solution**:
- Refresh the page (Ctrl+R or Cmd+R)
- Clear browser cache
- Try a different browser

### Problem: Forgot admin password
**Solution**:
- Currently: Contact your developer
- Future: Password reset feature can be added

---

## 💡 Future Enhancements (Can Be Added)

These features are NOT yet implemented but can be added:
- ✨ Change order status from admin panel
- ✨ Reply to customer reviews
- ✨ Send notifications to sellers about product approval/rejection
- ✨ Export orders to CSV/Excel
- ✨ View sales analytics and charts
- ✨ Manage user accounts (ban/suspend)
- ✨ Edit product prices
- ✨ Bulk approve/reject products
- ✨ Email templates management

---

## 📞 Need Help?

If you need any modifications to the admin panel or have questions:
- Check `/app/KIVU_MARKETPLACE_SUMMARY.md` for overall system info
- Contact your development team
- Or visit the Contact page to submit questions

---

**Remember**: The admin panel is your control center for the entire KIVU marketplace. Use it wisely! 🎯

---

Last Updated: January 20, 2025
