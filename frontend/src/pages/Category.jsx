import { useParams, Link } from 'react-router-dom'
import { findCategory } from '../data/categories.js'
import { findSubitemsByCategory } from '../data/subitems.js'
import { getText } from '../i18n/index.js'

export default function Category({ lang }) {
  const { slug } = useParams()
  const category = findCategory(slug)
  const items = findSubitemsByCategory(slug)
  const t = getText(lang).category

  // 网址里的类别不存在时，给一个友好的提示而不是白屏
  if (!category) {
    return (
      <section className="panel">
        <h2 className="panel-title">{t.notFound}</h2>
        <p className="panel-text">
          <code>{slug}</code>
        </p>
        <Link className="back-link" to="/">
          {t.backHome}
        </Link>
      </section>
    )
  }

  return (
    <section className="panel panel-wide">
      {/* 该大类的名称与"形式与意义"描述 */}
      <h2 className="detail-title">{category.name[lang]}</h2>
      <p className="category-desc">{category.description[lang]}</p>

      {/* 细分项列表：有内容的进小类页，没内容的进「内容建设中」 */}
      <h3 className="section-heading">
        <span className="heading-rule" aria-hidden="true" />
        {t.topics}
      </h3>
      <ul className="subitem-grid">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              className={`subitem${item.hasContent ? '' : ' subitem-empty'}`}
              to={
                item.hasContent
                  ? `/festival/${item.slug}`
                  : `/coming-soon/${item.slug}`
              }
            >
              <span>{item.name[lang]}</span>
              {!item.hasContent && (
                <span className="subitem-badge">{t.comingSoon}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <Link className="back-link" to="/">
        {t.backHome}
      </Link>
    </section>
  )
}
