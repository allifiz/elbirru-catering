import type {Metadata} from 'next';
import './globals.css';
export const metadata: Metadata={title:'Elbirru Catering | Sebuah Sajian, Sebuah Cerita',description:'Konsep desain website katering dari SangkaraKarya. Informasi dan harga ilustratif.',robots:{index:false,follow:false},icons:{icon:'/images/mark.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}