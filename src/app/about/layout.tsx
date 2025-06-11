import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Ilahiya College | Legacy of Excellence in Education',
  description: 'Learn about Ilahiya College\'s journey of educational excellence since 2005. Discover our mission, vision, facilities, and commitment to academic excellence in Kerala.',
  keywords: 'Ilahiya College, education Kerala, arts and science college, Koyilandy, higher education',
  openGraph: {
    title: 'About Ilahiya College | Legacy of Excellence in Education',
    description: 'Discover Ilahiya College\'s journey of educational excellence, our mission, vision, and world-class facilities.',
    images: ['/images/ilahiya-college.jpg'],
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 