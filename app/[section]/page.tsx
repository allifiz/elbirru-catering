import Experience from '../../components/experience';
import {notFound} from 'next/navigation';
const sections=['menu','paket','galeri','tentang','pemesanan','kontak'];
export function generateStaticParams(){return sections.map(section=>({section}));}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!sections.includes(section))notFound();return <Experience initialSection={section}/>;}