import React, { useState, useEffect } from 'react';
import { BarChart3, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import '../styles/Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    successPosts: 0,
    failedPosts: 0,
    pendingPosts: 0,
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setStats({
        totalPosts: 42,
        successPosts: 38,
        failedPosts: 2,
        pendingPosts: 2,
      });
      setPosts([
        {
          id: 1,
          title: 'منشور تجريبي 1',
          content: 'هذا منشور تجريبي',
          status: 'success',
          timestamp: new Date().toLocaleString('ar-SA'),
        },
        {
          id: 2,
          title: 'منشور تجريبي 2',
          content: 'منشور آخر',
          status: 'pending',
          timestamp: new Date().toLocaleString('ar-SA'),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="dashboard"><p>جاري التحميل...</p></div>;
  }

  return (
    <div className="dashboard">
      <h1>لوحة التحكم</h1>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <BarChart3 className="stat-icon" />
          <div className="stat-content">
            <h3>إجمالي المنشورات</h3>
            <p className="stat-number">{stats.totalPosts}</p>
          </div>
        </div>

        <div className="stat-card success">
          <CheckCircle className="stat-icon" />
          <div className="stat-content">
            <h3>الناجحة</h3>
            <p className="stat-number">{stats.successPosts}</p>
          </div>
        </div>

        <div className="stat-card failed">
          <AlertCircle className="stat-icon" />
          <div className="stat-content">
            <h3>الفاشلة</h3>
            <p className="stat-number">{stats.failedPosts}</p>
          </div>
        </div>

        <div className="stat-card pending">
          <Clock className="stat-icon" />
          <div className="stat-content">
            <h3>قيد الانتظار</h3>
            <p className="stat-number">{stats.pendingPosts}</p>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="posts-section">
        <h2>سجل المنشورات</h2>
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className={`post-card ${post.status}`}>
              <div className="post-header">
                <h3>{post.title}</h3>
                <span className={`status-badge ${post.status}`}>
                  {post.status === 'success' ? 'نجح' : 'قيد الانتظار'}
                </span>
              </div>
              <p className="post-content">{post.content}</p>
              <p className="post-timestamp">{post.timestamp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
