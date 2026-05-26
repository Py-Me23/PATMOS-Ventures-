import { ServiceItem, OfficeBranch, TestimonialItem, ExecutiveItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'import-export',
    title: 'Import & Export Logistics',
    iconName: 'Ship',
    summary: 'Full ocean and air freight logistics, customs brokerage, and cargo clearing connecting Scandinavia with Ghana.',
    detailedDescription: 'We manage your global cargo lifecycle—from container consolidation to Tema Port clearing and secure final delivery.',
    features: [
      'Full & Less Container (FCL/LCL) packing and customs clearing',
      'Air Freight dispatch for priority parcels and cargo',
      'Full transit updates and secure local warehouse storage'
    ],
    denmarkOperations: 'Copenhagen export manifests and sea-freight dispatch coordination.',
    ghanaOperations: 'Tema Harbour customs clearing and direct door-to-door delivery.',
    bgGradient: 'from-blue-900 to-blue-950'
  },
  {
    id: 'postal-courier',
    title: 'Postal & Express Courier',
    iconName: 'Mail',
    summary: 'Secure priority courier shipping for documents, research samples, and care packages with full tracking.',
    detailedDescription: 'Fast, reliable express shipping between Denmark and Ghana for documents and priority parcels.',
    features: [
      'Copenhagen-Accra shipping within 3–5 business days',
      'Protected door-to-door courier routing with signature delivery',
      'Real-time automated package tracking & SMS arrival alerts'
    ],
    denmarkOperations: 'Copenhagen parcel sorting hub and weekly air dispatch.',
    ghanaOperations: 'Express final-mile delivery directly to your home or office.',
    bgGradient: 'from-brand-blue-800 to-brand-blue-900'
  },
  {
    id: 'consultancy-facilitation',
    title: 'Advisory & Market Entry',
    iconName: 'Compass',
    summary: 'Company registration, investment assistance, and tax compliance support in Denmark and Ghana.',
    detailedDescription: 'Hands-on assistance with GIPC certification, incorporation, and local tax compliance for bilateral trade.',
    features: [
      'Fast company registration and GIPC certificate incorporation',
      'Local tax compliance advice and corporate registration support',
      'Bilateral business matchmaking with verified local distributors'
    ],
    denmarkOperations: 'Connecting European investments with verified opportunities in Ghana.',
    ghanaOperations: 'Direct physical registration and licensing with local ministries.',
    bgGradient: 'from-brand-blue-950 to-brand-blue-900'
  },
  {
    id: 'internship-coordination',
    title: 'International Internships',
    iconName: 'GraduationCap',
    summary: 'Connecting student interns and skilled professionals with clinical, social, and educational placements in Ghana.',
    detailedDescription: 'Coordinating accredited placements for Danish students in medical, educational, and social work facilities.',
    features: [
      'Comprehensive pre-departure training and local cultural orientation',
      'Accredited clinical placements for ECTS academic credits',
      'Secure student housing, airport pickup, and 24/7 welfare safety'
    ],
    denmarkOperations: 'University partner coordination and application pre-departure screening.',
    ghanaOperations: 'On-site welfare inspectors and accredited hosting institutions in Accra.',
    bgGradient: 'from-brand-blue-900 to-brand-blue-800'
  },
  {
    id: 'logistics-support',
    title: 'Supply Chain Partnership',
    iconName: 'Network',
    summary: 'Strategic freight alliances, temporary storage solutions, and localized supply chain optimization.',
    detailedDescription: 'Coordinating physical transport routing and shared warehouses to make cross-border scaling secure.',
    features: [
      'Multi-axle trucking and heavy-duty shipping logistics',
      'Tema & Accra warehouse storage rentals with security coverage',
      'Frictionless regional delivery and supply loop integration'
    ],
    denmarkOperations: 'Port-to-port scheduling and heavy cargo transport packing.',
    ghanaOperations: 'Domestic transit networks, warehousing, and container unpacking.',
    bgGradient: 'from-brand-blue-950 to-brand-blue-950'
  },
  {
    id: 'used-items',
    title: 'Premium Home Goods Sales',
    iconName: 'ShoppingBag',
    summary: 'Sourcing, import, and sale of high-integrity home appliances and durable Scandinavian goods in Ghana.',
    detailedDescription: 'Hand-selected premium household items and appliances and supplying them directly to Tema & Accra.',
    features: [
      'Strict functionality selection - only certified electronic goods',
      'Eco-responsible reuse promoting sustainable product lifecycles',
      'Tema-Accra showrooms with local home delivery options'
    ],
    denmarkOperations: 'Sourcing, testing, and shipping container packing in Copenhagen.',
    ghanaOperations: 'Accra Retail showrooms, verified sales, and direct delivery operations.',
    bgGradient: 'from-brand-gold-900 to-brand-gold-950'
  }
];

