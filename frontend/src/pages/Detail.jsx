import { useParams, Link } from 'react-router-dom'
import { findSubitem } from '../data/subitems.js'
import { findCategory } from '../data/categories.js'
import { findFestivalDetail } from '../data/festivals.js'
import { getText } from '../i18n/index.js'

export default function Detail({ lang }) {
  const { slug } = useParams()
  const subitem = findSubitem(slug)
  const detail = findFestivalDetail(slug)
  const t = getText(lang).detail

  // 条目不存在
  if (!subitem) {
    return (
      <section className="panel">
        <h2 className="panel-title">{t.notFound}</h2>
        <p className="panel-text">
          <code>{slug}</code>
        </p>
        <Link className="back-link" to="/">
          {t.back}
        </Link>
      </section>
    )
  }

  // 回到所属大类页
  const parent = findCategory(subitem.categorySlug)
  const backTo = parent ? `/category/${parent.slug}` : '/'

  const hasSections = detail && detail.sections.length > 0

  return (
    <section className="panel panel-wide">
      {/* 标题：节日名称 + 所属大类 */}
      <h2 className="detail-title">{subitem.name[lang]}</h2>
      <p className="detail-sub">{parent ? parent.name[lang] : ''}</p>

      {hasSections ? (
        <>
          {/* 逐条渲染内容板块（由来 / 故事 / 习俗……） */}
          {detail.sections.map((section) => (
            <article key={section.key} className="section-block">
              <h3 className="section-title">{section.title[lang]}</h3>
              <p className="section-body">{section.body[lang]}</p>
            </article>
          ))}

          {/* 主题照片：图片素材尚未准备 */}
          <article className="section-block">
            <h3 className="section-title">{t.photos}</h3>
            {detail.photos && detail.photos.length > 0 ? (
              <div className="photo-grid">
                {detail.photos.map((p) => (
                  <img key={p.url} src={p.url} alt={p.caption?.[lang] || ''} />
                ))}
              </div>
            ) : (
              <p className="section-body photo-pending">{t.photosPending}</p>
            )}
          </article>
        </>
      ) : (
        // 其余 7 个节日：内容尚未补齐
        <article className="section-block">
          <h3 className="section-title">{t.pendingTitle}</h3>
          <p className="section-body">{t.pendingNote}</p>
        </article>
      )}

      <Link className="back-link" to={backTo}>
        {t.back}
      </Link>
    </section>
  )
}
