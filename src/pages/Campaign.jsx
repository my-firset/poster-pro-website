import React, { useState } from 'react';
import { Send, Link as LinkIcon, MessageCircle } from 'lucide-react';
import '../styles/Campaign.css';

function Campaign() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    comment: '',
    link: '',
    includeComment: false,
    includeLink: false,
    scheduledDate: '',
    scheduledTime: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');

    try {
      // Validate required fields
      if (!formData.title || !formData.content) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        setIsSubmitting(false);
        return;
      }

      // Simulate API call
      setTimeout(() => {
        setSuccessMessage('تم إنشاء الحملة بنجاح! ✓');
        setFormData({
          title: '',
          content: '',
          comment: '',
          link: '',
          includeComment: false,
          includeLink: false,
          scheduledDate: '',
          scheduledTime: '',
        });
        setIsSubmitting(false);

        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      }, 1000);
    } catch (error) {
      alert('حدث خطأ أثناء إنشاء الحملة');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="campaign">
      <h1>إنشاء حملة جديدة</h1>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="campaign-form">
        {/* Title Field */}
        <div className="form-group">
          <label>عنوان الحملة *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="أدخل عنوان الحملة"
            required
          />
        </div>

        {/* Content Field */}
        <div className="form-group">
          <label>محتوى المنشور *</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="أدخل محتوى المنشور"
            rows="5"
            required
          />
        </div>

        {/* Comment Option */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="includeComment"
              checked={formData.includeComment}
              onChange={handleChange}
            />
            <MessageCircle size={18} />
            إضافة تعليق
          </label>
        </div>

        {formData.includeComment && (
          <div className="form-group">
            <label>نص التعليق</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="أدخل نص التعليق"
              rows="3"
            />
          </div>
        )}

        {/* Link Option */}
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="includeLink"
              checked={formData.includeLink}
              onChange={handleChange}
            />
            <LinkIcon size={18} />
            مشاركة رابط
          </label>
        </div>

        {formData.includeLink && (
          <div className="form-group">
            <label>الرابط</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>
        )}

        {/* Schedule Section */}
        <div className="schedule-section">
          <h3>جدولة النشر</h3>
          <div className="schedule-grid">
            <div className="form-group">
              <label>التاريخ</label>
              <input
                type="date"
                name="scheduledDate"
                value={formData.scheduledDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>الوقت</label>
              <input
                type="time"
                name="scheduledTime"
                value={formData.scheduledTime}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          <Send size={20} />
          {isSubmitting ? 'جاري الإرسال...' : 'إنشاء الحملة'}
        </button>
      </form>
    </div>
  );
}

export default Campaign;
