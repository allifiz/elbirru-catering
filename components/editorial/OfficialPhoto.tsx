'use client';

import { useState } from 'react';
import { photoUrl, stockUrl, type Photo } from '../../data/catalog';

export default function OfficialPhoto({
  photo,
  alt,
  priority = false,
}: {
  photo: Photo;
  alt: string;
  priority?: boolean;
}) {
  const [stage, setStage] = useState(0);
  const sources = [photoUrl(photo), stockUrl(photo), '/images/unavailable.svg'];

  return (
    <img
      src={sources[stage]}
      alt={stage === 2 ? 'Foto resmi belum tersedia' : alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setStage((value) => Math.min(value + 1, 2))}
    />
  );
}
