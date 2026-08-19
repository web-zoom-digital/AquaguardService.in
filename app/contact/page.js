import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FaqSection from '@/components/FaqSection';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Book RO Service in Pune | AquaguardService',
  description: 'Book RO water purifier service in Pune. Call 07030370076 or WhatsApp us. Same-day service available. We cover Wakad, Baner, Hinjewadi, Kharadi and 35+ areas.',
};

const faqs = [
  { q: 'Call karne ke baad aapka technician ghar kitni der me aata hai?', a: 'Agar aap subah book karte hain toh normally hum 2-3 ghante me aa jate hain. Same-day service ki guarantee tabhi hoti hai jab booking dopahar 2 baje se pehle ho jaye.' },
  { q: 'Shop pe RO laana padega ya aap ghar aake theek karenge?', a: 'Nahi bhaiya, aapko machine leke kahin jaane ki zaroorat nahi hai. Hum 100% door-step service dete hain. Pura repair aapke ghar me, aapke samne hi hoga.' },
  { q: 'Pune me kaun-kaun se areas me service dete hain aap?', a: 'Hum Pimpri-Chinchwad (PCMC) aur Pune city dono cover karte hain. Wakad, Hinjewadi, Baner, Kothrud, Kharadi, Hadapsar, Viman Nagar - sabhi jagah humari teams active hain.' },
  { q: 'Service ke time agar parts change kiye toh kya warranty milegi?', a: 'Bilkul! Jo bhi electrical part ya RO membrane hum badalte hain, us par company ki proper warranty milti hai. Bill me sab details likhi hoti hain.' },
  { q: 'Sunday ko bhi RO mechanic mil jayega kya?', a: 'Haan ji, hum Sunday ko bhi open rehte hain. Sunday ko demand zyada hoti hai isliye aap Saturday raat ko ya Sunday subah jaldi appointment book kar lein.' },
  { q: 'Payment kaise karni hoti hai? Google Pay chalega?', a: 'Haan, aap technician ko directly Google Pay, PhonePe, Paytm ya cash de sakte hain. Payment hamesha service puri hone aur machine check karne ke baad hi karni hai.' },
  { q: 'Booking karne ke liye kya details deni hoti hain?', a: 'Bas aapka naam, address (flat no. aur society name), RO ka brand aur exact problem (jaise paani leak ho raha hai ya machine on nahi ho rahi). Baaki hum dekh lenge.' },
  { q: 'Kya aap visiting aur checking ka charge alag se lete ho?', a: 'Visiting charge sirf Rs. 150-200 hota hai. Par agar aap humse part repair ya filter change karwa lete hain, toh yeh visiting charge bill me se maaf (free) kar diya jata hai.' },
  { q: 'Complaint register karne ke liye direct call karun ya WhatsApp?', a: 'Dono available hain! Agar aapko jaldi service chahiye toh direct call kar lijiye (07030370076). WhatsApp par aap machine ki photo bhi bhej sakte hain.' },
  { q: 'Agar technician aane me let ho gaya toh kisse baat karni hai?', a: 'Aap humare isi customer care number par wapas call karke booking status pooch sakte hain. Waise humara system aapko technician ki ETA pehle hi SMS/WhatsApp kar deta hai.' },
  { q: 'Machine theek hone ke baad aage maintenance kaise yaad rahega?', a: 'Hume pata hai aaj kal time nahi milta. Isliye humara system aapko next service (6 months ya 1 year baad) se pehle khud hi reminder message bhej deta hai.' }
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        tag="Contact Us"
        title="Book RO Service in Pune"
        subtitle="Need RO water purifier repair, service or installation in Pune? Fill in the form, call or WhatsApp us. We respond quickly — available 7 days, 8 AM to 11:30 PM."
        image="/images/hero-contact.jpg"
        imageAlt="AquaguardService RO service center Pune"
        breadcrumbLabel="Contact Us"
      />
      <ContactForm />
      <FaqSection faqs={faqs} heading="Common Questions Before Booking" />
    </main>
  );
}
