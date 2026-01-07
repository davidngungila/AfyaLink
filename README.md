# AfyaLink - Healthcare Management System

A comprehensive healthcare management system built with Laravel, featuring role-based access control, modern UI design, and advanced navigation system.

## Features

- 🎨 **Modern Design System** - Built with Tailwind CSS v4 and custom theme system
- 🌓 **Light/Dark Mode** - Seamless theme switching with persistence
- 🔐 **Role-Based Access Control** - Comprehensive permission system for different user roles
- 📱 **Responsive Design** - Mobile-first approach with adaptive layouts
- 🎯 **Dynamic Navigation** - Context-aware sidebar navigation based on user roles
- 🚀 **Auto-Push to GitHub** - Automatic git push on commit (Windows PowerShell)

## Color Scheme

- **Main Color**: `#940000` (Dark Red)
- **Gradient Support**: Multiple gradient variations based on main color
- **Theme System**: Full light/dark mode support with CSS variables

## User Roles

The system supports multiple user roles with distinct navigation structures:

1. **System Administrator** - Full system access
2. **Organization Administrator** - Facility-level management
3. **Attending Physician** - Clinical care and documentation
4. **Registered Nurse** - Patient care and documentation
5. **Patient** - Self-service portal access
6. **And more...** - See navigation.js for complete role definitions

## Installation

1. Clone the repository:
```bash
git clone https://github.com/davidngungila/AfyaLink.git
cd AfyaLink/afyalink
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install Node dependencies:
```bash
npm install
```

4. Set up environment:
```bash
cp .env.example .env
php artisan key:generate
```

5. Build assets:
```bash
npm run build
```

6. Run development server:
```bash
composer run dev
```

## Development

### Running in Development Mode

```bash
composer run dev
```

This will start:
- Laravel development server
- Queue worker
- Vite dev server

### Building for Production

```bash
npm run build
```

## Git Auto-Push

The repository is configured to automatically push commits to GitHub. On Windows, the PowerShell hook (`post-commit.ps1`) will execute after each commit.

To manually trigger a push:
```bash
git push origin main
```

## Project Structure

```
afyalink/
├── resources/
│   ├── css/
│   │   └── app.css          # Main stylesheet with theme system
│   ├── js/
│   │   ├── app.js            # Main JavaScript entry
│   │   ├── theme.js          # Theme management system
│   │   └── navigation.js    # Role-based navigation system
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php # Main layout template
│       ├── dashboard.blade.php
│       └── welcome.blade.php
├── routes/
│   └── web.php               # Web routes
└── .git/
    └── hooks/
        └── post-commit.ps1   # Auto-push hook (Windows)
```

## Theme System

The theme system uses CSS variables for dynamic theming:

- Light mode variables: `--bg-primary`, `--text-primary`, etc.
- Dark mode variables: Applied via `[data-theme="dark"]` attribute
- Theme toggle: Managed by `theme.js`
- Persistence: Stored in `localStorage`

## Navigation System

The navigation system (`navigation.js`) provides:

- Dynamic sidebar generation based on user role
- Icon support for menu items
- Active state management
- Permission-based menu filtering (ready for backend integration)

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit with descriptive messages
4. Push to your branch (auto-push enabled)
5. Create a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ using Laravel and Tailwind CSS
