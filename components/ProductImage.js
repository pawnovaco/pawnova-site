"use client";

import { useState } from "react";

export default function ProductImage({ src, alt, loading = "lazy", className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`product-image-placeholder ${className}`.trim()} role="img" aria-label={`${alt} image unavailable`}>
        <span>Paw Nova</span>
        <small>Product image unavailable</small>
      </div>
    );
  }

  return <img src={src} alt={alt} loading={loading} className={className} onError={() => setFailed(true)} />;
}
