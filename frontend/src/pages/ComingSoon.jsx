import { useParams, Link } from 'react-router-dom'
import { findSubitem } from '../data/subitems.js'
import { getText } from '../i18n/index.js'

// 「内容建设中」占位页：其余八类的细分项点进来会看到这个页面
export default function ComingSoon({ lang }) {
  const { slug } = useParams()
  const subitem = findSubitem(slug)
  const t = getText(lang).comingSoon

  return (
    <section className="panel coming-soon">
      <h2 className="panel-title">{t.title}</h2>

      {/* 显示条目名称（找不到就退回显示标识） */}
      <p className="coming-soon-item">
        <span className="coming-soon-label">{t.currentItem}</span>
        <span className="coming-soon-name">{subitem ? subitem.name[lang] : slug}</span>
      </p>

      <p className="panel-note">{t.note}</p>

      <Link className="back-link" to="/">
        {t.back}
      </Link>
    </section>
  )
}
