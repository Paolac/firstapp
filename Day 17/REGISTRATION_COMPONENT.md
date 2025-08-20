# Registration UI Component

This is a modern, responsive registration form component that matches the style of the existing project. The component includes form validation, animations, and a user-friendly interface.

## Features

- **Responsive Design**: Works on all device sizes
- **Form Validation**: Client-side validation for all fields
- **Animated Elements**: Smooth animations for form elements and feedback
- **Error Handling**: Clear error messages for invalid inputs
- **Success Feedback**: Visual confirmation when form is submitted successfully
- **Matching Style**: Uses the same color palette and animation style as the existing project

## Files

- `register.html` - HTML structure for the registration form
- `register.css` - Styling that matches the project's theme
- `register.js` - JavaScript for form validation and animations

## How to Use

1. Include these files in your project
2. Link to the HTML file or incorporate the HTML into your existing page
3. Customize the form fields as needed
4. Modify the form submission handler in the JavaScript file to connect to your backend

## Form Validation

The form validates:
- Username (required, minimum 3 characters)
- Email (required, valid email format)
- Password (required, minimum 8 characters, must include letters, numbers, and special characters)
- Password confirmation (must match password)

## Animation Details

The component includes several animations:
- Form elements fade in sequentially on page load
- Error feedback includes a subtle shake animation
- The submit button has a ripple effect on hover
- A success animation plays when the form is submitted successfully
- A decorative animated element in the corner matches the project's animation style

## Customization

You can easily customize:
- Colors by modifying the CSS variables
- Form fields by editing the HTML structure
- Validation rules by updating the JavaScript validation functions
- Animation timing and effects by adjusting the CSS animations

## Integration with Existing Project

This component is designed to integrate seamlessly with the existing project. It uses the same color palette, animation techniques, and styling patterns to maintain a consistent user experience.

