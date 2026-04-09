import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Users, BarChart3 } from 'lucide-react';
import '../styles/Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!email || !password) {
        setError('يرجى ملء جميع الحقول');
        return;
      }
      
      // Simulate login
      setTimeout(() => {
        alert('تم تسجيل الدخول بنجاح!');
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError('حدث خطأ أثناء تسجيل الدخول');
      setIsLoading(false);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Poster Pro - ناشر برو</h1>
          <p>النشر التلقائي على مجموعات Facebook بكل سهولة</p>
          <button className="cta-button">
            ابدأ الآن <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>المميزات الرئيسية</h2>
        <div className="features-grid">
          <div className="feature-card">
            <Zap className="feature-icon" />
            <h3>نشر سريع</h3>
            <p>انشر على مئات المجموعات في دقائق</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>إدارة حسابات</h3>
            <p>أدر عدة حسابات Facebook من مكان واحد</p>
          </div>
          <div className="feature-card">
            <BarChart3 className="feature-icon" />
            <h3>إحصائيات</h3>
            <p>تابع أداء منشوراتك بالتفصيل</p>
          </div>
          <div className="feature-card">
            <CheckCircle className="feature-icon" />
            <h3>جدولة</h3>
            <p>جدول منشوراتك مسبقاً</p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="login-section">
        <div className="login-container">
          <h2>تسجيل الدخول</h2>
          <form onSubmit={handleLogin}>
            {error && <div className="error-message">{error}</div>}
            
            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني"
              />
            </div>

            <div className="form-group">
              <label>كلمة المرور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
              />
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'جاري التحميل...' : 'دخول'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
