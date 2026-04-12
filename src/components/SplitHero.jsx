import { Link } from 'react-router-dom';

function HeroMedia({ image }) {
  if (!image) {
    return null;
  }

  const {
    defaultSrc,
    srcSet,
    webpSrcSet,
    avifSrcSet,
    sizes,
    alt,
    width = 960,
    height = 600,
    objectPosition,
  } = image;

  const resolvedSrcSet = srcSet || webpSrcSet;
  const imageStyle = objectPosition ? { objectPosition } : undefined;

  return (
    <div className="hero-visual">
      <div className="hero-media">
        {avifSrcSet || webpSrcSet ? (
          <picture>
            {avifSrcSet ? <source srcSet={avifSrcSet} sizes={sizes} type="image/avif" /> : null}
            {webpSrcSet ? <source srcSet={webpSrcSet} sizes={sizes} type="image/webp" /> : null}
            <img
              src={defaultSrc}
              srcSet={resolvedSrcSet}
              sizes={sizes}
              alt={alt}
              className="hero-bg-img"
              style={imageStyle}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={width}
              height={height}
            />
          </picture>
        ) : (
          <img
            src={defaultSrc}
            srcSet={resolvedSrcSet}
            sizes={sizes}
            alt={alt}
            className="hero-bg-img"
            style={imageStyle}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={width}
            height={height}
          />
        )}
        <div className="hero-media-overlay" />
      </div>
    </div>
  );
}

export default function SplitHero({
  eyebrow,
  title,
  text,
  actions = [],
  highlights = [],
  highlightsClassName = 'page-hero-highlights',
  image,
}) {
  return (
    <section className="hero hero-split">
      <div className="container hero-shell">
        <div className="hero-split-grid">
          <div className="hero-copy">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1 className="hero-title">{title}</h1>
            {text ? <p className="hero-lead">{text}</p> : null}

            {actions.length ? (
              <div className="action-row hero-actions">
                {actions.map((action, index) => {
                  const isSoft = action.variant === 'soft';
                  const actionClasses = ['btn', isSoft ? 'btn-soft' : 'btn-primary'];

                  if (!isSoft && index === 0) {
                    actionClasses.push('hero-primary-cta');
                  }

                  return (
                    <Link key={`${action.to}-${action.label}`} to={action.to} className={actionClasses.join(' ')}>
                      {action.label}
                    </Link>
                  );
                })}
              </div>
            ) : null}

            {highlights.length ? (
              <div className={highlightsClassName}>
                {highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
          </div>

          <HeroMedia image={image} />
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}