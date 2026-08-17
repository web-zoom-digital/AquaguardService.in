import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import FaqSection from '@/components/FaqSection';
import { Mail } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Book RO Service in Pune | AquaguardService',
  description: 'Book RO water purifier service in Pune. Call 07030370076 or WhatsApp us. Same-day service available. We cover Wakad, Baner, Hinjewadi, Kharadi and 35+ areas.',
};

const faqs = [
  { q: 'How quickly can you send a technician?', a: 'For same-day bookings, we typically arrive within 2–4 hours. For scheduled appointments, we\'ll confirm an exact time slot convenient for you.' },
  { q: 'What information do I need when I call?', a: 'Just tell us your name, area/locality in Pune, your RO brand and model (if known), and the issue you\'re facing. That\'s it!' },
  { q: 'Do you charge for a diagnostic visit?', a: 'Our technician inspection/diagnostic visit is free of charge. We provide a transparent cost estimate before any work begins.' },
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
