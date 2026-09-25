export interface Product {
  sku: string;
  name: string;
  image: string;
  gallery?: string[];
  sizes: string[];
  description: string;
  category: string;
  colors?: string[];
}

const images = [
  '/src/assets/images/cozyon_slide_new_1790272772073.jpg',
  '/src/assets/images/cozyon_flipflop_new_1790272783816.jpg',
  '/src/assets/images/cozyon_sport_new_1790272794233.jpg',
  '/src/assets/images/cozyon_leather_new_1790272805719.jpg',
  '/src/assets/images/cozyon_recovery_new_1790272816856.jpg',
];

const categories = [
  'Slide',
  'Flip Flop',
  'Sport',
  'Leather',
  'Recovery',
];

const descriptions = [
  'Sendal slide ergonomis dengan bahan busa premium yang sangat empuk, cocok untuk penggunaan sehari-hari maupun santai di rumah. Tahan lama dan mudah dibersihkan.',
  'Sendal jepit stylish dengan tali kanvas yang kuat dan sol karet anti slip. Desain minimalis yang cocok untuk pergi ke pantai atau jalan-jalan santai.',
  'Sendal gunung dengan tali nylon yang bisa disesuaikan. Sol trekking yang tangguh memberikan cengkeraman maksimal di berbagai medan outdoor.',
  'Sendal kulit mewah dengan strap lebar dan gesper logam. Insole dari bahan gabus yang mengikuti bentuk kaki, memberikan kemyamanan maksimal sepanjang hari.',
  'Sendal recovery atletik yang dirancang khusus untuk mengistirahatkan kaki setelah berolahraga berat. Dilengkapi dengan bantalan tebal dan sirkulasi udara yang baik.',
];

const uploadedFolders = new Set([
  '001', '002', '003', '004', '006', '008', '009', '010', '011', '012', 
  '013', '014', '015', '016', '018', '019', '020', '021', '022', '023', 
  '024', '025', '026', '027', '028', '029', '030', '031', '032', '035', 
  '036', '037', '038', '039', '040', '041', '042'
]);

const skuCategoryMap: Record<string, string> = {
  'CZN-001': 'Clogs',
  'CZN-002': 'Flip Flop',
  'CZN-003': 'Jepit',
  'CZN-004': 'Jepit',
  'CZN-006': 'Slop',
  'CZN-008': 'Strap',
  'CZN-009': 'Slop',
  'CZN-010': 'Slop',
  'CZN-011': 'Slop',
  'CZN-012': 'Slop',
  'CZN-013': 'Jepit Leather',
  'CZN-014': 'Slop',
  'CZN-015': 'Slop',
  'CZN-016': 'Jepit',
  'CZN-018': 'Slop',
  'CZN-019': 'Slop Karet',
  'CZN-020': 'Slop',
  'CZN-021': 'Slop',
  'CZN-022': 'Strap',
  'CZN-023': 'Kids Slop',
  'CZN-024': 'Slop',
  'CZN-025': 'Slop',
  'CZN-026': 'Jepit',
  'CZN-027': 'Strap',
  'CZN-028': 'Kids Clogs',
  'CZN-029': 'MaryJane Clogs',
  'CZN-030': 'Kids Clogs',
  'CZN-031': 'Jepit',
  'CZN-032': 'Slop',
  'CZN-035': 'Strap',
  'CZN-036': 'Strap',
  'CZN-037': 'Slop',
  'CZN-038': 'Slop',
  'CZN-039': 'Kids Slop',
  'CZN-040': 'Kids Slop',
  'CZN-041': 'Kids Slop',
  'CZN-042': 'Kids Slop',
};

const skuDetailsMap: Record<string, Partial<Product>> = {
  'CZN-002': {
    sizes: ['36-37', '38-39', '40-41'],
    colors: ['Hitam', 'Coklat', 'Cream'],
    description: 'Belum Tersedia',
  },
  'CZN-003': {
    sizes: ['36/37', '38/39', '40/41', '42/43', '44/45'],
    colors: ['Hitam', 'Taupe', 'Abu-Abu', 'Cream', 'Navy', 'Hijau Tua'],
    description: 'Belum Tersedia',
  },
  'CZN-004': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Cream'],
    description: 'Belum Tersedia',
  },
  'CZN-006': {
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Hitam', 'Cream', 'Pink'],
    description: 'Belum Tersedia',
  },
  'CZN-008': {
    sizes: ['36/37', '38/39', '40/41'],
    colors: ['Hitam', 'Putih', 'Cream'],
    description: 'Belum Tersedia',
  },
  'CZN-009': {
    sizes: ['39/40', '41/42', '43/44'],
    colors: ['Hitam', 'Putih', 'Navy', 'Abu-Abu'],
    description: 'Belum Tersedia',
  },
  'CZN-010': {
    sizes: ['35-36', '37-38', '39-40', '40-41', '42-43', '44-45'],
    colors: ['Hitam', 'Navy', 'Taupe', 'Cream', 'Abu-Abu'],
    description: 'Belum Tersedia',
  },
};

