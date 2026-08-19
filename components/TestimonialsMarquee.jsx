import React from 'react';

const reviews = [
  { text: "Excellent service! The technician came within 2 hours and fixed my Aquaguard RO. Very professional and explained everything clearly.", name: "Rahul Patil", loc: "Wakad, Pune", initial: "R" },
  { text: "Bohot badhiya service thi. RO ki motor aawaz kar rahi thi, inhone aake check kiya aur turant repair kar diya. Price bhi market se kam laga.", name: "Sneha Joshi", loc: "Baner, Pune", initial: "S" },
  { text: "AO Smith RO installation done perfectly. The team was on time, clean and professional. Very happy with the service.", name: "Amit Sharma", loc: "Hinjewadi, Pune", initial: "A" },
  { text: "Mere Kent RO ka TDS set nahi ho raha tha, inhone aake check kiya aur meter se dikhaya ki ab paani theek hai. Genuine log hain.", name: "Priya Deshmukh", loc: "Kothrud, Pune", initial: "P" },
  { text: "Filter change karwana tha, company walo ne 3 din ka time diya tha. Inko call kiya toh same day aakar change kar gaye. Great service.", name: "Vishal Singh", loc: "Kharadi, Pune", initial: "V" },
  { text: "Very polite technician. Purana RO repair karne mein zyada kharcha aa raha tha, toh unhone saaf bata diya. Honest advice.", name: "Neha Kulkarni", loc: "Viman Nagar, Pune", initial: "N" },
  { text: "Super fast service in Pimple Saudagar! Booked at 10 AM, fixed by 1 PM. Highly recommended for any RO repair.", name: "Rohit Chavan", loc: "Pimple Saudagar", initial: "R" },
  { text: "Pureit water purifier repairing done. Board me issue tha, bhaiya ne naya part laake next day fit kar diya. Ab mast chal raha hai.", name: "Meena Shinde", loc: "Hadapsar, Pune", initial: "M" },
  { text: "Acchi service hai. Pehle kisi aur ko bulaya tha usne thik se fix nahi kiya aur paani leak ho raha tha. Inhone aake turant theek kiya.", name: "Sandeep Pawar", loc: "Katraj, Pune", initial: "S" },
  { text: "Best RO service in Pune. No hidden charges. Jo phone pe bataya tha wahi charge kiya.", name: "Anjali Gupta", loc: "Aundh, Pune", initial: "A" },
  { text: "AMC ka rate bahut reasonable hai inka. Maine Livpure ke liye 1 year ka plan liya hai. Highly professional team.", name: "Rajesh Nair", loc: "Kalyani Nagar", initial: "R" },
  { text: "Technician was very experienced. He knew exactly what was wrong with my 5-year-old Aquaguard. Working like new now.", name: "Suresh Bhatia", loc: "Koregaon Park", initial: "S" },
  { text: "Very prompt response! Paani aana band ho gaya tha aur ghar me bacche hain. Maine request ki toh unhone priority pe aake repair kiya.", name: "Pooja Jadhav", loc: "Pimpri", initial: "P" },
  { text: "Parts genuine use karte hain aur bill bhi dete hain. Trusted service for sure.", name: "Mahesh Kadam", loc: "Chinchwad", initial: "M" },
  { text: "TDS setting and membrane change done. Paani ka taste ab bilkul bisleri jaisa ho gaya hai. Thanks to the team!", name: "Vikram Desai", loc: "Bavdhan, Pune", initial: "V" },
  { text: "Good guys. Came on Sunday morning and fixed the RO leaking issue quickly.", name: "Aarti Mahajan", loc: "Nigdi, Pune", initial: "A" }
];

export default function TestimonialsMarquee() {
  return (
    <div className="testimonials-marquee-container">
      <div className="testimonials-marquee-track">
        {reviews.map((rev, i) => (
          <article key={i} className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"{rev.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{rev.initial}</div>
              <div>
                <div className="testimonial-name">{rev.name}</div>
                <div className="testimonial-location">{rev.loc}</div>
              </div>
            </div>
          </article>
        ))}
        {/* Duplicated for seamless infinite scrolling */}
        {reviews.map((rev, i) => (
          <article key={`dup-${i}`} className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"{rev.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{rev.initial}</div>
              <div>
                <div className="testimonial-name">{rev.name}</div>
                <div className="testimonial-location">{rev.loc}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
