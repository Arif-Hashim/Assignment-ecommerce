import {
  blackGraphicTee,
  maroonPolo,
  stripedRaglanTee,
  stripedRaglanTeeAlt,
  blackSkinnyJeans,
  plaidShirt,
  orangeRaglanTee,
  oneLifeTee,
  oneLifeTeeModel,
} from '../components/images/index.js';

// Central product catalog. Real photos are used wherever available; any product
// without a matching shoot falls back to a placeholder so the grid never breaks.
const img = (bg, text) =>
  `https://placehold.co/500x500/${bg}/1a1a1a?font=poppins&text=${encodeURIComponent(text)}`;

export const CATEGORIES = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
export const DRESS_STYLES = ['Casual', 'Formal', 'Party', 'Gym'];
export const SIZES = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large'];
export const COLORS = [
  { name: 'Green', hex: '#4F4632' },
  { name: 'Red', hex: '#C5252B' },
  { name: 'Yellow', hex: '#E5B71C' },
  { name: 'Orange', hex: '#F27A1A' },
  { name: 'Cyan', hex: '#2CA6A4' },
  { name: 'Blue', hex: '#2B4C9B' },
  { name: 'Purple', hex: '#7B4FA6' },
  { name: 'Pink', hex: '#EF9FC1' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#000000' },
];

const bgs = ['e5e5e5', 'f2f0f1', 'ececec', 'e9e5df', 'f0efee', 'e6e0da', 'ede9e6'];
const bgFor = (i) => bgs[i % bgs.length];

export const PRODUCTS = [
  { id: 1, name: 'Gradient Graphic T-shirt', category: 'T-shirts', style: 'Casual', price: 145, oldPrice: null, discount: 0, rating: 3.5, reviews: 12,
    colors: ['Green', 'White', 'Black'], sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'A relaxed-fit tee with a bold gradient print across the chest. Soft, breathable cotton jersey that moves with you all day.',
    section: 'new', localImage: blackGraphicTee },
  { id: 2, name: 'Polo with Tipping Details', category: 'Shirts', style: 'Casual', price: 180, oldPrice: null, discount: 0, rating: 4.5, reviews: 27,
    colors: ['Black', 'White', 'Blue'], sizes: ['Small', 'Medium', 'Large'],
    description: 'A classic polo with contrast tipping on the collar and sleeves for a sharp, sporty finish.',
    section: 'new', localImage: maroonPolo },
  { id: 3, name: 'Black Striped T-shirt', category: 'T-shirts', style: 'Casual', price: 120, oldPrice: 150, discount: 20, rating: 5, reviews: 41,
    colors: ['Black', 'White'], sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'Timeless black and white stripes on a heavyweight cotton tee that only gets better with wear.',
    section: 'new', localImage: stripedRaglanTee },
  { id: 4, name: 'Skinny Fit Jeans', category: 'Jeans', style: 'Casual', price: 240, oldPrice: 260, discount: 20, rating: 3.5, reviews: 19,
    colors: ['Blue', 'Black'], sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'Stretch denim cut close to the leg for a modern silhouette that still moves easily.',
    section: 'new', localImage: blackSkinnyJeans },
  { id: 5, name: 'Checkered Shirt', category: 'Shirts', style: 'Casual', price: 180, oldPrice: null, discount: 0, rating: 4.5, reviews: 8,
    colors: ['Red', 'Green', 'Black'], sizes: ['Medium', 'Large', 'X-Large'],
    description: 'A brushed-cotton checkered shirt built for layering, with a relaxed everyday fit.',
    section: 'top', localImage: plaidShirt },
  { id: 6, name: 'Sleeve Striped T-shirt', category: 'T-shirts', style: 'Casual', price: 130, oldPrice: 160, discount: 20, rating: 4.5, reviews: 14,
    colors: ['Orange', 'White'], sizes: ['Small', 'Medium', 'Large'],
    description: 'A crew-neck tee with striped sleeve detailing for a sporty, retro edge.',
    section: 'top', localImage: orangeRaglanTee },
  { id: 7, name: 'Vertical Striped Shirt', category: 'Shirts', style: 'Formal', price: 212, oldPrice: 232, discount: 20, rating: 5, reviews: 33,
    colors: ['Green', 'White'], sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'Crisp vertical stripes on lightweight poplin — smart enough for the office, easy enough for the weekend.',
    section: 'top', localImage: stripedRaglanTeeAlt },
  { id: 8, name: 'Courage Graphic T-shirt', category: 'T-shirts', style: 'Casual', price: 145, oldPrice: null, discount: 0, rating: 4, reviews: 6,
    colors: ['Orange', 'Black'], sizes: ['Small', 'Medium', 'Large'],
    description: 'Statement graphic tee printed on soft-hand cotton for everyday wear.',
    section: 'top', localImage: blackGraphicTee },
  { id: 9, name: 'Loose Fit Bermuda Shorts', category: 'Shorts', style: 'Casual', price: 80, oldPrice: null, discount: 0, rating: 3, reviews: 5,
    colors: ['Blue', 'Black'], sizes: ['Small', 'Medium', 'Large'],
    description: 'Roomy bermuda shorts in durable cotton twill, finished with a drawstring waist.',
    section: 'style' },
  { id: 10, name: 'One Life Graphic T-shirt', category: 'T-shirts', style: 'Casual', price: 260, oldPrice: 300, discount: 40, rating: 4.5, reviews: 45,
    colors: ['Green', 'Black', 'White'], sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description:
      "This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style all day.",
    section: 'style', localImage: oneLifeTee, localGallery: [oneLifeTee, oneLifeTeeModel] },
  { id: 11, name: 'Faded Skinny Jeans', category: 'Jeans', style: 'Casual', price: 210, oldPrice: null, discount: 0, rating: 4, reviews: 11,
    colors: ['Blue'], sizes: ['Small', 'Medium', 'Large'],
    description: 'Faded-wash skinny jeans with a touch of stretch for all-day comfort.',
    section: 'style', localImage: blackSkinnyJeans },
  { id: 12, name: 'Classic Pullover Hoodie', category: 'Hoodie', style: 'Gym', price: 195, oldPrice: 230, discount: 15, rating: 4.5, reviews: 22,
    colors: ['Black', 'Cyan', 'Purple'], sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'Heavyweight fleece pullover hoodie with a kangaroo pocket, built for training days.',
    section: 'style' },
];

PRODUCTS.forEach((p, i) => {
  if (p.localImage) {
    p.image = p.localImage;
    p.gallery = p.localGallery && p.localGallery.length ? p.localGallery : [p.localImage];
  } else {
    p.image = img(bgFor(i), p.name);
    p.gallery = [img(bgFor(i), p.name), img(bgFor(i + 1), p.name), img(bgFor(i + 2), p.name), img(bgFor(i + 3), p.name)];
  }
});

export const getProductById = (id) => PRODUCTS.find((p) => String(p.id) === String(id));

export const REVIEWS = [
  { id: 1, name: 'Samantha D.', rating: 5, verified: true, date: 'August 14, 2023',
    text: 'I ordered this and it fits great. The material feels premium and the color is exactly as pictured. Would order again.' },
  { id: 2, name: 'Alex M.', rating: 5, verified: true, date: 'August 15, 2023',
    text: 'The quality is amazing for the price. Sizing runs true and delivery was quick. Highly recommend this shop.' },
  { id: 3, name: 'Ethan R.', rating: 4, verified: true, date: 'August 16, 2023',
    text: 'Good product overall, comfortable and looks nice. Took off one star only because shipping took a bit longer than expected.' },
  { id: 4, name: 'Olivia P.', rating: 5, verified: true, date: 'August 17, 2023',
    text: 'Absolutely love it! The fit is exactly what I wanted and it washes well without losing shape.' },
  { id: 5, name: 'Liam K.', rating: 5, verified: true, date: 'August 19, 2023',
    text: 'This is now my go-to. Comfortable, stylish, and holds up after multiple washes.' },
  { id: 6, name: 'Ava H.', rating: 4, verified: true, date: 'August 20, 2023',
    text: 'Great value for money. The stitching is solid and it looks even better in person.' },
];

export const TESTIMONIALS = [
  { id: 1, name: 'Sarah M.', rating: 5, text: "I'm blown away by the quality and style of the clothes I received. Every piece feels well made and fits perfectly." },
  { id: 2, name: 'Alex K.', rating: 5, text: 'Finding clothes that match my personal style used to be a challenge until I found this store. The variety is amazing.' },
  { id: 3, name: 'James L.', rating: 5, text: 'As a fashion enthusiast, I appreciate the attention to detail and the quality of every single piece I have bought here.' },
  { id: 4, name: 'Priya S.', rating: 5, text: 'The customer service was fantastic and my order arrived earlier than expected. Will absolutely be shopping again.' },
];
