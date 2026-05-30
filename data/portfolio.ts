export interface ProjectFeature {
  title: string;
  title_id?: string;
  description: string;
  description_id?: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  title_id?: string;
  description: string;
  description_id?: string;
  background: string;
  background_id?: string;
  projectFor: string;
  projectFor_id?: string;
  image: string;
  categories: ('Design' | 'Website' | 'Mobile')[];
  tech: string[];
  role: string;
  role_id?: string;
  year: string;
  status: string;
  status_id?: string;
  features: ProjectFeature[];
  githubLink?: string;
  demoLink?: string;
  prototypeLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  role_id?: string;
  organization: string;
  period: string;
  description: string;
  description_id?: string;
}

export interface Achievement {
  id: string;
  title: string;
  title_id?: string;
  event: string;
  event_id?: string;
  date: string;
  image: string;
  links: {
    news?: string;
    instagram?: string;
    documentation?: string;
  };
}

export interface Certification {
  id: string;
  name: string;
  name_id?: string;
  issuer: string;
  type: string;
  type_id?: string;
  year: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'dineqr',
    title: 'DineQR',
    description: 'A comprehensive web application designed to modernize the dining experience for customers and staff.',
    description_id: 'Sebuah aplikasi web komprehensif yang dirancang untuk memodernisasi pengalaman makanan bagi pelanggan dan staf.',
    background: 'The project was born out of the need to automate manual order processing and provide customers with a seamless payment experience. The restaurant management system was previously reliant on manual entry, leading to errors and slow service.',
    background_id: 'Proyek ini lahir dari kebutuhan untuk mengotomatisasi pemrosesan pesanan secara manual dan memberi pelanggan pengalaman pembayaran yang mulus. Sistem manajemen restoran sebelumnya bergantung pada pencatatan manual, yang menyebabkan kesalahan dan pelayanan yang lambat.',
    projectFor: 'Project-Based Learning & Seblang Restaurant',
    projectFor_id: 'Pembelajaran Berbasis Proyek & Rumah Makan Seblang',
    image: '/projects/cover-dineqr.webp',
    categories: ['Website'],
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    role: 'Team Lead & Fullstack Developer',
    role_id: 'Ketua Tim & Pengembang Fullstack',
    year: '2025',
    status: 'Completed',
    status_id: 'Selesai',
    features: [
      {
        title: 'Real-time Menu',
        title_id: 'Menu Real-time',
        description: 'Real-time menu updates with stock status information.',
        description_id: 'Pelanggan dapat melihat menu yang tersedia dengan status stok real-time.',
        image: '/projects/dineqr/feature1.webp'
      },
      {
        title: 'Ordering & Payment Management',
        title_id: 'Manajemen Pesanan dan Pembayaran untuk Kasir',
        description: 'Efficient order and payment management through an integrated system.',
        description_id: 'Kasir dapat mengelola pesanan dan pembayaran secara efisien melalui sistem yang terintegrasi.',
        image: '/projects/dineqr/feature2.webp'
      },
      {
        title: 'Admin Dashboard',
        title_id: 'Dashboard Admin',
        description: 'Comprehensive admin dashboard for monitoring sales and performance metrics.',
        description_id: 'Admin dapat memantau penjualan dan performa secara efisien melalui sistem yang terintegrasi.',
        image: '/projects/dineqr/feature3.webp'
      },
      {
        title: 'Menu & Stock Management',
        title_id: 'Manajemen Menu dan Stok',
        description: 'Intuitive interface for managing menu items and tracking inventory levels.',
        description_id: 'Antarmuka yang intuitif untuk mengelola item menu dan melacak tingkat persediaan.',
        image: '/projects/dineqr/feature4.webp'
      },
    ],
    githubLink: 'https://github.com/arifahnbm/DineQR.git',
    // demoLink: 'https://demo.example.com',
    // prototypeLink: 'https://figma.com/proto/elib'
  },
  {
    id: 'tbmate',
    title: 'TBMate',
    description: 'A mobile-based health application designed to improve medication compliance in tuberculosis patients.',
    description_id: 'Aplikasi kesehatan berbasis mobile untuk meningkatkan kepatuhan medis pada pasien TB.',
    background: 'Tuberculosis treatment is a lengthy process that requires high consistency, where delays or negligence in taking medication can lead to treatment failure. TBMATE was created to assist patients in adhering to this process through automated medication schedules, real-time reminders, and video-based pill ingestion verification features. With a simple and guided user experience, TBMATE helps patients stay disciplined until treatment completion.',
    background_id: 'Pengobatan tuberkulosis (TBC) merupakan proses panjang yang membutuhkan konsistensi tinggi, di mana keterlambatan atau kelalaian minum obat dapat menyebabkan kegagalan pengobatan. TBMATE hadir untuk membantu pasien menjalani proses tersebut melalui jadwal pengobatan otomatis, pengingat real-time, dan fitur verifikasi menelan obat berbasis video. Dengan pengalaman penggunaan yang sederhana dan terarah, TBMATE membantu pasien tetap disiplin hingga pengobatan selesai.',
    projectFor: 'KMIPN 2025 & Health Department Kabat, Banyuwangi',
    projectFor_id: 'KMIPN 2025 & Pusat Kesehatan Masyarakat Kabat, Banyuwangi',
    image: '/projects/cover-tbmate.webp',
    categories: ['Mobile', 'Design'],
    tech: ['Flutter', 'Firebase', 'Google ML Kit', 'Figma'],
    role: 'KMIPN Team Lead & Fullstack Developer',
    role_id: 'Pemimpin Tim KMIPN & Pengembang Fullstack',
    year: '2025 - Present',
    status: 'Active',
    status_id: 'Sedang Berjalan',
    features: [
      {
        title: 'Automated Medication Scheduling',
        title_id: 'Jadwal Pengobatan Otomatis',
        description: 'Automated medication scheduling to ensure patients take their pills on time.',
        description_id: 'Penjadwalan pengobatan otomatis untuk memastikan pasien minum obat tepat waktu.',
        image: '/projects/tbmate/feature1.webp'
      },
      {
        title: 'Real-time Reminder Alarm',
        title_id: 'Alarm Pengingat Real-time',
        description: 'Real-time reminders to ensure patients take their medication on time.',
        description_id: 'Pengingat real-time untuk memastikan pasien minum obat tepat waktu.',
        image: '/projects/tbmate/feature2.webp'
      },
      {
        title: 'AI-based Pill Ingestion Verification',
        title_id: 'Verifikasi Penelanan Obat Berbasis AI',
        description: 'AI-based pill ingestion verification to ensure patients take their medication correctly.',
        description_id: 'Verifikasi menelan obat berbasis AI untuk memastikan pasien minum obat dengan benar.',
        image: '/projects/tbmate/feature3.webp'
      },
      {
        title: 'Integration with Health Workers and Companions',
        title_id: 'Integrasi Pasien dengan Pendamping dan Tenaga Kesehatan',
        description: 'Integration with health workers and companions to provide support and monitoring for patients.',
        description_id: 'Integrasi dengan tenaga kesehatan dan pendamping untuk memberikan dukungan dan pemantauan bagi pasien.',
        image: '/projects/tbmate/feature4.webp'
      },
    ],
    // githubLink: 'https://github.com/arifah/tbmate',
    demoLink: 'https://tbmate.vercel.app/',
    prototypeLink: 'https://www.figma.com/proto/2uouv7GYnoVqn3BQDBz9sK/TBMATE-KMIPN?node-id=807-59907&viewport=-3667%2C1185%2C0.16&t=VaIlyzd4BPv9OpFa-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=807%3A59907&page-id=806%3A29884&show-proto-sidebar=1'
  },
  {
    id: 'satulangkah',
    title: 'SatuLangkah',
    description: 'A simple and easy-to-use AI-powered website to help ADHD users stay focused and organize their homes.',
    description_id: 'Website untuk membantu pengguna ADHD tetap fokus dan membereskan rumah mereka dengan fitur AI yang sederhana dan mudah digunakan.',
    background: 'For many users with ADHD, tidying up isn\'t just about neatness but a struggle against overwhelm, distraction, and difficulty initiating tasks. It\'s common for things to end up piling into a doom pile in the corner as a form of "temporary procrastination" that actually adds to stress. SatuLangkah was created to help users start with small steps. With AI assistance that can recognize objects from room images and break down big tasks into simple steps, this app helps users go through the process of tidying up their homes in a lighter, more guided, and less overwhelming way.',
    background_id: 'Bagi banyak pengguna dengan ADHD, membereskan rumah bukan hanya soal kerapihan, tetapi juga perjuangan melawan rasa kewalahan, distraksi, dan sulitnya memulai tugas. Tidak jarang barang-barang akhirnya menumpuk menjadi doom pile di sudut ruangan sebagai bentuk “penundaan sementara” yang justru menambah stres. SatuLangkah hadir untuk membantu pengguna memulai dari hal kecil. Dengan bantuan AI yang dapat mengenali objek dari gambar ruangan dan memecah tugas besar menjadi langkah-langkah sederhana, aplikasi ini membantu pengguna menjalani proses merapikan rumah secara lebih ringan, terarah, dan tidak terasa membebani.',
    projectFor: 'Google Juara Vibe Coding Competition',
    projectFor_id: 'Kompetisi Google Juara Vibe Coding',
    image: '/projects/cover-satulangkah1.webp',
    categories: ['Website'],
    tech: ['Next.js', 'Tailwind CSS', 'Gemini API'],
    role: 'Fullstack Developer',
    role_id: 'Pengembang Fullstack',
    year: '2026',
    status: 'Completed',
    status_id: 'Selesai',
    features: [
      {
        title: 'AI-Powered Object Recognition',
        title_id: 'Deteksi Objek Berbasis AI',
        description: 'AI-powered object recognition to identify items in the user\'s room and provide tailored tidying suggestions.',
        description_id: 'Deteksi objek berbasis AI untuk mengidentifikasi item dalam ruangan pengguna dan memberikan saran penyusunan yang disesuaikan.',
        image: '/projects/satulangkah/feature1.webp'
      },
      {
        title: 'AI-Powered Task Breakdown',
        title_id: 'Pemecahan Tugas Berbasis AI',
        description: 'AI-powered task breakdown to simplify complex tidying tasks into manageable steps.',
        description_id: 'Pemecahan tugas berbasis AI untuk menyederhanakan tugas penyusunan yang kompleks menjadi langkah-langkah yang dapat dikelola.',
        image: '/projects/satulangkah/feature2.webp'
      },
    ],
    demoLink: 'https://satulangkah.web.id/'
  },
  {
    id: 'fluensy',
    title: 'Fluensy',
    description: 'A marketing platform that bridges brands and influencers using AI to provide Fake Follower Detection, Smart Matching, and automated Budget Optimization based on real-time Paid Promotion (PP) rates.',
    description_id: 'Platform pemasaran yang menjembatani merek dan influencer dengan menggunakan AI untuk menyediakan Deteksi Pengikut Palsu, Pencocokan Cerdas, dan Optimisasi Anggaran otomatis berdasarkan tarif Promosi Berbayar (PP) real-time.',
    background: 'In the digital era, influencer marketing has become one of the most widely used promotional strategies. However, many brands still struggle to identify truly relevant influencers with authentic audiences and fit within their campaign budgets. Fluensy was created to help simplify and make this process more trustworthy. With AI assistance, the platform can detect fake followers, recommend the most suitable influencers, and adjust promotion budgets based on real-time performance data. Fluensy helps brands and influencers build more transparent, effective, and mutually valuable collaborations.',
    background_id: 'Di era digital, influencer marketing menjadi salah satu strategi promosi yang paling banyak digunakan. Namun, banyak brand masih kesulitan menentukan influencer yang benar-benar relevan, memiliki audiens asli, dan sesuai dengan anggaran kampanye mereka. Fluensy hadir untuk membantu proses tersebut menjadi lebih sederhana dan terpercaya. Dengan bantuan AI, platform ini dapat mendeteksi pengikut palsu, merekomendasikan influencer yang paling sesuai, serta menyesuaikan anggaran promosi berdasarkan data performa secara real-time. Fluensy membantu brand dan influencer membangun kerja sama yang lebih transparan, efektif, dan bernilai bagi kedua belah pihak.',
    projectFor: 'Early-Stage Tech Startup',
    projectFor_id: 'Startup Teknologi Tahap Awal',
    image: '/projects/cover-fluensy.webp',
    categories: ['Website', 'Design'],
    tech: ['Next.js', 'Laravel', 'Tailwind CSS', 'Figma'],
    role: 'Chief Design Officer & Fullstack Developer',
    role_id: 'Kepala Bagian Desain & Pengembang Fullstack',
    year: '2026 - Present',
    status: 'Active',
    status_id: 'Aktif',
    features: [
      {
        title: 'Smart Influencer Matching',
        title_id: 'Pencocokan Influencer Cerdas',
        description: 'AI-powered matching system to connect brands with relevant influencers based on audience demographics and engagement metrics.',
        description_id: 'Sistem pencocokan berbasis AI untuk menghubungkan brand dengan influencer yang relevan berdasarkan demografi audiens dan metrik keterlibatan.',
        image: '/projects/fluensy/feature1.webp'
      },
      {
        title: 'Fake Follower Detection',
        title_id: 'Deteksi Pengikut Palsu',
        description: 'AI-powered detection system to identify and filter out fake followers from brand audiences.',
        description_id: 'Sistem deteksi berbasis AI untuk mengidentifikasi dan memfilter pengikut palsu dari audiens brand.',
        image: '/projects/fluensy/feature2.webp'
      },
      {
        title: 'Budget Optimization',
        title_id: 'Optimisasi Anggaran',
        description: 'AI-powered budget optimization system to allocate promotion budgets based on real-time performance data.',
        description_id: 'Sistem optimisasi anggaran berbasis AI untuk mengalokasikan anggaran promosi berdasarkan data performa secara real-time.',
        image: '/projects/fluensy/feature3.webp'
      },
      {
        title: 'Rate Card for Influencers',
        title_id: 'Kartu Tarif untuk Influencer',
        description: 'AI-powered rate card system to set fair pricing for influencer collaborations based on their reach and engagement.',
        description_id: 'Sistem kartu tarif berbasis AI untuk menetapkan harga yang adil untuk kolaborasi influencer berdasarkan jangkauan dan keterlibatan mereka.',
        image: '/projects/fluensy/feature4.webp'
      },
    ],
    demoLink: 'https://fluensy.web.id/',
    prototypeLink: 'https://figma.com/proto/fluensy'
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Mobile Application Developer Intern',
    role_id: 'Magang Pengembang Aplikasi Seluler',
    organization: 'CV. JAYLA TECH',
    period: 'Feb 2026 – Present',
    description: 'As a Mobile Application Developer, I develop Android applications using Flutter, Firebase, and Google ML Kit to create scalable, responsive, and user-friendly mobile experiences. I also collaborate closely with development teams throughout the development process, contributing to effective teamwork, problem-solving, and the successful delivery of mobile applications.',
    description_id: 'Sebagai Pengembang Aplikasi Seluler, saya mengembangkan aplikasi Android menggunakan Flutter, Firebase, dan Google ML Kit untuk menciptakan pengalaman mobile yang skalabel, responsif, dan ramah pengguna. Saya juga bekerja sama erat dengan tim pengembangan sepanjang proses pengembangan, berkontribusi pada kerja sama tim yang efektif, penyelesaian masalah, dan pengiriman aplikasi mobile yang sukses.',
  },
  {
    id: '2',
    role: 'Media Communication & Information Staff',
    role_id: 'Staf Media Komunikasi & Informasi',
    organization: 'FORBIMWANGI (Scholarship Student Forum)',
    period: 'Dec 2024 – Nov 2025',
    description: 'As a member of the Medkominfo Division, I am responsible for managing the organization\'s information and publication media, from visual content design and social media management to event documentation. I am also involved in effectively communicating information to members and the public and collaborating with the team to maintain the organization\'s image and branding consistency.',
    description_id: 'Sebagai anggota Divisi Medkominfo, saya bertanggung jawab untuk mengelola media informasi dan publikasi organisasi, mulai dari desain konten visual dan manajemen media sosial hingga dokumentasi acara. Saya juga terlibat dalam menyampaikan informasi secara efektif kepada anggota dan publik serta bekerja sama dengan tim untuk menjaga konsistensi citra dan branding organisasi.',
  },
