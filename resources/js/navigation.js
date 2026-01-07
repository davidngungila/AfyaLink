/**
 * Advanced Role-Based Navigation System with Dropdown Menus
 * Dynamically generates collapsible navigation based on user role and permissions
 */

class NavigationManager {
    constructor() {
        this.roles = this.initializeRoles();
        this.currentRole = this.getCurrentRole();
        this.expandedSections = this.getExpandedSections();
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
                        route: '/dashboard',
                        items: [
                            { label: 'System Overview', route: '/dashboard/system-overview', icon: 'chart' },
                            { label: 'Performance Analytics', route: '/dashboard/performance', icon: 'chart' },
                            { label: 'Global Health Metrics', route: '/dashboard/health-metrics', icon: 'heart' }
                        ]
                    },
                    {
                        title: 'CONFIGURATION',
                        icon: 'settings',
                        items: [
                            { label: 'System Settings', route: '/configuration/system-settings', icon: 'settings' },
                            { label: 'Organization Management', route: '/configuration/organizations', icon: 'building' },
                            { label: 'Master Data Management', route: '/configuration/master-data', icon: 'database' },
                            { label: 'Role & Permission Templates', route: '/configuration/roles', icon: 'shield' },
                            { label: 'Integration Hub', route: '/configuration/integrations', icon: 'link' }
                        ]
                    },
                    {
                        title: 'SECURITY',
                        icon: 'shield',
                        items: [
                            { label: 'User Management', route: '/security/users', icon: 'users' },
                            { label: 'Audit Trail Viewer', route: '/security/audit-trail', icon: 'file-text' },
                            { label: 'Security Policies', route: '/security/policies', icon: 'shield' },
                            { label: 'Compliance Dashboard', route: '/security/compliance', icon: 'check' }
                        ]
                    },
                    {
                        title: 'MONITORING',
                        icon: 'monitor',
                        items: [
                            { label: 'System Health', route: '/monitoring/system-health', icon: 'activity' },
                            { label: 'Usage Analytics', route: '/monitoring/analytics', icon: 'chart' },
                            { label: 'Incident Management', route: '/monitoring/incidents', icon: 'alert' },
                            { label: 'Backup Status', route: '/monitoring/backups', icon: 'database' }
                        ]
                    },
                    {
                        title: 'BILLING & FINANCE',
                        icon: 'dollar',
                        items: [
                            { label: 'Subscription Management', route: '/billing/subscriptions', icon: 'dollar' },
                            { label: 'Billing Overview', route: '/billing/overview', icon: 'chart' },
                            { label: 'Invoice Management', route: '/billing/invoices', icon: 'file-text' }
                        ]
                    },
                    {
                        title: 'SUPPORT',
                        icon: 'support',
                        items: [
                            { label: 'Ticket Management', route: '/support/tickets', icon: 'ticket' },
                            { label: 'Knowledge Base', route: '/support/knowledge-base', icon: 'book' },
                            { label: 'System Updates', route: '/support/updates', icon: 'download' }
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
                        route: '/dashboard',
                        items: [
                            { label: 'Facility Overview', route: '/dashboard/facility-overview', icon: 'building' },
                            { label: 'Capacity Dashboard', route: '/dashboard/capacity', icon: 'users' },
                            { label: 'Financial Snapshot', route: '/dashboard/financial', icon: 'dollar' }
                        ]
                    },
                    {
                        title: 'PERSONNEL',
                        icon: 'users',
                        items: [
                            { label: 'Staff Directory', route: '/personnel/staff', icon: 'users' },
                            { label: 'Scheduling Overview', route: '/personnel/scheduling', icon: 'calendar' },
                            { label: 'Credential Tracking', route: '/personnel/credentials', icon: 'shield' },
                            { label: 'Training Compliance', route: '/personnel/training', icon: 'book' }
                        ]
                    },
                    {
                        title: 'FINANCIAL ADMIN',
                        icon: 'dollar',
                        items: [
                            { label: 'Billing Dashboard', route: '/financial/billing', icon: 'dollar' },
                            { label: 'Accounts Receivable', route: '/financial/receivable', icon: 'arrow-right' },
                            { label: 'Accounts Payable', route: '/financial/payable', icon: 'arrow-left' },
                            { label: 'Financial Reports', route: '/financial/reports', icon: 'file-text' }
                        ]
                    },
                    {
                        title: 'FACILITY OPERATIONS',
                        icon: 'building',
                        items: [
                            { label: 'Bed Management', route: '/operations/beds', icon: 'bed' },
                            { label: 'Equipment Tracking', route: '/operations/equipment', icon: 'tool' },
                            { label: 'Supply Chain', route: '/operations/supply-chain', icon: 'package' },
                            { label: 'Maintenance Logs', route: '/operations/maintenance', icon: 'wrench' }
                        ]
                    },
                    {
                        title: 'COMPLIANCE',
                        icon: 'shield',
                        items: [
                            { label: 'Regulatory Reporting', route: '/compliance/reporting', icon: 'file-text' },
                            { label: 'Quality Metrics', route: '/compliance/quality', icon: 'chart' },
                            { label: 'Incident Reports', route: '/compliance/incidents', icon: 'alert' },
                            { label: 'Audit Preparation', route: '/compliance/audit', icon: 'check' }
                        ]
                    },
                    {
                        title: 'SETTINGS',
                        icon: 'settings',
                        items: [
                            { label: 'Organization Profile', route: '/settings/profile', icon: 'building' },
                            { label: 'Department Setup', route: '/settings/departments', icon: 'folder' },
                            { label: 'User Access Management', route: '/settings/access', icon: 'users' },
                            { label: 'Local Configuration', route: '/settings/config', icon: 'settings' }
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
                        route: '/dashboard',
                        items: [
                            { label: 'My Patients', route: '/dashboard/my-patients', icon: 'users' },
                            { label: "Today's Rounds", route: '/dashboard/rounds', icon: 'calendar' },
                            { label: 'Pending Orders', route: '/dashboard/pending-orders', icon: 'clipboard' },
                            { label: 'Unread Results', route: '/dashboard/results', icon: 'file-text' }
                        ]
                    },
                    {
                        title: 'PATIENT CARE',
                        icon: 'heart',
                        items: [
                            { label: 'Patient List', route: '/patients/list', icon: 'users' },
                            { label: 'New Admission', route: '/patients/admit', icon: 'plus' },
                            { label: 'Discharge Summary', route: '/patients/discharge', icon: 'file-text' },
                            { label: 'Transfer Patients', route: '/patients/transfer', icon: 'arrow-right' }
                        ]
                    },
                    {
                        title: 'CLINICAL TOOLS',
                        icon: 'stethoscope',
                        items: [
                            { label: 'Order Entry', route: '/clinical/orders', icon: 'clipboard' },
                            { label: 'Progress Notes', route: '/clinical/notes', icon: 'file-text' },
                            { label: 'Consult Requests', route: '/clinical/consults', icon: 'message' },
                            { label: 'Procedure Notes', route: '/clinical/procedures', icon: 'scissors' }
                        ]
                    },
                    {
                        title: 'DIAGNOSTICS',
                        icon: 'microscope',
                        items: [
                            { label: 'Lab Results', route: '/diagnostics/labs', icon: 'flask' },
                            { label: 'Radiology Viewer', route: '/diagnostics/radiology', icon: 'image' },
                            { label: 'Pathology Reports', route: '/diagnostics/pathology', icon: 'microscope' },
                            { label: 'POC Results', route: '/diagnostics/poc', icon: 'activity' }
                        ]
                    },
                    {
                        title: 'COMMUNICATION',
                        icon: 'message',
                        items: [
                            { label: 'Inbox', route: '/communication/inbox', icon: 'inbox' },
                            { label: 'Referral Network', route: '/communication/referrals', icon: 'users' },
                            { label: 'Multidisciplinary Team', route: '/communication/team', icon: 'users' },
                            { label: 'Patient Messages', route: '/communication/patient-messages', icon: 'message' }
                        ]
                    },
                    {
                        title: 'SCHEDULE',
                        icon: 'calendar',
                        items: [
                            { label: 'Daily Rounds', route: '/schedule/rounds', icon: 'calendar' },
                            { label: 'Clinic Schedule', route: '/schedule/clinic', icon: 'calendar' },
                            { label: 'On-Call Calendar', route: '/schedule/oncall', icon: 'phone' },
                            { label: 'Leave Management', route: '/schedule/leave', icon: 'calendar' }
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
                        route: '/shift/handover',
                        items: [
                            { label: 'Patient Assignments', route: '/shift/assignments', icon: 'users' },
                            { label: 'Critical Information', route: '/shift/critical', icon: 'alert' },
                            { label: 'Pending Tasks', route: '/shift/tasks', icon: 'clipboard' },
                            { label: 'Care Plans', route: '/shift/care-plans', icon: 'file-text' }
                        ]
                    },
                    {
                        title: 'PATIENT CARE',
                        icon: 'heart',
                        items: [
                            { label: 'My Patient List', route: '/patients/my-list', icon: 'users' },
                            { label: 'Vital Signs Entry', route: '/patients/vitals', icon: 'activity' },
                            { label: 'Medication Administration', route: '/patients/medications', icon: 'pill' },
                            { label: 'Wound Care', route: '/patients/wounds', icon: 'bandage' }
                        ]
                    },
                    {
                        title: 'DOCUMENTATION',
                        icon: 'file-text',
                        items: [
                            { label: 'Nursing Notes', route: '/documentation/notes', icon: 'file-text' },
                            { label: 'Flow Sheets', route: '/documentation/flowsheets', icon: 'table' },
                            { label: 'I/O Charting', route: '/documentation/io', icon: 'chart' },
                            { label: 'Care Pathways', route: '/documentation/pathways', icon: 'map' }
                        ]
                    },
                    {
                        title: 'ORDERS & RESULTS',
                        icon: 'clipboard',
                        items: [
                            { label: 'New Orders Alert', route: '/orders/alerts', icon: 'bell' },
                            { label: 'Result Review', route: '/orders/results', icon: 'file-text' },
                            { label: 'Pending Procedures', route: '/orders/procedures', icon: 'scissors' },
                            { label: 'Diet Orders', route: '/orders/diet', icon: 'utensils' }
                        ]
                    },
                    {
                        title: 'COMMUNICATION',
                        icon: 'message',
                        items: [
                            { label: 'Provider Messaging', route: '/communication/providers', icon: 'message' },
                            { label: 'Family Updates', route: '/communication/family', icon: 'users' },
                            { label: 'Multidisciplinary Notes', route: '/communication/mdt', icon: 'file-text' },
                            { label: 'Shift Report', route: '/communication/shift-report', icon: 'file-text' }
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
                        route: '/health',
                        items: [
                            { label: 'Health Summary', route: '/health/summary', icon: 'file-text' },
                            { label: 'Medications', route: '/health/medications', icon: 'pill' },
                            { label: 'Allergies', route: '/health/allergies', icon: 'alert' },
                            { label: 'Immunizations', route: '/health/immunizations', icon: 'syringe' }
                        ]
                    },
                    {
                        title: 'APPOINTMENTS',
                        icon: 'calendar',
                        items: [
                            { label: 'Upcoming Appointments', route: '/appointments/upcoming', icon: 'calendar' },
                            { label: 'Schedule New', route: '/appointments/schedule', icon: 'plus' },
                            { label: 'Telehealth Visits', route: '/appointments/telehealth', icon: 'video' },
                            { label: 'Appointment History', route: '/appointments/history', icon: 'clock' }
                        ]
                    },
                    {
                        title: 'TEST RESULTS',
                        icon: 'file-text',
                        items: [
                            { label: 'Lab Results', route: '/results/labs', icon: 'flask' },
                            { label: 'Radiology Reports', route: '/results/radiology', icon: 'image' },
                            { label: 'Pathology', route: '/results/pathology', icon: 'microscope' },
                            { label: 'Trend Analysis', route: '/results/trends', icon: 'chart' }
                        ]
                    },
                    {
                        title: 'MESSAGES',
                        icon: 'message',
                        items: [
                            { label: 'Inbox', route: '/messages/inbox', icon: 'inbox' },
                            { label: 'New Message', route: '/messages/new', icon: 'plus' },
                            { label: 'Care Team', route: '/messages/care-team', icon: 'users' },
                            { label: 'Archived', route: '/messages/archived', icon: 'archive' }
                        ]
                    },
                    {
                        title: 'BILLING',
                        icon: 'dollar',
                        items: [
                            { label: 'Statements', route: '/billing/statements', icon: 'file-text' },
                            { label: 'Payment History', route: '/billing/payments', icon: 'clock' },
                            { label: 'Insurance Information', route: '/billing/insurance', icon: 'shield' },
                            { label: 'Payment Methods', route: '/billing/payment-methods', icon: 'credit-card' }
                        ]
                    }
                ]
            }
        };
    }

