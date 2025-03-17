
export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface ProductReview {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categoryId: string;
  brand: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  price: number;
  originalPrice?: number;
  discount?: number;
  stock: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  isTrending?: boolean;
  isBestSeller?: boolean;
  tags: string[];
  relatedProducts?: string[];
}

export const categories: ProductCategory[] = [
  { id: "cat1", name: "Smartphones", slug: "smartphones" },
  { id: "cat2", name: "Laptops", slug: "laptops" },
  { id: "cat3", name: "Tablets", slug: "tablets" },
  { id: "cat4", name: "Audio", slug: "audio" },
  { id: "cat5", name: "TVs", slug: "tvs" },
  { id: "cat6", name: "Cameras", slug: "cameras" },
  { id: "cat7", name: "Gaming", slug: "gaming" },
  { id: "cat8", name: "Accessories", slug: "accessories" },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    category: "Smartphones",
    categoryId: "cat1",
    brand: "Apple",
    description: "Experience the ultimate iPhone with the most powerful camera, brightest display, and most advanced features.",
    features: [
      "6.7-inch Super Retina XDR display",
      "A16 Bionic chip",
      "48MP main camera with quad-pixel sensor",
      "Action mode for smooth, steady handheld videos",
      "All-day battery life and up to 29 hours of video playback"
    ],
    specifications: {
      "Display": "6.7-inch Super Retina XDR",
      "Processor": "A16 Bionic",
      "Storage": "128GB, 256GB, 512GB, 1TB",
      "Camera": "48MP main, 12MP ultrawide, 12MP telephoto",
      "Battery": "4323 mAh",
      "OS": "iOS 16",
      "Dimensions": "160.7 x 77.6 x 7.85 mm",
      "Weight": "240g"
    },
    price: 999,
    originalPrice: 1099,
    discount: 9,
    stock: 50,
    rating: 4.8,
    reviewCount: 256,
    image: "https://images.unsplash.com/photo-1664478546384-d57e961dbb0a?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1664478546384-d57e961dbb0a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1663224818229-cfef3124209e?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=1771&auto=format&fit=crop"
    ],
    isFeatured: true,
    isTrending: true,
    isBestSeller: true,
    tags: ["premium", "5G", "smartphone", "apple"],
    relatedProducts: ["p2", "p5", "p8"]
  },
  {
    id: "p2",
    name: "Samsung Galaxy S23 Ultra",
    slug: "samsung-galaxy-s23-ultra",
    category: "Smartphones",
    categoryId: "cat1",
    brand: "Samsung",
    description: "The Galaxy S23 Ultra brings a massive leap in camera technology, featuring a 200MP sensor and up to 100x Space Zoom.",
    features: [
      "6.8-inch Quad HD+ Dynamic AMOLED 2X display",
      "Snapdragon 8 Gen 2 processor",
      "200MP wide camera with advanced nightography",
      "Built-in S Pen functionality",
      "5000mAh battery with fast charging"
    ],
    specifications: {
      "Display": "6.8-inch Quad HD+ Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "Storage": "128GB, 256GB, 512GB, 1TB",
      "Camera": "200MP main, 12MP ultrawide, 10MP telephoto (3x), 10MP telephoto (10x)",
      "Battery": "5000 mAh",
      "OS": "Android 13, One UI 5.1",
      "Dimensions": "163.4 x 78.1 x 8.9 mm",
      "Weight": "233g"
    },
    price: 899.99,
    originalPrice: 1199.99,
    discount: 25,
    stock: 35,
    rating: 4.7,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1678911040876-33515f1d2386?q=80&w=1770&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1678911040876-33515f1d2386?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1676501414704-b62760aa3d4a?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610945265064-0e34e5d357bf?q=80&w=1771&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?q=80&w=1767&auto=format&fit=crop"
    ],
    isFeatured: true,
    isTrending: true,
    tags: ["premium", "5G", "smartphone", "samsung"],
    relatedProducts: ["p1", "p3", "p8"]
  },
  {
    id: "p3",
    name: "MacBook Pro 16-inch",
    slug: "macbook-pro-16",
    category: "Laptops",
    categoryId: "cat2",
    brand: "Apple",
    description: "The most powerful MacBook Pro ever is supercharged by M2 Pro or M2 Max chip, offering exceptional performance and battery life.",
    features: [
      "16.2-inch Liquid Retina XDR display",
      "M2 Pro or M2 Max chip",
      "Up to 32-core GPU and 12-core CPU",
      "Up to 96GB unified memory",
      "Up to 22 hours of battery life"
    ],
    specifications: {
      "Display": "16.2-inch Liquid Retina XDR",
      "Processor": "M2 Pro or M2 Max",
      "Storage": "512GB, 1TB, 2TB, 4TB, 8TB SSD",
      "Memory": "16GB, 32GB, 64GB, 96GB unified memory",
      "Graphics": "19-core or 38-core GPU",
      "Battery": "Up to 22 hours",
      "OS": "macOS Ventura",
      "Ports": "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, headphone jack"
    },
    price: 2499,
    originalPrice: 2699,
    discount: 7,
    stock: 20,
    rating: 4.9,
    reviewCount: 128,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=1770&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestSeller: true,
    tags: ["premium", "laptop", "apple", "pro"],
    relatedProducts: ["p4", "p6"]
  },
  {
    id: "p4",
    name: "Dell XPS 15",
    slug: "dell-xps-15",
    category: "Laptops",
    categoryId: "cat2",
    brand: "Dell",
    description: "A premium Windows laptop with a stunning 4K OLED display and powerful performance for creators and professionals.",
    features: [
      "15.6-inch 4K OLED InfinityEdge display",
      "12th Gen Intel Core i7 or i9 processor",
      "NVIDIA GeForce RTX 3050 Ti graphics",
      "Up to 64GB DDR5 memory",
      "CNC machined aluminum chassis with carbon fiber palm rest"
    ],
    specifications: {
      "Display": "15.6-inch 4K OLED InfinityEdge",
      "Processor": "12th Gen Intel Core i7-12700H or i9-12900HK",
      "Storage": "512GB, 1TB, 2TB SSD",
      "Memory": "16GB, 32GB, 64GB DDR5",
      "Graphics": "NVIDIA GeForce RTX 3050 Ti",
      "Battery": "86Whr",
      "OS": "Windows 11 Pro",
      "Ports": "2x Thunderbolt 4, USB-C 3.2, SD card reader, headphone jack"
    },
    price: 1899.99,
    originalPrice: 2199.99,
    discount: 14,
    stock: 15,
    rating: 4.6,
    reviewCount: 97,
    image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?q=80&w=1769&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?q=80&w=1769&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593642634443-44adaa06623a?q=80&w=1776&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?q=80&w=1770&auto=format&fit=crop"
    ],
    isFeatured: true,
    tags: ["premium", "laptop", "dell", "windows"],
    relatedProducts: ["p3", "p6"]
  },
  {
    id: "p5",
    name: "Google Pixel 7 Pro",
    slug: "google-pixel-7-pro",
    category: "Smartphones",
    categoryId: "cat1",
    brand: "Google",
    description: "The Google Pixel 7 Pro features the best of Google AI in a fast, efficient, and intelligent smartphone.",
    features: [
      "6.7-inch QHD+ LTPO OLED display",
      "Google Tensor G2 chip",
      "50MP main, 12MP ultrawide, 48MP telephoto cameras",
      "Advanced photo and video features with computational photography",
      "24-hour+ battery life with Extreme Battery Saver"
    ],
    specifications: {
      "Display": "6.7-inch QHD+ LTPO OLED",
      "Processor": "Google Tensor G2",
      "Storage": "128GB, 256GB, 512GB",
      "Camera": "50MP main, 12MP ultrawide, 48MP telephoto (5x)",
      "Battery": "5000 mAh",
      "OS": "Android 13",
      "Dimensions": "162.9 x 76.6 x 8.9 mm",
      "Weight": "212g"
    },
    price: 749.99,
    originalPrice: 899.99,
    discount: 17,
    stock: 30,
    rating: 4.5,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1666202822675-b63760e0ebf6?q=80&w=1779&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1666202822675-b63760e0ebf6?q=80&w=1779&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1667390933428-34c1e1c78d9e?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1662730654619-82a03c256ddd?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1667390933394-c6f9d18028d4?q=80&w=1770&auto=format&fit=crop"
    ],
    isBestSeller: true,
    isTrending: true,
    tags: ["5G", "smartphone", "google", "android"],
    relatedProducts: ["p1", "p2", "p8"]
  },
  {
    id: "p6",
    name: "ASUS ROG Zephyrus G15",
    slug: "asus-rog-zephyrus-g15",
    category: "Gaming",
    categoryId: "cat7",
    brand: "ASUS",
    description: "A powerful gaming laptop with a sleek design, featuring AMD Ryzen 9 processor and NVIDIA RTX graphics.",
    features: [
      "15.6-inch QHD 165Hz display with Adaptive-Sync",
      "AMD Ryzen 9 6900HS processor",
      "NVIDIA GeForce RTX 3080 graphics",
      "16GB DDR5 RAM, expandable to 48GB",
      "1TB PCIe 4.0 NVMe SSD"
    ],
    specifications: {
      "Display": "15.6-inch QHD (2560 x 1440) 165Hz",
      "Processor": "AMD Ryzen 9 6900HS",
      "Storage": "1TB PCIe 4.0 NVMe SSD",
      "Memory": "16GB DDR5 (expandable to 48GB)",
      "Graphics": "NVIDIA GeForce RTX 3080 8GB GDDR6",
      "Battery": "90Whr",
      "OS": "Windows 11 Home",
      "Weight": "1.9kg"
    },
    price: 1849.99,
    originalPrice: 2199.99,
    discount: 16,
    stock: 12,
    rating: 4.7,
    reviewCount: 85,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1768&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1768&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633113215883-a43e36bc6178?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&w=1770&auto=format&fit=crop"
    ],
    isTrending: true,
    tags: ["gaming", "laptop", "asus", "premium"],
    relatedProducts: ["p3", "p4", "p7"]
  },
  {
    id: "p7",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    category: "Audio",
    categoryId: "cat4",
    brand: "Sony",
    description: "Industry-leading noise cancelling headphones with exceptional sound quality and comfortable design.",
    features: [
      "Industry-leading noise cancellation with 8 microphones and 2 processors",
      "30-hour battery life with quick charging",
      "Crystal clear hands-free calling with 4 beamforming microphones",
      "Multipoint connection lets you quickly switch between devices",
      "Integrated processor V1 for exceptional sound quality"
    ],
    specifications: {
      "Driver": "30mm, dome type",
      "Frequency Response": "4Hz-40,000Hz",
      "Bluetooth": "5.2",
      "Battery Life": "Up to 30 hours (NC ON), 40 hours (NC OFF)",
      "Charging Time": "3.5 hours (full charge), 3 hours playback with 3-min charge",
      "Weight": "250g",
      "Connections": "Bluetooth, 3.5mm audio jack"
    },
    price: 349.99,
    originalPrice: 399.99,
    discount: 13,
    stock: 45,
    rating: 4.8,
    reviewCount: 217,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1770&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1769&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1769&auto=format&fit=crop"
    ],
    isBestSeller: true,
    isNew: true,
    tags: ["audio", "headphones", "noise-cancelling", "premium"],
    relatedProducts: ["p9", "p10"]
  },
  {
    id: "p8",
    name: "iPad Air 5th Generation",
    slug: "ipad-air-5th-generation",
    category: "Tablets",
    categoryId: "cat3",
    brand: "Apple",
    description: "The iPad Air features the breakthrough M1 chip, an all-screen design, and impressive 12MP camera system.",
    features: [
      "10.9-inch Liquid Retina display with True Tone",
      "Apple M1 chip",
      "12MP Wide camera with Center Stage",
      "USB-C connector",
      "Support for Apple Pencil (2nd generation) and Magic Keyboard"
    ],
    specifications: {
      "Display": "10.9-inch Liquid Retina",
      "Processor": "Apple M1 chip",
      "Storage": "64GB or 256GB",
      "Camera": "12MP Wide, 12MP Ultra Wide front",
      "Battery": "Up to 10 hours of web browsing",
      "OS": "iPadOS 16",
      "Dimensions": "247.6 x 178.5 x 6.1 mm",
      "Weight": "461g (Wi-Fi), 462g (Wi-Fi + Cellular)"
    },
    price: 599.99,
    originalPrice: 649.99,
    discount: 8,
    stock: 28,
    rating: 4.7,
    reviewCount: 143,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1773&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1773&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557825835-b4527f242af7?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590051284066-af686d36e49a?q=80&w=1773&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564620289016-cce252157251?q=80&w=1770&auto=format&fit=crop"
    ],
    isFeatured: true,
    tags: ["tablet", "apple", "ipad"],
    relatedProducts: ["p1", "p3", "p5"]
  },
  {
    id: "p9",
    name: "Bose QuietComfort Earbuds II",
    slug: "bose-quietcomfort-earbuds-ii",
    category: "Audio",
    categoryId: "cat4",
    brand: "Bose",
    description: "The world's best noise cancelling earbuds with personalized sound and comfortable fit.",
    features: [
      "CustomTune technology automatically personalizes noise cancellation and sound",
      "Quiet and Aware Modes with adjustable noise cancellation levels",
      "Up to 6 hours of battery life, 24 hours total with charging case",
      "Stability bands and umbrella-shaped ear tips for secure fit",
      "Bluetooth 5.3 with SimpleSync"
    ],
    specifications: {
      "Battery Life": "6 hours (earbuds), 24 hours total with case",
      "Charging": "USB-C, 20 mins for 2 hours playback",
      "Bluetooth Range": "Up to 30 feet (9 meters)",
      "Water Resistance": "IPX4 (sweat and weather resistant)",
      "Dimensions": "Earbuds: 17.2 x 30.5 x 22.4 mm, Case: 59.4 x 66.2 x 26.4 mm",
      "Weight": "Earbuds: 6.2g each, Case: 59.8g"
    },
    price: 279.99,
    originalPrice: 299.99,
    discount: 7,
    stock: 22,
    rating: 4.6,
    reviewCount: 132,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1770&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590659762355-54d919e3fa63?q=80&w=1769&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=1770&auto=format&fit=crop"
    ],
    isNew: true,
    tags: ["audio", "earbuds", "noise-cancelling", "premium"],
    relatedProducts: ["p7", "p10"]
  },
  {
    id: "p10",
    name: "Samsung 55\" OLED 4K TV",
    slug: "samsung-55-oled-4k-tv",
    category: "TVs",
    categoryId: "cat5",
    brand: "Samsung",
    description: "Experience breathtaking color and contrast with this stunning OLED 4K Smart TV.",
    features: [
      "4K OLED display with perfect black levels and infinite contrast",
      "Neural Quantum Processor for intelligent 4K upscaling",
      "Dolby Atmos and Object Tracking Sound for immersive audio",
      "Gaming Hub with cloud gaming support",
      "SmartThings integration for smart home control"
    ],
    specifications: {
      "Display": "55-inch 4K OLED (3840x2160)",
      "Processor": "Neural Quantum Processor 4K",
      "HDR": "HDR10+, HDR10, HLG",
      "Audio": "40W, 2.2.2 channel with Dolby Atmos",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "Connectivity": "4x HDMI (2x HDMI 2.1), 2x USB, Wi-Fi, Bluetooth"
    },
    price: 1499.99,
    originalPrice: 1799.99,
    discount: 17,
    stock: 10,
    rating: 4.8,
    reviewCount: 92,
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1778&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1778&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467293622093-9f15c96be70f?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539786774582-0707555f1f72?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=1769&auto=format&fit=crop"
    ],
    isFeatured: true,
    isNew: true,
    tags: ["tv", "oled", "4k", "premium", "samsung"],
    relatedProducts: ["p12"]
  },
  {
    id: "p11",
    name: "Canon EOS R6 Mark II",
    slug: "canon-eos-r6-mark-ii",
    category: "Cameras",
    categoryId: "cat6",
    brand: "Canon",
    description: "A versatile hybrid camera delivering high-speed sports shooting, superb low-light performance, and uncropped 4K video.",
    features: [
      "24.2MP full-frame CMOS sensor",
      "Up to 40fps electronic shutter, 12fps mechanical",
      "4K 60p video recording, Full HD at 180p",
      "In-body image stabilization (IBIS) up to 8 stops",
      "Dual UHS-II SD card slots"
    ],
    specifications: {
      "Sensor": "24.2MP full-frame CMOS",
      "Image Processor": "DIGIC X",
      "ISO Range": "100-102,400 (expandable to 204,800)",
      "Autofocus": "Dual Pixel CMOS AF II, 1,053 AF points",
      "Video": "4K 60p, 6K RAW external recording",
      "EVF": "3.69M-dot, 0.76x magnification",
      "LCD": "3.0-inch, 1.62M-dot vari-angle touchscreen",
      "Stabilization": "5-axis IBIS, up to 8 stops"
    },
    price: 2499.99,
    originalPrice: 2599.99,
    discount: 4,
    stock: 8,
    rating: 4.8,
    reviewCount: 64,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1838&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1838&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617560611911-80778a8fd27d?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603676055415-ec5948b885a5?q=80&w=1770&auto=format&fit=crop"
    ],
    isTrending: true,
    isNew: true,
    tags: ["camera", "mirrorless", "premium", "canon"],
    relatedProducts: ["p12"]
  },
  {
    id: "p12",
    name: "Nintendo Switch OLED Model",
    slug: "nintendo-switch-oled",
    category: "Gaming",
    categoryId: "cat7",
    brand: "Nintendo",
    description: "The Nintendo Switch OLED Model features a vibrant 7-inch OLED screen, enhanced audio, and a wide adjustable stand.",
    features: [
      "7-inch OLED screen with vibrant colors and sharp contrast",
      "Wide adjustable stand for tabletop play",
      "Enhanced audio for handheld and tabletop play",
      "64GB internal storage",
      "Wired LAN port in dock"
    ],
    specifications: {
      "Screen": "7-inch OLED (1280x720)",
      "CPU/GPU": "NVIDIA Custom Tegra processor",
      "Storage": "64GB (expandable via microSD)",
      "Battery Life": "4.5-9 hours",
      "Connectivity": "Wi-Fi, Bluetooth 4.1, Wired LAN (dock)",
      "Dimensions": "9.5\" x 4\" x 0.55\" (with Joy-Con attached)",
      "Weight": "Approximately 0.93 lbs (with Joy-Con attached)"
    },
    price: 349.99,
    originalPrice: 349.99,
    stock: 25,
    rating: 4.9,
    reviewCount: 187,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=1770&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617096796279-ea3a3bf9b245?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=1770&auto=format&fit=crop"
    ],
    isBestSeller: true,
    tags: ["gaming", "console", "nintendo", "portable"],
    relatedProducts: ["p6", "p10"]
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.categoryId === categoryId);
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.isFeatured);
};

// Helper function to get trending products
export const getTrendingProducts = (): Product[] => {
  return products.filter((product) => product.isTrending);
};

// Helper function to get best seller products
export const getBestSellerProducts = (): Product[] => {
  return products.filter((product) => product.isBestSeller);
};

// Helper function to get new products
export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.isNew);
};

// Helper function to get related products
export const getRelatedProducts = (productId: string): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  return product.relatedProducts.map((id) => getProductById(id)).filter(Boolean) as Product[];
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter((product) => 
    product.name.toLowerCase().includes(lowerQuery) || 
    product.description.toLowerCase().includes(lowerQuery) || 
    product.brand.toLowerCase().includes(lowerQuery) || 
    product.category.toLowerCase().includes(lowerQuery) || 
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