export const OFFICES: OfficeBranch[] = [
  {
    id: 'branch-denmark',
    country: 'Denmark',
    city: 'Copenhagen',
    address: 'Amager Strandvej 390, 2770 Kastrup, Copenhagen, Denmark',
    phone: '+45 42 55 90 90',
    phoneRaw: '4542559090',
    email: 'denmark@patmosdimension.com',
    workingHours: 'Mon - Fri: 08:30 - 17:00 (CET)',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.353723381023!2d12.6366914!3d55.6515865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525287e07ca071%3A0xe5cd6e969a5ad56f!2sAmager%20Strandvej%2C%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1700000000000!5m2!1sen!2sdk'
  },
  {
    id: 'branch-ghana',
    country: 'Ghana',
    city: 'Accra',
    address: 'Patmos Plaza, Spintex Road, Accra, Ghana',
    phone: '+233 24 456 7890',
    phoneRaw: '233244567890',
    email: 'ghana@patmosdimension.com',
    workingHours: 'Mon - Fri: 08:00 - 17:00 (GMT)',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15882.90382333469!2d-0.1251347!3d5.6213769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8566ddbb57b5%3A0xffe742886fdf4000!2sSpintex%20Rd%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000001!5m2!1sen!2sgh'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Christian Brøndum',
    role: 'Logistics Director',
    company: 'Skandic Export A/S',
    feedback: 'Patmos transformed how we ship heavy equipment to Ghana. Customs clearing is seamless and transparent.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Niels Henriksen',
    role: 'Placement Lead',
    company: 'University College Absalon',
    feedback: 'Excellent work with clinical placements. They handle student welfare and housing with absolute care.',
    rating: 5
  }
];

export const CORE_VALUES = [
  {
    title: 'Intercontinental Integrity',
    description: 'Strict Northern European compliance matched with trusted local ground facilitation.',
    icon: 'Shield'
  },
  {
    title: 'Precision Timing',
    description: 'Rigorously meeting express cargo schedules and academic orientation deadlines without delay.',
    icon: 'Clock'
  },
  {
    title: 'Bilateral Development',
    description: 'Connecting Denmark resources directly with active West African trading and educational hubs.',
    icon: 'Globe'
  },
  {
    title: 'Complete Transparency',
    description: 'Providing upfront, reliable route parameter quotes and secure real-time tracking.',
    icon: 'Eye'
  }
];

export const EXECUTIVES: ExecutiveItem[] = [
  {
    id: 'exec-1',
    name: 'Paul Toku Appiatu',
    role: 'Director & Chief Executive Officer (CEO)',
    bio: 'Paves the strategic vision for Patmos Dimension Group, driving bilateral commerce, international joint ventures, and governmental compliance between Scandinavian and West African hubs.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'p.appiatu@patmosdimension.com'
  },
  {
    id: 'exec-2',
    name: 'Edward Ofori',
    role: 'Logistics, Planning and Operations Manager',
    bio: 'Leads intercontinental freight operations, secure cargo warehousing, compliance, and port facilitation, ensuring frictionless bilateral shipping pipelines.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'e.ofori@patmosdimension.com'
  },
  {
    id: 'exec-3',
    name: 'Obour Akiti A. Kisseh',
    role: 'International Programs and Partnerships Manager',
    bio: 'Directs accredited academic placements, clinical internship coordination, and cross-border corporate stakeholder alliances across our dual networks.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    email: 'o.kisseh@patmosdimension.com'
  }
];

