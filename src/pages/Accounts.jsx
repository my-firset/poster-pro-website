import React, { useState, useEffect } from 'react';
import { Plus, Trash2, LogIn } from 'lucide-react';
import '../styles/Accounts.css';

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'personal',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading accounts
    setTimeout(() => {
      setAccounts([
        {
          id: 1,
          name: 'حسابي الشخصي',
          email: 'user@example.com',
          type: 'personal',
          isLoggedIn: true,
        },
      ]);
    }, 500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddAccount = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.name || !formData.email) {
        alert('يرجى ملء جميع الحقول');
        setLoading(false);
        return;
      }

      // Simulate API call
      setTimeout(() => {
        const newAccount = {
          id: accounts.length + 1,
          ...formData,
          isLoggedIn: true,
        };
        setAccounts([...accounts, newAccount]);
        setFormData({ name: '', email: '', type: 'personal' });
        setShowForm(false);
        setLoading(false);
      }, 1000);
    } catch (error) {
      alert('حدث خطأ أثناء إضافة الحساب');
      setLoading(false);
    }
  };

  const handleDeleteAccount = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الحساب؟')) {
      setAccounts(accounts.filter(acc => acc.id !== id));
    }
  };

  return (
    <div className="accounts">
      <div className="accounts-header">
        <h1>إدارة الحسابات</h1>
        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={20} />
          إضافة حساب جديد
        </button>
      </div>

      {/* Add Account Form */}
      {showForm && (
        <div className="add-account-form">
          <h2>إضافة حساب جديد</h2>
          <form onSubmit={handleAddAccount}>
            <div className="form-group">
              <label>اسم الحساب</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="مثال: حسابي الشخصي"
              />
            </div>

            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>نوع الحساب</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="personal">حساب شخصي</option>
                <option value="page">صفحة</option>
                <option value="group">مجموعة</option>
              </select>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'جاري الإضافة...' : 'إضافة الحساب'}
            </button>
          </form>
        </div>
      )}

      {/* Accounts List */}
      <div className="accounts-list">
        {accounts.length === 0 ? (
          <div className="empty-state">
            <LogIn size={48} />
            <p>لم تقم بإضافة أي حساب بعد</p>
          </div>
        ) : (
          accounts.map((account) => (
            <div key={account.id} className="account-card">
              <div className="account-info">
                <h3>{account.name}</h3>
                <p className="account-email">{account.email}</p>
                <p className="account-type">
                  {account.type === 'personal' ? 'حساب شخصي' : account.type === 'page' ? 'صفحة' : 'مجموعة'}
                </p>
              </div>
              <div className="account-status">
                <span className={`status-badge ${account.isLoggedIn ? 'online' : 'offline'}`}>
                  {account.isLoggedIn ? '✓ متصل' : '✗ غير متصل'}
                </span>
              </div>
              <button
                className="delete-button"
                onClick={() => handleDeleteAccount(account.id)}
                title="حذف الحساب"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Accounts;
