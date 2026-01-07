/**
 * Role-Based Navigation System
 * Dynamically generates navigation based on user role and permissions
 */

class NavigationManager {
    constructor() {
        this.roles = this.initializeRoles();
        this.currentRole = this.getCurrentRole();
    }

    initializeRoles() {
        return {
            'system_admin': {
                name: 'System Administrator',
                color: 'primary',
                navigation: [
                    {
                        title: 'DASHBOARD',
                        icon: 'dashboard',
                        items: [
                            { label: 'System Overview', route: '/dashboard/system-overview', permission: 'view' },
                            { label: 'Performance Analytics', route: '/dashboard/performance', permission: 'view' },
                            { label: 'Global Health Metrics', route: '/dashboard/health-metrics', permission: 'view' }
                        ]
                    },
                    {
                        title: 'CONFIGURATION',
                        icon: 'settings',
                        items: [
                            { label: 'System Settings', route: '/configuration/system-settings', permission: 'admin' },
                            { label: 'Organization Management', route: '/configuration/organizations', permission: 'admin' },
                            { label: 'Master Data Management', route: '/configuration/master-data', permission: 'admin' },
                            { label: 'Role & Permission Templates', route: '/configuration/roles', permission: 'admin' },
                            { label: 'Integration Hub', route: '/configuration/integrations', permission: 'admin' }
                        ]
                    },
                    {
                        title: 'SECURITY',
                        icon: 'shield',
                        items: [
                            { label: 'User Management', route: '/security/users', permission: 'admin' },
                            { label: 'Audit Trail Viewer', route: '/security/audit-trail', permission: 'view' },
                            { label: 'Security Policies', route: '/security/policies', permission: 'admin' },
                            { label: 'Compliance Dashboard', route: '/security/compliance', permission: 'view' }
                        ]
                    },
                    {
                        title: 'MONITORING',
                        icon: 'monitor',
                        items: [
                            { label: 'System Health', route: '/monitoring/system-health', permission: 'view' },
                            { label: 'Usage Analytics', route: '/monitoring/analytics', permission: 'view' },
                            { label: 'Incident Management', route: '/monitoring/incidents', permission: 'admin' },
                            { label: 'Backup Status', route: '/monitoring/backups', permission: 'view' }
                        ]
                    },
                    {
                        title: 'BILLING & FINANCE',
                        icon: 'dollar',
                        items: [
                            { label: 'Subscription Management', route: '/billing/subscriptions', permission: 'admin' },
                            { label: 'Billing Overview', route: '/billing/overview', permission: 'view' },
                            { label: 'Invoice Management', route: '/billing/invoices', permission: 'admin' }
                        ]
                    },
                    {
                        title: 'SUPPORT',
                        icon: 'support',
                        items: [
                            { label: 'Ticket Management', route: '/support/tickets', permission: 'admin' },
                            { label: 'Knowledge Base', route: '/support/knowledge-base', permission: 'view' },
                            { label: 'System Updates', route: '/support/updates', permission: 'view' }
                        ]
                    }
                ]
            },
            'org_admin': {
                name: 'Organization Administrator',
                color: 'primary',
                navigation: [
                    {
                        title: 'DASHBOARD',
                        icon: 'dashboard',
                        items: [
                            { label: 'Facility Overview', route: '/dashboard/facility-overview', permission: 'view' },
                            { label: 'Capacity Dashboard', route: '/dashboard/capacity', permission: 'view' },
                            { label: 'Financial Snapshot', route: '/dashboard/financial', permission: 'view' }
                        ]
                    },
                    {
                        title: 'PERSONNEL MANAGEMENT',
                        icon: 'users',
                        items: [
                            { label: 'Staff Directory', route: '/personnel/staff', permission: 'view' },
                            { label: 'Scheduling Overview', route: '/personnel/scheduling', permission: 'view' },
                            { label: 'Credential Tracking', route: '/personnel/credentials', permission: 'view' },
                            { label: 'Training Compliance', route: '/personnel/training', permission: 'view' }
                        ]
                    },
                    {
                        title: 'FINANCIAL ADMIN',
                        icon: 'dollar',
                        items: [
                            { label: 'Billing Dashboard', route: '/financial/billing', permission: 'view' },
                            { label: 'Accounts Receivable', route: '/financial/receivable', permission: 'view' },
                            { label: 'Accounts Payable', route: '/financial/payable', permission: 'view' },
                            { label: 'Financial Reports', route: '/financial/reports', permission: 'view' }
                        ]
                    },
                    {
                        title: 'FACILITY OPERATIONS',
                        icon: 'building',
                        items: [
                            { label: 'Bed Management', route: '/operations/beds', permission: 'view' },
                            { label: 'Equipment Tracking', route: '/operations/equipment', permission: 'view' },
                            { label: 'Supply Chain', route: '/operations/supply-chain', permission: 'view' },
                            { label: 'Maintenance Logs', route: '/operations/maintenance', permission: 'view' }
                        ]
                    },
                    {
                        title: 'COMPLIANCE',
                        icon: 'shield',
                        items: [
                            { label: 'Regulatory Reporting', route: '/compliance/reporting', permission: 'view' },
                            { label: 'Quality Metrics', route: '/compliance/quality', permission: 'view' },
                            { label: 'Incident Reports', route: '/compliance/incidents', permission: 'view' },
                            { label: 'Audit Preparation', route: '/compliance/audit', permission: 'view' }
                        ]
                    },
                    {
                        title: 'SETTINGS',
                        icon: 'settings',
                        items: [
                            { label: 'Organization Profile', route: '/settings/profile', permission: 'admin' },
                            { label: 'Department Setup', route: '/settings/departments', permission: 'admin' },
                            { label: 'User Access Management', route: '/settings/access', permission: 'admin' },
                            { label: 'Local Configuration', route: '/settings/config', permission: 'admin' }
                        ]
                    }
                ]
            },
            'attending_physician': {
                name: 'Attending Physician',
                color: 'primary',
                navigation: [
                    {
                        title: 'MY DASHBOARD',
                        icon: 'dashboard',
                        items: [
                            { label: 'My Patients', route: '/dashboard/my-patients', permission: 'view' },
                            { label: "Today's Rounds", route: '/dashboard/rounds', permission: 'view' },
                            { label: 'Pending Orders', route: '/dashboard/pending-orders', permission: 'view' },
                            { label: 'Unread Results', route: '/dashboard/results', permission: 'view' }
                        ]
                    },
                    {
                        title: 'PATIENT CARE',
                        icon: 'heart',
                        items: [
                            { label: 'Patient List', route: '/patients/list', permission: 'view' },
                            { label: 'New Admission', route: '/patients/admit', permission: 'create' },
                            { label: 'Discharge Summary', route: '/patients/discharge', permission: 'edit' },
                            { label: 'Transfer Patients', route: '/patients/transfer', permission: 'edit' }
                        ]
                    },
                    {
                        title: 'CLINICAL TOOLS',
                        icon: 'stethoscope',
                        items: [
                            { label: 'Order Entry', route: '/clinical/orders', permission: 'create' },
                            { label: 'Progress Notes', route: '/clinical/notes', permission: 'create' },
                            { label: 'Consult Requests', route: '/clinical/consults', permission: 'create' },
                            { label: 'Procedure Notes', route: '/clinical/procedures', permission: 'create' }
                        ]
                    },
                    {
                        title: 'DIAGNOSTICS',
                        icon: 'microscope',
                        items: [
                            { label: 'Lab Results', route: '/diagnostics/labs', permission: 'view' },
                            { label: 'Radiology Viewer', route: '/diagnostics/radiology', permission: 'view' },
                            { label: 'Pathology Reports', route: '/diagnostics/pathology', permission: 'view' },
                            { label: 'POC Results', route: '/diagnostics/poc', permission: 'view' }
                        ]
                    },
                    {
                        title: 'COMMUNICATION',
                        icon: 'message',
                        items: [
                            { label: 'Inbox', route: '/communication/inbox', permission: 'view' },
                            { label: 'Referral Network', route: '/communication/referrals', permission: 'view' },
                            { label: 'Multidisciplinary Team', route: '/communication/team', permission: 'view' },
                            { label: 'Patient Messages', route: '/communication/patient-messages', permission: 'view' }
                        ]
                    },
                    {
                        title: 'SCHEDULE',
                        icon: 'calendar',
                        items: [
                            { label: 'Daily Rounds', route: '/schedule/rounds', permission: 'view' },
                            { label: 'Clinic Schedule', route: '/schedule/clinic', permission: 'view' },
                            { label: 'On-Call Calendar', route: '/schedule/oncall', permission: 'view' },
                            { label: 'Leave Management', route: '/schedule/leave', permission: 'view' }
                        ]
                    }
                ]
            },
            'nurse': {
                name: 'Registered Nurse',
                color: 'primary',
                navigation: [
                    {
                        title: 'SHIFT HANDOVER',
                        icon: 'exchange',
                        items: [
                            { label: 'Patient Assignments', route: '/shift/assignments', permission: 'view' },
                            { label: 'Critical Information', route: '/shift/critical', permission: 'view' },
                            { label: 'Pending Tasks', route: '/shift/tasks', permission: 'view' },
                            { label: 'Care Plans', route: '/shift/care-plans', permission: 'view' }
                        ]
                    },
                    {
                        title: 'PATIENT CARE',
                        icon: 'heart',
                        items: [
                            { label: 'My Patient List', route: '/patients/my-list', permission: 'view' },
                            { label: 'Vital Signs Entry', route: '/patients/vitals', permission: 'create' },
                            { label: 'Medication Administration', route: '/patients/medications', permission: 'create' },
                            { label: 'Wound Care', route: '/patients/wounds', permission: 'create' }
                        ]
                    },
                    {
                        title: 'DOCUMENTATION',
                        icon: 'file-text',
                        items: [
                            { label: 'Nursing Notes', route: '/documentation/notes', permission: 'create' },
                            { label: 'Flow Sheets', route: '/documentation/flowsheets', permission: 'create' },
                            { label: 'I/O Charting', route: '/documentation/io', permission: 'create' },
                            { label: 'Care Pathways', route: '/documentation/pathways', permission: 'view' }
                        ]
                    },
                    {
                        title: 'ORDERS & RESULTS',
                        icon: 'clipboard',
                        items: [
                            { label: 'New Orders Alert', route: '/orders/alerts', permission: 'view' },
                            { label: 'Result Review', route: '/orders/results', permission: 'view' },
                            { label: 'Pending Procedures', route: '/orders/procedures', permission: 'view' },
                            { label: 'Diet Orders', route: '/orders/diet', permission: 'view' }
                        ]
                    },
                    {
                        title: 'COMMUNICATION',
                        icon: 'message',
                        items: [
                            { label: 'Provider Messaging', route: '/communication/providers', permission: 'view' },
                            { label: 'Family Updates', route: '/communication/family', permission: 'view' },
                            { label: 'Multidisciplinary Notes', route: '/communication/mdt', permission: 'view' },
                            { label: 'Shift Report', route: '/communication/shift-report', permission: 'view' }
                        ]
                    }
                ]
            },
            'patient': {
                name: 'Patient',
                color: 'primary',
                navigation: [
                    {
                        title: 'MY HEALTH',
                        icon: 'heart',
                        items: [
                            { label: 'Health Summary', route: '/health/summary', permission: 'view' },
                            { label: 'Medications', route: '/health/medications', permission: 'view' },
                            { label: 'Allergies', route: '/health/allergies', permission: 'view' },
                            { label: 'Immunizations', route: '/health/immunizations', permission: 'view' }
                        ]
                    },
                    {
                        title: 'APPOINTMENTS',
                        icon: 'calendar',
                        items: [
                            { label: 'Upcoming Appointments', route: '/appointments/upcoming', permission: 'view' },
                            { label: 'Schedule New', route: '/appointments/schedule', permission: 'create' },
                            { label: 'Telehealth Visits', route: '/appointments/telehealth', permission: 'view' },
                            { label: 'Appointment History', route: '/appointments/history', permission: 'view' }
                        ]
                    },
                    {
                        title: 'TEST RESULTS',
                        icon: 'file-text',
                        items: [
                            { label: 'Lab Results', route: '/results/labs', permission: 'view' },
                            { label: 'Radiology Reports', route: '/results/radiology', permission: 'view' },
                            { label: 'Pathology', route: '/results/pathology', permission: 'view' },
                            { label: 'Trend Analysis', route: '/results/trends', permission: 'view' }
                        ]
                    },
                    {
                        title: 'MESSAGES',
                        icon: 'message',
                        items: [
                            { label: 'Inbox', route: '/messages/inbox', permission: 'view' },
                            { label: 'New Message', route: '/messages/new', permission: 'create' },
                            { label: 'Care Team', route: '/messages/care-team', permission: 'view' },
                            { label: 'Archived', route: '/messages/archived', permission: 'view' }
                        ]
                    },
                    {
                        title: 'BILLING',
                        icon: 'dollar',
                        items: [
                            { label: 'Statements', route: '/billing/statements', permission: 'view' },
                            { label: 'Payment History', route: '/billing/payments', permission: 'view' },
                            { label: 'Insurance Information', route: '/billing/insurance', permission: 'view' },
                            { label: 'Payment Methods', route: '/billing/payment-methods', permission: 'view' }
                        ]
                    }
                ]
            }
        };
    }

