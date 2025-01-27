# Gadget Capital ✨
Your go-to destination for the latest and greatest gadgets!

## Live Website
[Click here to view the live site](https://gadget-capital-28281m.netlify.app/) (Replace with the actual deployed URL).


---

## Project Overview
gadgetCapital is a feature-rich e-commerce platform designed for gadget enthusiasts. The website offers a seamless shopping experience with essential functionalities such as product categorization, shopping cart, wishlist, and product filtering. Built with modern web development technologies, the platform ensures a smooth and engaging user experience.

---

## Key Features
1. **Dynamic Navbar**: Includes menu items such as Logo, Brand Name, Dashboard, and Stats. Active routes are visually indicated.
2. **Home Page**:
   - Attractive banner with a button redirecting to the Dashboard page.
   - Sidebar for gadget categories (e.g., Computers, Phones, Smart Watches, etc.).
   - Gadgets displayed as cards with product details and a 'Details' button.
3. **Product Details Page**:
   - Displays product image, name, price, description, specifications, availability, and rating.
   - 'Add to Cart' and 'Add to Wishlist' functionalities with toast notifications.
   - Prevents duplicate items in the wishlist.
4. **Dashboard Page**:
   - Two tabs: Cart and Wishlist.
   - Sort items in the Cart by price (descending).
   - Total price calculation in the Cart tab.
5. **Statistics Page**:
   - Composed Chart (Price vs. Product Name) with area, bar, and scatter data.
6. **Error Handling**:
   - 404 Page with meaningful content.
   - Reloading the site doesn’t lead to errors.
7. **Other Features**:
   - Limit cart total to $1000 and provide error messages when exceeded.
   - Remove items from Cart and Wishlist.
   - Add items from Wishlist to Cart (if within the price limit).
   - Congratulatory modal after successful purchase.
   - Dynamic background colors and page titles using React hooks.

---

## Tech Stack
- **Frontend**: React.js (with React Router, Context API)
- **Backend**: JSON Server (for mock API)
- **Styling**: Tailwind CSS
- **Charts**: MUI X-Charts
- **Toast Notifications**: React Toastify
- **State Management**: Context API with LocalStorage for persistence

---

## React Fundamental Concepts Used
1. **Components**: Modular and reusable components like Navbar, Footer, Card, etc.
2. **State Management**: Managed app state using React's Context API and `useState`.
3. **Routing**: Implemented client-side routing using React Router.
4. **Hooks**:
   - `useState`, `useEffect` for managing state and side effects.
   - `useContext` for accessing shared state.
   - `useLocation` for dynamic background color.
   - `useNavigate` for navigation.
5. **Conditional Rendering**: Displayed dynamic content based on state or props.
6. **Event Handling**: Handled click events for cart and wishlist functionalities.

---

## Pages and Functionalities
1. **Home Page**:
   - Display of categories and gadgets.
   - Navigation to the details page of a product.
2. **Product Details Page**:
   - Full details of the product.
   - 'Add to Cart' and 'Add to Wishlist' buttons with functionality.
3. **Dashboard Page**:
   - Separate tabs for Cart and Wishlist.
   - Total price display and sorting in the Cart.
4. **Statistics Page**:
   - Composed Chart visualization (Price vs. Product Name).
5. **404 Page**:
   - Custom error page for invalid routes.

---

## Handling and Managing Data
- **Context API**: For managing global state (cart and wishlist).
- **LocalStorage**: For data persistence across page reloads.

---

## How to Run the Project Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd gadgetCapital
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. (Optional) Start the JSON Server for mock API:
   ```bash
   npx json-server --watch db.json --port 5000
   ```

---

## Deployment
The project is deployed using [Netlify/Vercel/Other Platform] (Replace with the actual platform).

---

## To-Do / Future Enhancements
1. Add user authentication.
2. Implement advanced filtering options (e.g., by rating, availability).
3. Optimize performance for large datasets.

---

## Special Thanks
A big thanks to all contributors, instructors, and designers who made this project possible!