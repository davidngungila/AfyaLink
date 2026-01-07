<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', config('app.name', 'AfyaLink'))</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />

    <!-- Styles -->
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/navigation.js'])
</head>
<body class="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside id="sidebar" class="w-64 bg-[var(--sidebar-bg)] border-r border-[var(--border-color)] fixed left-0 top-0 h-full z-40 transition-all duration-300">
            <div class="flex flex-col h-full">
                <!-- Logo/Header -->
                <div class="p-6 border-b border-[var(--border-color)]">
                    <div class="flex items-center justify-between">
                        <a href="/" class="flex items-center space-x-2">
                            <div class="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold text-lg">A</span>
                            </div>
                            <span class="text-xl font-bold text-[var(--text-primary)]">AfyaLink</span>
                        </a>
                        <button id="sidebar-toggle" class="lg:hidden p-2 rounded-md hover:bg-[var(--sidebar-hover)] text-[var(--text-secondary)]">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Navigation -->
                <div id="sidebar-navigation" class="flex-1 overflow-y-auto p-4">
                    <!-- Navigation will be dynamically generated here -->
                </div>

                <!-- Footer -->
                <div class="p-4 border-t border-[var(--border-color)]">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                                <span class="text-white text-xs font-semibold">U</span>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-[var(--text-primary)] truncate">User Name</p>
                                <p class="text-xs text-[var(--text-tertiary)] truncate">user@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 lg:ml-64">
            <!-- Top Header -->
            <header class="sticky top-0 z-30 bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-sm">
                <div class="flex items-center justify-between px-6 py-4">
                    <div class="flex items-center space-x-4">
                        <button id="mobile-sidebar-toggle" class="lg:hidden p-2 rounded-md hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        <h1 class="text-2xl font-semibold text-[var(--text-primary)]">@yield('page-title', 'Dashboard')</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <!-- Theme Toggle -->
                        <div class="theme-toggle-container"></div>
                        <!-- Notifications -->
                        <button class="p-2 rounded-md hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] relative">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                            </svg>
                            <span class="absolute top-1 right-1 w-2 h-2 bg-[#940000] rounded-full"></span>
                        </button>
                        <!-- User Menu -->
                        <div class="relative">
                            <button class="flex items-center space-x-2 p-2 rounded-md hover:bg-[var(--bg-secondary)]">
                                <div class="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                                    <span class="text-white text-xs font-semibold">U</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Page Content -->
            <main class="p-6">
                @yield('content')
            </main>
        </div>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <div id="sidebar-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden hidden"></div>

    <script>
        // Mobile sidebar toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileToggle = document.getElementById('mobile-sidebar-toggle');
            const sidebarToggle = document.getElementById('sidebar-toggle');
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');

            function openSidebar() {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            }

            function closeSidebar() {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }

            if (mobileToggle) {
                mobileToggle.addEventListener('click', openSidebar);
            }

            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', closeSidebar);
            }

            if (overlay) {
                overlay.addEventListener('click', closeSidebar);
            }

            // Close sidebar on window resize if desktop
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 1024) {
                    closeSidebar();
                }
            });
        });
    </script>
</body>
</html>

