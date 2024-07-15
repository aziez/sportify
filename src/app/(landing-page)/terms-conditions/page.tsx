import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import tnc from '@/data/tnc.json';

export default async function Terms() {
  return (
    <div className="container my-12 space-y-4">
      <h1 className="text-center text-xl font-bold tracking-tighter sm:text-2xl md:text-2xl">
        Persyaratan Rental Alat Olahraga di Sportify{' '}
      </h1>
      <p className="mt-4 text-center text-lg font-bold">
        Selamat datang di Sportify! Kami senang Anda memilih kami untuk
        kebutuhan olahraga Anda. Untuk memastikan pengalaman rental yang lancar
        dan menyenangkan, harap perhatikan persyaratan berikut
      </p>
      <Accordion type="multiple" collapsable>
        {Object.entries(tnc).map(([section, items], index) => (
          <AccordionItem value={section}>
            <AccordionTrigger>
              <ol key={index} className="list-decimal">
                <li className="list-inside">{section} ?</li>
              </ol>
            </AccordionTrigger>
            {items.map((item, idx) => (
              <AccordionContent key={idx}>
                <ol>
                  <li className="list-disc">{item}</li>
                </ol>
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