    getCurrentRole() {
        return localStorage.getItem('afyalink-role') || 'system_admin';
    }

    getExpandedSections() {
        const stored = localStorage.getItem('afyalink-expanded-sections');
        return stored ? JSON.parse(stored) : [];
    }

    saveExpandedSections() {
        localStorage.setItem('afyalink-expanded-sections', JSON.stringify(this.expandedSections));
    }

    toggleSection(sectionTitle) {
        const index = this.expandedSections.indexOf(sectionTitle);
        if (index > -1) {
            this.expandedSections.splice(index, 1);
        } else {
            this.expandedSections.push(sectionTitle);
        }
        this.saveExpandedSections();
        this.renderNavigation();
    }

    isSectionExpanded(sectionTitle) {
        return this.expandedSections.includes(sectionTitle);
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
        const sidebar = document.getElementById('sidebar-navigation');
        if (!sidebar) return;

        const roleData = this.getNavigationForRole(this.currentRole);
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
            const hasItems = section.items && section.items.length > 0;
            const isExpanded = this.isSectionExpanded(section.title);
            const sectionId = `section-${section.title.toLowerCase().replace(/\s+/g, '-')}`;

            html += `
                <div class="nav-section" data-section="${section.title}">
                    <div class="nav-section-header ${hasItems ? 'has-dropdown' : ''}" 
                         ${hasItems ? `onclick="window.navigationManager.toggleSection('${section.title}')"` : ''}>
                        <div class="nav-section-title-wrapper">
                            ${hasItems ? `
                                <button class="nav-section-toggle" aria-expanded="${isExpanded}">
                                    <svg class="nav-chevron ${isExpanded ? 'expanded' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            ` : ''}
                            <span class="nav-section-icon">${this.getIcon(section.icon || 'circle')}</span>
                            <span class="nav-section-title">${section.title}</span>
                        </div>
                        ${section.route && !hasItems ? `
                            <a href="${section.route}" class="nav-section-link">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        ` : ''}
                    </div>
                    ${hasItems ? `
                        <div class="nav-dropdown ${isExpanded ? 'expanded' : ''}" id="${sectionId}">
                            <ul class="nav-items">
                                ${section.items.map(item => `
                                    <li class="nav-item">
                                        <a href="${item.route}" class="nav-link" data-route="${item.route}">
                                            <span class="nav-icon">${this.getIcon(item.icon || 'circle')}</span>
                                            <span class="nav-label">${item.label}</span>
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        html += `</nav>`;
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
            chart: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
            database: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>',
            link: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>',
            check: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            activity: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
            alert: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',
            plus: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>',
            arrowRight: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>',
            arrowLeft: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>',
            bed: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>',
            tool: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
            package: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',
            wrench: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
            folder: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>',
            flask: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>',
            image: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
            scissors: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path></svg>',
            inbox: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>',
            pill: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>',
            bandage: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>',
            table: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>',
            map: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>',
            bell: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>',
            utensils: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>',
            syringe: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>',
            video: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>',
            clock: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            archive: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>',
            'credit-card': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
            phone: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
            book: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
            ticket: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>',
            download: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>',
            circle: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        };
        return icons[iconName] || icons.circle;
    }

    attachEventListeners() {
        // Handle nav link clicks
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navLinks.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });

        // Set active link based on current route
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                // Expand parent section if collapsed
                const section = link.closest('.nav-section');
                if (section) {
                    const sectionTitle = section.getAttribute('data-section');
                    if (sectionTitle && !this.isSectionExpanded(sectionTitle)) {
                        this.toggleSection(sectionTitle);
                    }
                }
            }
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
