import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Detail from './pages/Detail.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import { getText } from './i18n/index.js'

export default function App() {
  // lang：当前语言，'zh' 或 'en'；放在最外层，切换页面时不会被重置
  const [lang, setLang] = useState('zh')
  const t = getText(lang)
  const toggleLang = () => setLang(lang === 'zh' ? 'en' : 'zh')

  // 语言变化时，同步更新 <html lang> 与网页标题
  // （对屏幕阅读器和浏览器标签页都有好处）
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.documentTitle
  }, [t])

  return (
    // BrowserRouter：使用干净网址（如 /category/festivals）
    <BrowserRouter>
      <div className="page">
        {/* 右上角语言切换按钮（全站共用） */}
        <button className="lang-switch" onClick={toggleLang}>
          {t.switchLabel}
        </button>

        {/* 路由表：网址 → 页面组件 */}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/category/:slug" element={<Category lang={lang} />} />
          <Route path="/festival/:slug" element={<Detail lang={lang} />} />
          <Route path="/coming-soon/:slug" element={<ComingSoon lang={lang} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
