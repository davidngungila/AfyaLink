@extends('layouts.app')

@section('title', 'Dashboard - AfyaLink')
@section('page-title', 'Dashboard')

@section('content')
<div class="space-y-6">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-[var(--text-tertiary)]">Total Patients</p>
                    <p class="text-3xl font-bold text-[var(--text-primary)] mt-2">1,234</p>
                    <p class="text-xs text-green-600 mt-2">+12% from last month</p>
                </div>
                <div class="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-[var(--text-tertiary)]">Active Appointments</p>
                    <p class="text-3xl font-bold text-[var(--text-primary)] mt-2">456</p>
                    <p class="text-xs text-blue-600 mt-2">+8% from last month</p>
                </div>
                <div class="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-[var(--text-tertiary)]">Pending Orders</p>
                    <p class="text-3xl font-bold text-[var(--text-primary)] mt-2">89</p>
                    <p class="text-xs text-yellow-600 mt-2">-5% from last month</p>
                </div>
                <div class="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-sm text-[var(--text-tertiary)]">Revenue</p>
                    <p class="text-3xl font-bold text-[var(--text-primary)] mt-2">$45.6K</p>
                    <p class="text-xs text-green-600 mt-2">+15% from last month</p>
                </div>
                <div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Recent Activity -->
        <div class="lg:col-span-2 card">
            <div class="card-header">
                <h2 class="card-title">Recent Activity</h2>
            </div>
            <div class="space-y-4">
                <div class="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                    <div class="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <span class="text-white text-sm font-semibold">JD</span>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-[var(--text-primary)]">New patient admission</p>
                        <p class="text-xs text-[var(--text-tertiary)] mt-1">John Doe was admitted to Ward 3A</p>
                        <p class="text-xs text-[var(--text-tertiary)] mt-1">2 hours ago</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                    <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-[var(--text-primary)]">Lab results available</p>
                        <p class="text-xs text-[var(--text-tertiary)] mt-1">Blood test results for Patient #1234 are ready</p>
                        <p class="text-xs text-[var(--text-tertiary)] mt-1">4 hours ago</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                    <div class="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center flex-shrink-0">
                        <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-[var(--text-primary)]">Medication alert</p>
                        <p class="text-xs text-[var(--text-tertiary)] mt-1">Patient #5678 requires medication review</p>
                        <p class="text-xs text-[var(--text-tertiary)] mt-1">6 hours ago</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">Quick Actions</h2>
            </div>
            <div class="space-y-3">
                <a href="/patients/admit" class="btn btn-primary w-full justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    New Admission
                </a>
                <a href="/clinical/orders" class="btn btn-secondary w-full justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                    New Order
                </a>
                <a href="/patients/list" class="btn btn-secondary w-full justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    View Patients
                </a>
                <a href="/diagnostics/labs" class="btn btn-secondary w-full justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Lab Results
                </a>
            </div>
        </div>
    </div>
</div>
@endsection

