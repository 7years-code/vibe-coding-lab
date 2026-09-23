import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { getText } from '../i18n/index.js'

export default function Home({ lang }) {
  const t = getText(lang).home
  // 按 sortOrder 排好顺序的九大类
  const list = [...categories].sort((a, b) => a.sortOrder - b.sortOrder)

  return (
    <div className="home">
      {/* 首屏：占满一屏的欢迎词 */}
      <header className="hero">
        <div className="hero-frame">
          <h1 className="site-name">{t.siteName}</h1>
          <span className="hero-rule" aria-hidden="true" />
          <p className="tagline">{t.tagline}</p>
          <p className="welcome">{t.welcome}</p>
        </div>
        <p className="scroll-hint">{t.scrollHint}</p>
      </header>

      {/* 九大类卡片：滚动到视口内时依次滑出 */}
      <section className="categories">
        {list.map((category, index) => (
          <CategoryCard
            key={category.slug}
            category={category}
            index={index}
            lang={lang}
            learnMore={t.learnMore}
          />
        ))}
      </section>
    </div>
  )
}

/**
 * 单张类别卡片
 * - 用 IntersectionObserver 监听"是否滚进视口"，进入后加上 .is-visible 触发滑出动画
 * - transitionDelay 按位置错开，形成"依次滑出"的效果
 */
function CategoryCard({ category, index, lang, learnMore }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 兜底：极老的浏览器没有 IntersectionObserver，直接显示
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target) // 出现一次即可，不用反复触发
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`category-card${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 130}ms` }}
    >
      {/* 代表图位置：图片素材尚未准备，先用古风底纹 + 类别名占位 */}
      <div className="card-image" aria-hidden="true">
        <span className="card-image-text">{category.name.zh}</span>
      </div>

      <div className="card-body">
        <h2 className="card-title">{category.name[lang]}</h2>
        <p className="card-desc">{category.description[lang]}</p>
        <Link className="learn-more" to={`/category/${category.slug}`}>
          {learnMore}
        </Link>
      </div>
    </article>
  )
}
