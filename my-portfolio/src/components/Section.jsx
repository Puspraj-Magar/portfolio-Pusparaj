import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section id={id} ref={ref} className={`py-16 md:py-24 ${className}`}>
      <div className={`container-custom section-fade ${isInView ? 'visible' : ''}`}>
        {title && (
          <div className="mb-12 md:mb-16">
            <span className="badge mb-3">{id}</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && <p className="mt-3 text-white/40 max-w-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}