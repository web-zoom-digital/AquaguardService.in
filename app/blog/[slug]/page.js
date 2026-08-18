import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../blogData';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: 'Post Not Found | AquaguardService' };
  
  return {
    title: `${post.title} | AquaguardService Blog`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="blog-post" style={{ padding: '120px 20px 60px', background: 'var(--bg-section-alt)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', marginBottom: '32px' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="blog-header" style={{ marginBottom: '40px' }}>
            <div style={{ display: 'inline-block', background: 'var(--accent)', color: 'var(--white)', padding: '6px 16px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
              {post.category}
            </div>
            
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-dark)', lineHeight: '1.2', marginBottom: '24px' }}>
              {post.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={16} /> {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} /> {post.readTime}
              </span>
            </div>
          </div>

        </div>
        
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto 60px' }}>
          <div style={{ position: 'relative', width: '100%', height: 'clamp(300px, 50vw, 500px)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div 
            className="blog-content" 
            style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </article>

      <ContactForm />
    </main>
  );
}
