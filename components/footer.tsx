import Link from "next/link";
//File :- components/footer.tsx
// Social Media Icons
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const YoutubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const PinterestIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
);

// Footer Badge Components
const ProgramsBadge = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-black/10 bg-[#f4b423] flex items-center justify-center text-[var(--palette-ink)] font-semibold">
        3+
    </div>
);

const HoursBadge = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-black/10 bg-[#40c5c3] flex items-center justify-center text-white font-semibold">
        8
    </div>
);

const VisitBadge = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-black/10 bg-[#d64279] flex items-center justify-center text-white font-semibold">
        V
    </div>
);

const ParentBadge = () => (
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-black/10 bg-[#df3350] flex items-center justify-center text-white font-semibold">
        P
    </div>
);

// Logo Component
const SchoolLogo = () => (
    <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
            <path d="M6 32V8l14 14 14-14v24H6Z" fill="var(--palette-teal)" />
            <path d="M6 32 20 18l14 14H6Z" fill="var(--palette-magenta)" opacity="0.9" />
            <circle cx="20" cy="9" r="5" fill="var(--palette-sun)" />
        </svg>
        <span className="text-[var(--palette-ink)] text-2xl font-semibold tracking-wide">Montessori School</span>
    </div>
);

export default function Footerone() {
    const usefulLinks = [
        { label: "Home", href: "#" },
        { label: "Programs", href: "#" },
        { label: "Admissions", href: "#" },
        { label: "Campus Life", href: "#" },
        { label: "Tuition", href: "#" },
        { label: "About Us", href: "#" },
        { label: "Calendar", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Parent Resources", href: "#" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Safeguarding Policy", href: "#" },
        { label: "School Handbook", href: "#" },
        { label: "Downloads", href: "#" },
    ];

    const contactInfo = [
        { flag: <ProgramsBadge />, title: "Programs :", location: "Toddler, Primary, Elementary" },
        { flag: <HoursBadge />, title: "School Hours :", location: "8:30 AM - 3:30 PM" },
        { flag: <VisitBadge />, title: "Visits :", location: "Campus tours by appointment" },
        { flag: <ParentBadge />, title: "Parent Hub :", location: "Updates, calendar, resources" },
    ];

    const socialLinks = [
        { icon: <FacebookIcon />, href: "#", label: "Facebook" },
        { icon: <InstagramIcon />, href: "#", label: "Instagram" },
        { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
        { icon: <YoutubeIcon />, href: "#", label: "YouTube" },
        { icon: <PinterestIcon />, href: "#", label: "Pinterest" },
    ];

    return (
        <footer className="bg-[#f7f7f7] text-[var(--palette-ink)] ">
            {/* Top Section - Logo and Social Icons */}
            <div className="max-w-7xl mx-auto px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-6">
                    <SchoolLogo />

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-[var(--palette-magenta)] shadow-sm hover:bg-[var(--palette-sun)] hover:text-[var(--palette-ink)] transition-colors"
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/10"></div>

                {/* Main Content - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12">
                    {/* About School */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--palette-ink)]">About Montessori School</h3>
                        <p className="text-black/70 text-sm leading-relaxed">
                            A child-centered school with prepared classrooms, warm guidance, and hands-on
                            learning for toddler, primary, and elementary years.
                        </p>
                    </div>

                    {/* Useful Link */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--palette-ink)]">Useful Links</h3>
                        <ul className="space-y-3">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-black/70 text-sm hover:text-[var(--palette-magenta)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--palette-ink)]">School Info</h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    {contact.flag}
                                    <div>
                                        <p className="text-[var(--palette-ink)] text-sm font-medium">{contact.title}</p>
                                        <p className="text-black/60 text-xs">{contact.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Email Button */}
                        <Link
                            href="mailto:admissions@montessorischool.com"
                            className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-[var(--palette-magenta)] text-white rounded-lg hover:bg-[var(--palette-coral)] transition-colors"
                        >
                            <MailIcon />
                            <span className="text-sm">admissions@montessorischool.com</span>
                        </Link>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-[var(--palette-ink)]">School Policies</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-black/70 text-sm hover:text-[var(--palette-magenta)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="h-px bg-black/10"></div>

                {/* Copyright */}
                <div className="py-6">
                    <p className="text-black/60 text-sm">
                        <span className="mr-2">&copy;</span>
                        2026 Montessori School. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
