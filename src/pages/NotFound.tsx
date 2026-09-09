import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';

export function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <section className="container-page flex min-h-screen flex-col items-center justify-center pt-32 pb-20 text-center">
        <span className="section-label">404</span>
        <h1 className="mt-4 text-display-lg text-gradient">Page Not Found</h1>
        <p className="mt-6 max-w-md text-ink-300">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn-primary mt-10">
          Back to Home
        </Link>
      </section>
    </>
  );
}
