import assets from './official-assets.json';
export const photos=assets;
export type Photo=keyof typeof photos;
export type Item={name:string;category:string;price:number;unit:string;description:string;photo:Photo};
export const catalog:Item[]=[
{name:'Catering Prasmanan',category:'Acara besar',price:55000,unit:'orang',description:'Pilihan hidangan utama, lauk, sayur, dan pencuci mulut untuk momen bersama.',photo:'buffet'},
{name:'Nasi Kotak',category:'Paket praktis',price:35000,unit:'kotak',description:'Nasi, ayam atau daging, sayuran, sambal dan pelengkap dalam satu kemasan.',photo:'box'},
{name:'Nasi Tumpeng',category:'Tradisional',price:450000,unit:'paket',description:'Sajian istimewa untuk syukuran dan perayaan keluarga.',photo:'rice'},
{name:'Table Manner',category:'Acara besar',price:125000,unit:'orang',description:'Pengalaman bersantap formal dengan susunan menu yang elegan.',photo:'table'},
{name:'Gala Dinner',category:'Acara besar',price:150000,unit:'orang',description:'Konsep hidangan makan malam untuk acara formal dan perayaan.',photo:'dinner'},
{name:'Cooking Class',category:'Pengalaman',price:95000,unit:'orang',description:'Belajar mengolah makanan dalam kegiatan kuliner bersama.',photo:'chef'},
{name:'Nasi Liwet',category:'Tradisional',price:45000,unit:'orang',description:'Nasi gurih, lauk dan sambal khas untuk dinikmati bersama.',photo:'traditional'},
{name:'Snack Box',category:'Paket praktis',price:18000,unit:'kotak',description:'Pilihan kudapan manis dan gurih untuk rapat dan acara.',photo:'snack'},
{name:'Coffee Break',category:'Paket praktis',price:25000,unit:'orang',description:'Kopi, teh dan camilan untuk mengisi jeda kegiatan.',photo:'coffee'},
{name:'Nasi Kebuli',category:'Tradisional',price:55000,unit:'orang',description:'Nasi berbumbu rempah dengan lauk pilihan dan acar.',photo:'kebuli'},
{name:'Nasi Besek',category:'Tradisional',price:40000,unit:'kotak',description:'Sajian nasi dan lauk dalam kemasan tradisional.',photo:'besek'},
{name:'Paket Awug',category:'Tradisional',price:120000,unit:'paket',description:'Kudapan khas Sunda berbahan tepung beras dan gula aren.',photo:'pastry'}
];
export const packages=[
{name:'EL',price:45000,description:'Sajian klasik untuk kebersamaan.',items:['Nasi putih','Ayam bumbu pilihan','Sayuran','Kerupuk & sambal','Air mineral']},
{name:'NYUNDA',price:65000,description:'Kehangatan cita rasa khas Sunda.',items:['Nasi liwet','Ayam bakar','Gepuk','Karedok & lalapan','Sambal & dessert']},
{name:'BIRRU',price:85000,description:'Variasi hidangan untuk momen istimewa.',items:['Dua pilihan nasi','Daging & ayam','Sayur pilihan','Hidangan pendamping','Dessert & minuman']},
{name:'ELBIRRU',price:115000,description:'Pengalaman kuliner yang lebih lengkap.',items:['Pilihan nasi premium','Daging, ayam & ikan','Hidangan pendamping','Dessert pilihan','Minuman & buah']}
];
export const money=(n:number)=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
export const photoUrl=(key:Photo)=>'/images/official/'+key+'.'+photos[key].split('.').pop();
export const stockUrl=(key:Photo)=>photos[key];