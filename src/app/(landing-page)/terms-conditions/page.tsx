'use client';
import About from '@/components/layouts/landing-page/about';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import tnc from '@/data/tnc.json';

export default function Terms() {
  return (
    <>
      <div className="container my-12 space-y-4">
        <h1 className="text-center text-xl font-bold tracking-tighter sm:text-2xl md:text-2xl">
          Persyaratan Rental Alat Olahraga di Sportify
        </h1>
        <p className="mt-4 text-center text-lg font-bold">
          Selamat datang di Sportify! Kami senang Anda memilih kami untuk
          kebutuhan olahraga Anda. Untuk memastikan pengalaman rental yang
          lancar dan menyenangkan, harap perhatikan persyaratan berikut:
        </p>
        <Accordion type="single" collapsible>
          {Object.entries(tnc).map(([section, items], index) => (
            <AccordionItem key={index} value={section}>
              <AccordionTrigger>
                <ol className="list-decimal">
                  <li className="list-disc">{section}</li>
                </ol>
              </AccordionTrigger>
              <AccordionContent>
                <ol className="list-disc pl-5">
                  {items.map((item, idx) => (
                    <li key={idx} className="list-decimal">
                      {item}
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="divider"></div>
      <div className="container">
        <About />
      </div>
    </>
  );
}
