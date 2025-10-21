# Smart Carles Profile Card

A modern, responsive profile website showcasing personal information across multiple pages. Built with semantic HTML, CSS, and vanilla JavaScript, featuring accessibility-first design and interactive contact forms.

## 🌟 Features

- **Multi-page Navigation**: Home profile card, detailed About page, and interactive Contact form
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Accessibility First**: WCAG compliant with proper ARIA labels, keyboard navigation, and screen reader support
- **Interactive Contact Form**: Client-side validation with real-time feedback and error handling
- **Modern Styling**: Clean design with gradient backgrounds, smooth transitions, and focus indicators
- **Real-time Updates**: Current timestamp display that updates every second

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/smart-carles-profilecard)

## 📁 Project Structure

```
smart-carles-profilecard/
├── index.html              # Main profile card page
├── about.html              # Detailed about page with personal journey
├── contact.html            # Contact form with validation
├── index.css               # Complete styling for all pages
├── script.js               # Time display functionality
├── contact-form.js         # Form validation and submission
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper accessibility attributes
- **CSS3**: Modern styling with Flexbox, CSS Grid, and custom properties
- **Vanilla JavaScript**: Form validation, real-time updates, and DOM manipulation
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

## 📋 Pages Overview

### 🏠 Home Page (`index.html`)

- Personal profile card with avatar and bio
- Real-time timestamp display
- Social links and navigation
- Hobbies and dislikes sections

### 👤 About Page (`about.html`)

- Personal biography and journey
- HNG Internship goals and aspirations
- Areas for improvement and growth
- Personal note to future self
- Extra thoughts and reflections

### 📧 Contact Page (`contact.html`)

- Interactive contact form with validation
- Required fields: Name, Email, Subject, Message
- Real-time error handling and success feedback
- Accessible form design with proper labels

## 🎯 Form Validation Features

- **Required Field Validation**: All fields must be filled
- **Email Validation**: Proper email format checking
- **Message Length**: Minimum 10 characters required
- **Real-time Feedback**: Errors clear as user types
- **Accessibility**: Screen reader compatible error messages
- **Success Handling**: Confirmation message after submission

## 🔧 Installation & Setup

### Clone This Project

```bash
git clone https://github.com/Sam-Charles12/smart-carles-profilecard.git
cd smart-carles-profilecard
```

### Local Development

#### Option 1: VS Code Live Server

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Open the project in VS Code
3. Right-click `index.html` and select "Open with Live Server"
4. Your browser will open at `http://localhost:5500`

#### Option 2: Direct Browser Opening

1. Double-click `index.html` to open in your default browser
2. Navigate between pages using the navigation links

#### Option 3: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000`

## 🎨 Customization Guide

### Updating Personal Information

#### Profile Details (`index.html`)

```html
<!-- Update name, title, and bio -->
<h2 data-testid="test-user-name">Your Name</h2>
<p class="title">Your Title</p>
<p class="profile-bio" data-testid="test-user-bio">Your bio here...</p>
```

#### Social Links

```html
<!-- Update your social media links -->
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://twitter.com/yourusername" target="_blank">Twitter</a>
```

### Styling Customization (`index.css`)

#### Color Scheme

```css
/* Update the gradient background */
body {
  background: linear-gradient(
    160deg,
    #your-color-1,
    #your-color-2 60%,
    #your-color-3
  );
}

/* Update accent colors */
.profile-figure {
  border: 4px solid rgba(your-accent-color, 0.35);
}
```

#### Typography

```css
/* Update font family */
body {
  font-family: "Your-Font", sans-serif;
}
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works between pages
- [ ] Contact form validation works
- [ ] Responsive design on different screen sizes
- [ ] Keyboard navigation functions properly
- [ ] Screen reader compatibility

### Form Testing

- [ ] Try submitting empty form (should show errors)
- [ ] Test invalid email formats
- [ ] Test message with less than 10 characters
- [ ] Test successful form submission

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of headings, sections, and landmarks
- **ARIA Labels**: Descriptive labels for interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear visual focus states
- **Screen Reader Support**: Proper alt text and ARIA attributes
- **Color Contrast**: WCAG AA compliant color combinations

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built as part of the HNG Internship program
- Inspired by modern profile card designs
- Accessibility guidelines from WCAG 2.1
- Icons and images from Unsplash

## 📞 Contact

**Oladipo Samcharles**

- GitHub: [@Sam-Charles12](https://github.com/Sam-Charles12)
- Twitter: [@carles_devlog](https://twitter.com/carles_devlog)
- Email: hello@oladiposamcharles.dev

---

_Built with ❤️ during the HNG Internship journey_
