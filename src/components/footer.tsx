'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Product',
    links: [
      { name: 'Overview', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help', href: '#' },
      { name: 'Sales', href: '#' },
      { name: 'Advertise', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Twitter', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  },
];

const isPathExcluded = (pathname: string, excludedPaths: string[]) => {
  return excludedPaths.some(path => {
    if (path.endsWith('/*')) {
      const prefix = path.slice(0, -2); // Remove /* from the end
      return pathname.startsWith(prefix);
    }
    return pathname === path;
  });
};

const Footer2 = () => {
  const pathname = usePathname();
  const excludedRoutes = [
    '/studio/*',
    '/events/*',
    '/blog/posts/*',
    '/admin/*',
    '/auth/*',
  ];

  if (isPathExcluded(pathname, excludedRoutes)) {
    return null;
  }

  return (
    <section className="pt-32 w-full flex flex-col items-center ">
      <footer className="w-full mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2 mb-8 lg:mb-0">
            <Image
              src="/fc-logo.png"
              alt="logo"
              width={500}
              height={238}
              className="mb-3 h-16 w-auto "
            />
            <p className="font-bold">Startups and stuff.</p>
          </div>
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="font-medium hover:text-primary">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <p>© 2025 Foundersclub. All rights reserved.</p>
          <ul className="flex gap-4">
            <li className="underline hover:text-primary">
              <Link href="#"> Terms and Conditions</Link>
            </li>
            <li className="underline hover:text-primary">
              <Link href="#"> Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Footer2;