export const products: Product[] = Array.from({ length: 42 }, (_, i) => {
  const id = i + 1;
  const numStr = id.toString().padStart(3, '0');
  const sku = `CZN-${numStr}`;
  const imageIndex = i % images.length;
  const hasUploadedImages = uploadedFolders.has(numStr);
  const category = skuCategoryMap[sku] || categories[imageIndex];
  
  if (sku === 'CZN-001') {
    return {
      sku,
      name: 'CZN-001',
      image: '/images/001/CZN-001-1.png',
      gallery: [
        '/images/001/CZN-001-1.png',
        '/images/001/CZN-001-2.png',
        '/images/001/CZN-001-3.png',
        '/images/001/CZN-001-4.png',
        '/images/001/CZN-001-5.png',
      ],
      sizes: ['36/37', '38/39', '40/41'],
      colors: ['Coklat', 'Cream', 'Hitam'],
      description: 'Bahan EVA Premium: Sangat empuk, lentur, ringan, dan tidak mudah kempes meskipun sering digunakan.\n\nAnti Slip & Anti Licin: Bagian bawah sandal memiliki tekstur khusus yang mencengkeram permukaan lantai dengan kuat, sangat aman untuk area kamar mandi atau dapur.\n\nWaterproof & Cepat Kering: Tidak menyerap air, sehingga terhindar dari bau lembap dan bakteri.\n\nDesain Ergonomis: Menopang kaki dengan sempurna, mengurangi pegal saat dipakai berjalan lama.\n\nMudah Dibersihkan: Cukup dibilas dengan air, sandal langsung bersih kembali.',
      category,
    };
  }

  // Helper to determine extension based on patterns seen in user actions
  const getExt = (skuNum: string, index: number) => {
    const n = parseInt(skuNum);
    if (n >= 11 && n <= 14) return 'png';
    if (n === 15 || n === 16) return 'jpg';
    if (n >= 18 && n <= 22) return 'png';
    if (n === 23 || n === 24) return index === 0 ? 'jpg' : 'png';
    if (n === 25) return 'png'; // Note: uses 6 instead of 5 for last image
    if (n >= 26 && n <= 28) return 'png';
    if (n === 29) return index === 0 ? 'png' : 'jpg';
    if (n === 30) return 'png';
    if (n === 31 || n === 32) return index < 2 ? 'png' : 'jpg';
    if (n >= 35 && n <= 40) return index === 0 ? 'png' : 'jpg';
    if (n === 41) return 'png';
    if (n === 42) {
       // CZN-042 uses special pattern based on user actions
       if (index === 0 || index === 1 || index === 4) return 'png';
       return 'jpg';
    }
    return 'png'; // default to png for 002-010
  };

  const getImgPath = (skuNum: string, index: number) => {
    const ext = getExt(skuNum, index);
    const n = parseInt(skuNum);
    let imgIdx = index + 1;
    
    // Special cases for indices
    if (n === 25 && index === 4) imgIdx = 6;
    if (n === 16 && index === 4) imgIdx = 6;

    return `/images/${skuNum}/CZN-${skuNum}-${imgIdx}.${ext}`;
  };

  const defaultImage = hasUploadedImages 
    ? getImgPath(numStr, 0)
    : images[imageIndex];

  const gallery = hasUploadedImages 
    ? [
        getImgPath(numStr, 0),
        getImgPath(numStr, 1),
        getImgPath(numStr, 2),
        getImgPath(numStr, 3),
        getImgPath(numStr, 4),
      ]
    : undefined;

  const details = skuDetailsMap[sku] || {};

  return {
    sku,
    name: `Cozyon ${category} ${sku}`,
    image: defaultImage,
    gallery,
    sizes: details.sizes || ['38', '39', '40', '41', '42', '43', '44'],
    description: details.description || descriptions[imageIndex],
    colors: details.colors,
    category,
  };
}).filter(p => !['CZN-005', 'CZN-007', 'CZN-017', 'CZN-033', 'CZN-034'].includes(p.sku));
