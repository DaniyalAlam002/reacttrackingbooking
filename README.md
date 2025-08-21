# HealthCare Clinic - Doctor's Booking Website

A modern, responsive doctor's booking website built with React, Vite.js, React Router, and Tailwind CSS.

## Features

### 🏠 Home Page (/)
- **Hero Section**: Eye-catching hero with CTA buttons linking to booking page
- **Phone Number Display**: Clinic phone number prominently displayed in header, hero section, and footer
- **Newsletter Subscription**: Email subscription input (without form tag)
- **Contact Section**: Name, phone, and message inputs (without form tag)
- **Features Section**: Highlighting clinic benefits
- **Multiple CTAs**: Strong call-to-action buttons throughout

### 📅 Booking Page (/book)
- **Comprehensive Form**: Large booking form with all common input types
- **Input Types Included**:
  - Text, email, password, tel, number
  - Date, time, file upload
  - Textarea, select dropdown
  - Checkboxes, radio buttons
- **Form Sections**:
  - Personal Information
  - Appointment Details
  - Medical Information
  - Insurance & Documents
  - Preferences
  - Agreements
- **User-Friendly**: Styled with Tailwind CSS for excellent UX

### ℹ️ About Page (/about)
- **Clinic Information**: Mission, values, and philosophy
- **Medical Team**: Doctor profiles with specialties and experience
- **Services Offered**: Comprehensive list of healthcare services
- **Contact Information**: Phone numbers displayed throughout
- **CTAs**: Multiple booking links and call-to-action buttons

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite.js
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Development**: Hot Module Replacement (HMR)

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tracking-site-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
tracking-site-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with phone number
│   │   └── Footer.jsx          # Footer with contact information
│   ├── pages/
│   │   ├── Home.jsx            # Home page with hero and CTAs
│   │   ├── Booking.jsx         # Comprehensive booking form
│   │   └── About.jsx           # About page with team info
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind CSS and custom styles
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## Key Features

### 🎨 Design System
- **Modern UI**: Clean, professional medical website design
- **Responsive**: Mobile-first approach with Tailwind CSS
- **Color Scheme**: Professional blue and green color palette
- **Typography**: Clear, readable fonts for medical content
- **Cards & Shadows**: Rounded corners and soft shadows for sections

### 📱 Mobile Responsiveness
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly form inputs
- Adaptive spacing and typography

### 🔗 Navigation
- React Router for client-side routing
- Sticky header with active page highlighting
- Mobile-friendly navigation menu
- Breadcrumb-style navigation flow

### 📞 Contact Integration
- Phone number displayed in multiple locations
- Contact forms for inquiries
- Newsletter subscription functionality
- Emergency contact information

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Content
- Update clinic information in component files
- Modify doctor profiles in `About.jsx`
- Customize services list
- Update contact information throughout

### Styling
- Modify `src/index.css` for custom CSS
- Update Tailwind classes in components
- Add new utility classes as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