    getCurrentRole() {
        // This should be set from the backend based on authenticated user
        // For now, return a default or from localStorage
        return localStorage.getItem('afyalink-role') || 'system_admin';
    }

    setCurrentRole(role) {
        this.currentRole = role;
        localStorage.setItem('afyalink-role', role);
        this.renderNavigation();
    }

    getNavigationForRole(role) {
        return this.roles[role] || this.roles['system_admin'];
    }

    renderNavigation() {
        const roleData = this.getNavigationForRole(this.currentRole);
        const sidebar = document.getElementById('sidebar-navigation');
        
        if (!sidebar) return;

        sidebar.innerHTML = this.generateNavigationHTML(roleData);
        this.attachEventListeners();
    }

    generateNavigationHTML(roleData) {
        let html = `
            <div class="sidebar-header">
                <h2 class="text-lg font-semibold text-primary-500">${roleData.name}</h2>
            </div>
            <nav class="sidebar-nav">
        `;

        roleData.navigation.forEach(section => {
            html += `
                <div class="nav-section">
                    <div class="nav-section-title">${section.title}</div>
                    <ul class="nav-items">
            `;
            
            section.items.forEach(item => {
                html += `
                    <li class="nav-item">
                        <a href="${item.route}" class="nav-link" data-route="${item.route}">
                            <span class="nav-icon">${this.getIcon(item.icon || 'circle')}</span>
                            <span class="nav-label">${item.label}</span>
                        </a>
                    </li>
                `;
            });

            html += `
                    </ul>
                </div>
            `;
        });

        html += `
            </nav>
        `;

        return html;
    }

    getIcon(iconName) {
        const icons = {
            dashboard: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
            settings: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
            shield: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
            monitor: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
            dollar: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            support: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
            users: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>',
            building: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
            heart: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
            stethoscope: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
            microscope: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
            message: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>',
            calendar: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
            exchange: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>',
            'file-text': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>',
            clipboard: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>',
            circle: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        };
        return icons[iconName] || icons.circle;
    }

    attachEventListeners() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                e.currentTarget.classList.add('active');
            });
        });
    }
}

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.navigationManager = new NavigationManager();
        if (document.getElementById('sidebar-navigation')) {
            window.navigationManager.renderNavigation();
        }
    });
} else {
    window.navigationManager = new NavigationManager();
    if (document.getElementById('sidebar-navigation')) {
        window.navigationManager.renderNavigation();
    }
}

export default NavigationManager;