//   {
//     id: '3',
//     role: 'Front-End Developer',
//     role_id: 'Pengembang Front-End',
//     organization: 'Project Management Team',
//     period: 'Aug 2023 – Dec 2023',
//     description: 'Developed responsive user interfaces for institutional web projects using modern frameworks.',
//     description_id: 'Mengembangkan antarmuka pengguna yang responsif untuk proyek-proyek web institusi menggunakan framework modern.',
//   },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: '2nd Winner KMIPN 2025 UX and Accessibility Subcategory Innovation Creation Category',
    title_id: 'Juara 2 KMIPN 2025 Subkategori UX dan Aksesibilitas Kategori Kreasi Inovasi',
    event: '2025 National Polytechnic Informatics Student Competition (KMIPN)',
    event_id: 'Kompetisi Mahasiswa Informatika PoliteknikNasional 2025',
    date: 'Oct 2025',
    image: '/achievements/kmipn2025.webp',
    links: {
       news: 'https://poliwangi.ac.id/tim-innosuke-poliwangi-raih-prestasi-nasional-pada-ajang-inovasi-teknologi-bidang-tik/',
       instagram: 'https://www.instagram.com/p/DP3bOHxj9I7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    }
  },
//   {
//     id: '2',
//     title: 'Most Active Student Organization',
//     title_id: 'Organisasi Mahasiswa Teraktif',
//     event: 'Politeknik Negeri Banyuwangi',
//     event_id: 'Politeknik Negeri Banyuwangi',
//     date: 'Dec 2023',
//     image: 'https://picsum.photos/seed/active/600/400',
//     links: {
//       documentation: '#'
//     }
//   }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    type: 'Completion Certificate',
    type_id: 'Sertifikat Penyelesaian',
    year: '2025',
    image: '/certifications/belajar-dasar-ai.webp',
  },
  {
    id: '2',
    name: 'The Basics of Google Cloud Compute',
    issuer: 'Google',
    type: 'Skill Badge',
    type_id: 'Lencana Keahlian',
    year: '2026',
    image: '/certifications/the-basics-of-google-cloud-compute.webp',
  },
  {
    id: '3',
    name: 'Belajar Machine Learning untuk Pemula',
    issuer: 'Dicoding Indonesia',
    type: 'Completion Certificate',
    type_id: 'Sertifikat Penyelesaian',
    year: '2026',
    image: '/certifications/belajar-machine-learning-untuk-pemula.webp',
  },
  {
    id: '4',
    name: 'Belajar Dasar Data Science',
    issuer: 'Dicoding Indonesia',
    type: 'Completion Certificate',
    type_id: 'Sertifikat Penyelesaian',
    year: '2025',
    image: '/certifications/belajar-dasar-data-science.webp',
  },
  {
    id: '5',
    name: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    type: 'Completion Certificate',
    type_id: 'Sertifikat Penyelesaian',
    year: '2025',
    image: '/certifications/belajar-dasar-sql.webp',
  },
  {
    id: '6',
    name: 'Memulai Pemrograman dengan Python',
    issuer: 'Dicoding Indonesia',
    type: 'Completion Certificate',
    type_id: 'Sertifikat Penyelesaian',
    year: '2025',
    image: '/certifications/memulai-pemrograman-dengan-python.webp',
  },
  {
    id: '7',
    name: 'Machine Learning Operations (MLOps) for Generative AI',
    issuer: 'Google',
    type: 'Completion Badge',
    type_id: 'Lencana Penyelesaian',
    year: '2026',
    image: '/certifications/machine-learning-operations-mlops-for-generative-ai.webp',
  }
];
