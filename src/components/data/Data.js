export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "blog",
    path: "/blog",
  },
  {
    text: "pricing",
    path: "/pricing",
  },
  {
    text: "contact",
    path: "/contact",
  },
]
export const featured = [
  {
    cover: "../images/hero/h1.png",
    name: "Digital Ownership Records",
    
  },
  {
    cover: "../images/hero/h2.png",
    name: "Smart Rental Contracts",
    
  },
  {
    cover: "../images/hero/h3.png",
    name: "Tamper-Proof Lease Agreements",
    
  },
  {
    cover: "../images/hero/h4.png",
    name: "Automated Payments",
    
  },
  {
    cover: "../images/hero/h6.png",
    name: "Document Verification.",
    
  },
]
export const list = [
  {
    icon: <i className="fa-solid fa-user-plus"></i>,
    title: "Create Your Account",
    desc: "Register securely with your verified ID to access blockchain property services.",
  },
  {
    icon: <i className="fa-solid fa-building"></i>,
    title: "Add Your Property",
    desc: "Enter property details and upload ownership documents for verification.",
  },
  {
    icon: <i className="fa-solid fa-file-contract"></i>,
    title: "Generate Smart Contract",
    desc: "Our system creates a tamper-proof digital contract stored on blockchain.",
  },
  {
    icon: <i className="fa-solid fa-lock"></i>,
    title: "Verify & Approve",
    desc: "Blockchain validators authenticate ownership and validate transactions.",
  },
  {
    icon: <i className="fa-solid fa-handshake"></i>,
    title: "Manage & Rent",
    desc: "Manage tenants, payments, and ownership transfers using automated tools.",
  },
];


export const awards = [
  {
    icon: <i class="fa-solid fa-shield-halved"></i>,
    num: "100K+",
    name: "Verified Ownership Records",
  },
  {
    icon: <i class="fa-solid fa-file-contract"></i>,
    num: "85K+",
    name: "Smart Contracts Executed",
  },
  {
    icon: <i class="fa-solid fa-lock"></i>,
    num: "95K+",
    name: "Tamper-Proof Transactions",
  },
  {
    icon: <i class="fa-solid fa-handshake"></i>,
    num: "90K+",
    name: "Secure Rental Agreements",
  },
];

export const blockchainInfo = [
  {
    cover: "../images/location/register.jpg",
    title: "Register & Verify Identity",
    description: "Sign up and confirm your identity for trusted blockchain transactions.",
  },
  {
    cover: "../images/location/meta.jpg",
    title: "Connect Wallet with Metamask",
    description:
      "Connect your Metamask wallet to securely interact with smart contracts and manage payments.",
    metamask: (
      <>
        <img src="../images/metamask-logo.png" alt="Metamask Logo" />
        <p>Metamask is a secure Ethereum wallet that helps you manage your property contracts on blockchain.</p>
      </>
    ),
  },
  {
    cover: "../images/location/auto.jpg",
    title: "Create Digital Property Contracts",
    description: "Generate tamper-proof smart contracts stored securely on blockchain.",
  },
  {
    cover: "../images/location/create.jpg",
    title: "Automate Rental Payments",
    description:
      "Smart contracts enable automated, transparent payments with minimal hassle.",
  },
  {
    cover: "../images/location/track.jpg",
    title: "Track & Transfer Ownership",
    description:
      "Easily track ownership history and transfer rights securely and instantly.",
  },
];

export const team = [
  {
    list: "50",
    cover: "../images/customer/team1.jpg",
    name: "Expert Name",
    role: "Verified Agent",
  },
  {
    list: "70",
    cover: "../images/customer/team1.jpg",
    name: "Expert Name",
    role: "Verified Agent",
  },
  {
    list: "80",
    cover: "../images/customer/team1.jpg",
    name: "Expert Name",
    role: "Validator",
  },
 
];

export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Digital Ownership Records",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Smart Contract Support",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "5 Blockchain Transactions",
      },
      { change: "color", icon: <i class="fa-solid fa-x"></i>, text: "Automated Payments" },
      { change: "color", icon: <i class="fa-solid fa-x"></i>, text: "Document Verification" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Digital Ownership Records",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Smart Contract Execution",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "10 Blockchain Transactions",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Automated Rent Collection",
      },
      {
        change: "color",
        icon: <i class="fa-solid fa-x"></i>,
        text: "Advanced Analytics Dashboard",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 users, per month",
    list: [
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Immutable Ownership Records",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Full Smart Contract Automation",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Unlimited Blockchain Transactions",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Automated Payments & Alerts",
      },
      {
        icon: <i class="fa-solid fa-check"></i>,
        text: "Comprehensive Document Verification",
      },
    ],
  },
];

export const footer = [
  {
    title: "LAYOUTS",
    text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
  },
  {
    title: "ALL SECTIONS",
    text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
  },
  {
    title: "COMPANY",
    text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
  },
]
