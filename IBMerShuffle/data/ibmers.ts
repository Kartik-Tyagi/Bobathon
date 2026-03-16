export interface IBMer {
  day: number;
  name: string;
  bio: string;
  why_famous: string;
  photo_link: string;
}

export const IBMERS_DATA: IBMer[] = [
  {
    day: 1,
    name: "Herman Hollerith",
    bio: "German-American inventor who created the electromechanical punched-card tabulating machine (patented 1884). His system processed the 1890 U.S. Census in 6 weeks instead of 8 years, slashing time and cost. Founded the Tabulating Machine Company, which merged in 1911 into CTR (later IBM in 1924).",
    why_famous: "Laid the foundation for mechanized data processing—the core of IBM's early business and the entire computing industry.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Herman_Hollerith.jpg/800px-Herman_Hollerith.jpg"
  },
  {
    day: 2,
    name: "Thomas J. Watson Sr.",
    bio: "Joined CTR in 1914, renamed it IBM in 1924, and led as CEO for 42 years. Grew it from ~1,300 employees to 72,500 with 100x revenue growth through global expansion, R&D (e.g., Watson Lab), and the iconic \"THINK\" motto. Championed employee welfare, education, diversity, and ethics.",
    why_famous: "Built the modern IBM culture of people-first leadership, sales excellence, and innovation that still defines the company.",
    photo_link: "https://www.ibm.com/history/thomas-watson-sr"
  },
  {
    day: 3,
    name: "Thomas J. Watson Jr.",
    bio: "Succeeded his father as CEO (1956–1971). Bet IBM's future on computers with the revolutionary System/360 family (1960s, $5B investment). Modernized management, launched IBM Research and Design programs, grew revenue 10x and workforce 3x. Enacted equal opportunity policy.",
    why_famous: "Transformed IBM from tabulators to the computer age leader; System/360 dominated for decades.",
    photo_link: "https://www.ibm.com/history/thomas-watson-jr"
  },
  {
    day: 4,
    name: "Ruth Leach",
    bio: "Started as a typewriter demonstrator at the 1939 World's Fair; rose to IBM's first woman corporate vice president (1943). Led WWII-era recruitment/training of women; became national spokesperson for women's opportunities.",
    why_famous: "Pioneered gender diversity and executive roles for women, proving IBM's commitment to inclusion decades ahead of its time.",
    photo_link: "https://www.ibm.com/history/ruth-leach"
  },
  {
    day: 5,
    name: "Louis V. Gerstner Jr.",
    bio: "Outsider CEO (1993–2002) who saved IBM from near-collapse. Shifted focus to e-business, services, and integrated solutions; cut costs, refocused on customers, and launched education initiatives.",
    why_famous: "Engineered the legendary 1990s turnaround that made IBM relevant again in the internet era.",
    photo_link: "https://www.ibm.com/history/louis-gerstner"
  },
  {
    day: 6,
    name: "Frances E. Allen",
    bio: "Joined IBM 1957; pioneered optimizing compilers, parallel computing, and interprocedural analysis. Key on Stretch, Blue Gene, and NSA projects. First woman Turing Award winner (2006) and first female IBM Fellow (1989).",
    why_famous: "Her compiler work powers modern high-performance computing; inspired generations of women in tech.",
    photo_link: "https://www.ibm.com/history/frances-allen"
  },
  {
    day: 7,
    name: "John Backus",
    bio: "IBM programmer (1950–1991); led creation of FORTRAN (1957), the first high-level programming language. Also co-created BNF notation and functional programming ideas. IBM Fellow.",
    why_famous: "Made programming accessible; FORTRAN is still used 65+ years later for science and engineering.",
    photo_link: "https://www.ibm.com/history/john-backus"
  },
  {
    day: 8,
    name: "Edgar F. Codd",
    bio: "IBM researcher; invented the relational database model (1970 paper). Led System R, which birthed SQL and DB2. Turing Award (1981).",
    why_famous: "Created the foundation of the entire database industry—every modern app, bank, and website relies on his ideas.",
    photo_link: "https://www.ibm.com/history/edgar-codd"
  },
  {
    day: 9,
    name: "John Cocke",
    bio: "IBM researcher 36 years; invented RISC architecture (1970s IBM 801 prototype). Enabled faster, pipelined CPUs. Turing Award (1987), National Medals of Science/Technology.",
    why_famous: "RISC powers today's processors, servers, phones, and supercomputers.",
    photo_link: "https://www.ibm.com/history/john-cocke"
  },
  {
    day: 10,
    name: "Gerd Binnig",
    bio: "IBM Zürich researcher; co-invented the scanning tunneling microscope (STM, 1981) with Heinrich Rohrer. Nobel Prize in Physics (1986). Later co-invented atomic force microscope (AFM). IBM Fellow.",
    why_famous: "Opened the nanotechnology era—allowed seeing and moving individual atoms for the first time.",
    photo_link: "https://www.ibm.com/history/gerd-binnig"
  },
  {
    day: 11,
    name: "Wallace J. Eckert",
    bio: "First director of IBM's Watson Scientific Computing Laboratory (1945). Established IBM Research culture of pure science and interdisciplinary work.",
    why_famous: "Founded the world's premier corporate research lab that produced countless breakthroughs.",
    photo_link: "https://www.ibm.com/history/wallace-eckert"
  },
  {
    day: 12,
    name: "Samuel J. Palmisano",
    bio: "CEO (2002–2012); launched \"Smarter Planet\" initiative, emphasizing global integration and intelligent systems.",
    why_famous: "Shifted IBM toward services, analytics, and societal impact in the 21st century.",
    photo_link: "https://www.ibm.com/history/sam-palmisano"
  },
  {
    day: 13,
    name: "Ginni Rometty (Virginia M. Rometty)",
    bio: "First woman CEO/Chairman (2012–2020); acquired companies, invested in hybrid cloud and quantum, championed diversity and Watson AI.",
    why_famous: "Repositioned IBM for the AI/cloud era while advancing inclusion.",
    photo_link: "https://www.ibm.com/history/ginni-rometty"
  },
  {
    day: 14,
    name: "Arvind Krishna",
    bio: "Current Chairman & CEO (since 2020); former head of Cloud & Cognitive Software. Leads IBM's AI, cloud, and quantum focus while upholding core values.",
    why_famous: "Steering the company through the AI revolution with watsonx and hybrid cloud leadership.",
    photo_link: "https://www.ibm.com/history/arvind-krishna"
  },
  {
    day: 15,
    name: "Mark Dean",
    bio: "IBM engineer; led PC design at age 25. Co-invented the first color PC monitor and bus architecture; 20+ patents. IBM Fellow.",
    why_famous: "Helped make personal computing mainstream and advanced Black representation in tech.",
    photo_link: "https://www.ibm.com/history/mark-dean"
  },
  {
    day: 16,
    name: "Chieko Asakawa",
    bio: "IBM researcher (blind since age 14); developed web-to-speech systems and AI accessibility tools.",
    why_famous: "Made the internet and AI usable for the visually impaired worldwide.",
    photo_link: "https://www.ibm.com/history/chieko-asakawa"
  },
  {
    day: 17,
    name: "Georg Bednorz",
    bio: "IBM researcher in Zürich; with K. Alex Müller, discovered high-temperature superconductivity in lanthanum barium copper oxide ceramics in 1986, achieving a critical temperature of 35 K—12 K higher than prior records. Shared the 1987 Nobel Prize in Physics and was appointed an IBM Fellow.",
    why_famous: "Their discovery opened new frontiers in materials science and computing hardware, influencing quantum computing and energy tech at IBM.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Georg_Bednorz_2013.jpg"
  },
  {
    day: 18,
    name: "Don Estridge",
    bio: "Led the IBM Entry Systems Division and developed the original IBM Personal Computer (model 5150) in 1981. Pioneered an open architecture by publishing specifications, enabling third-party hardware and software compatibility.",
    why_famous: "Created the PC revolution that brought computing to millions and transformed IBM into a household name.",
    photo_link: "https://www.ibm.com/history/personal-computer"
  },
  {
    day: 19,
    name: "Gene Amdahl",
    bio: "Pioneering computer architect at IBM; contributed to the IBM 704, 709, and Stretch project. Served as chief architect of the revolutionary IBM System/360 family of mainframes that standardized computing architecture. Formulated Amdahl's Law.",
    why_famous: "His scalable mainframe designs and Amdahl's Law still guide high-performance computing everywhere.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Gene_Amdahl_2008.jpg"
  },
  {
    day: 20,
    name: "Frederick P. Brooks Jr.",
    bio: "Joined IBM in 1956 and managed the development of the IBM System/360 family and OS/360 software. Coined the term \"computer architecture,\" changed the 360 series to 8-bit bytes, and led the Stretch supercomputer project. Wrote *The Mythical Man-Month*.",
    why_famous: "His System/360 leadership and timeless insights on project management remain core to IBM's system-design legacy.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Fred_Brooks_2007.jpg"
  },
  {
    day: 21,
    name: "Robert H. Dennard",
    bio: "IBM researcher who invented the single-transistor DRAM cell in 1966 (patented 1968), the foundation for dynamic random-access memory used in every modern device. Co-formulated Dennard scaling in 1974.",
    why_famous: "His DRAM invention and scaling laws enabled the explosive growth of memory and microelectronics across IBM's entire product line.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Robert_Dennard.jpg"
  },
  {
    day: 22,
    name: "Benoit Mandelbrot",
    bio: "IBM Fellow for 35 years at the Watson Research Center; pioneered fractal geometry using IBM computers. Coined the term \"fractal,\" developed theories of roughness and self-similarity, and discovered the Mandelbrot set in 1980.",
    why_famous: "His fractal work transformed visual computing and chaos theory, showing IBM Research could tackle the most complex problems.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Benoit_Mandelbrot.jpg"
  },
  {
    day: 23,
    name: "Leo Esaki",
    bio: "Joined IBM Watson Research Center in 1960 (IBM Fellow 1967). Pioneered semiconductor superlattices and molecular-beam epitaxy, creating artificial crystals with novel electronic effects.",
    why_famous: "His tunnel-diode Nobel research and superlattice innovations powered IBM's leadership in semiconductor and quantum technology.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Leo_Esaki_2020.jpg"
  },
  {
    day: 24,
    name: "Donald M. Eigler",
    bio: "IBM Fellow at Almaden Research Center; in 1989 used a scanning tunneling microscope to spell \"IBM\" with 35 individual xenon atoms — the first time anyone moved single atoms. Invented quantum corrals and nanoscale logic circuits.",
    why_famous: "He literally wrote IBM's name in atoms, launching the nanotechnology era and mechanosynthesis at IBM.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Don_Eigler.jpg"
  },
  {
    day: 25,
    name: "Kenneth E. Iverson",
    bio: "IBM Fellow from 1970; created the APL programming language at IBM Research (1960–1980). Developed its concise mathematical notation and implemented it on System/360. Received the Turing Award in 1979.",
    why_famous: "APL made complex math instantly executable, influencing generations of IBM tools and interactive systems.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Kenneth_E._Iverson.jpg"
  },
  {
    day: 26,
    name: "Ralph E. Gomory",
    bio: "Joined IBM Research in 1959 (IBM Fellow 1964); invented Gomory's cut for integer programming. As Director of Research and later Senior VP for Science & Technology, he oversaw breakthroughs in memory devices, RISC, relational databases, fractals, and Nobel-winning physics.",
    why_famous: "His optimization methods and research leadership turned IBM into the world's premier corporate science lab.",
    photo_link: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ralph_E._Gomory.jpg"
  },
  {
    day: 27,
    name: "T. Vincent Learson",
    bio: "IBM Chairman & CEO (1971–1973); the driving force behind the massive System/360 project that revolutionized mainframe computing with full compatibility across models.",
    why_famous: "He championed the System/360 gamble that defined modern computing and secured IBM's leadership for decades.",
    photo_link: "https://www.ibm.com/history/vin-learson"
  },
  {
    day: 28,
    name: "Frank T. Cary",
    bio: "IBM Chairman & CEO (1973–1981/1983); joined as a salesman in 1948 and grew through the ranks. Led explosive growth in revenue and products while starting early PC exploration.",
    why_famous: "His steady leadership through the 1970s boom kept IBM profitable and positioned it for the personal-computing era.",
    photo_link: "https://www.ibm.com/history/frank-cary"
  }
];

// Helper function to get IBMer for a specific date
export function getIBMerForDate(date: Date): IBMer {
  const dayOfYear = getDayOfYear(date);
  const index = (dayOfYear - 1) % IBMERS_DATA.length;
  return IBMERS_DATA[index];
}

// Helper function to get a random IBMer (different from current)
export function getRandomIBMer(excludeDay?: number): IBMer {
  let randomIndex: number;
  do {
    randomIndex = Math.floor(Math.random() * IBMERS_DATA.length);
  } while (excludeDay !== undefined && IBMERS_DATA[randomIndex].day === excludeDay);
  
  return IBMERS_DATA[randomIndex];
}

// Helper function to get day of year (1-365/366)
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Helper function to format date as YYYY-MM-DD
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Helper function to get IBMer by day number
export function getIBMerByDay(day: number): IBMer | undefined {
  return IBMERS_DATA.find(ibmer => ibmer.day === day);
}

// Made with Bob
