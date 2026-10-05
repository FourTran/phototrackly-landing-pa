import type { Metadata } from 'next';
import Link from 'next/link';
import InformationPage from '@/components/marketing/information-page';
export const metadata: Metadata = { title: 'Contact PhotoTrackly and share workflow feedback', description: 'Register interest in PhotoTrackly or send a property media workflow question, editorial correction or early-access enquiry through our registration form.', alternates: { canonical: '/contact' } };
export default function ContactPage() {
  return <InformationPage title="Tell us where your workflow gets stuck." intro="We welcome feedback from real estate photography and property media teams, especially in the United States and Australia.">
    <section className="in-section"><h2>Early access and workflow feedback</h2><p>Use the registration form below with your work email and company. The optional “What slows your team down today?” field can include a workflow question or a correction to one of our articles. For a correction, include the article title and the section you want us to review.</p><p>Please do not include passwords, private client details or confidential property information. We will use your details to contact you about PhotoTrackly and early access; see our <Link href="/privacy">privacy notice</Link>.</p></section>
    <section className="in-section"><h2>What happens next</h2><p>A successful submission confirms that your interest is registered. PhotoTrackly is still in development. This does not create a software account, guarantee immediate access or book a demonstration of a finished product. No payment or mandatory meeting is required.</p></section>
  </InformationPage>;
}
