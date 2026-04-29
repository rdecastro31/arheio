export default function EditTypesModal({
  show,
  formData,
  setFormData,
  classifications = [],
  onClose,
  onUpdate,
}) {
  if (!show) return null

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: name === "short_name" ? value.toUpperCase() : value,
    }))
  }

  return (
    <div className="modal-backdrop">
      <div className="category-modal wide-modal">
        <div className="modal-header">
          <h2>Edit Document Type</h2>

          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={onUpdate} className="category-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Type Name *</label>
              <input
                type="text"
                name="type_name"
                value={formData.type_name || ""}
                onChange={handleChange}
                placeholder="e.g. Purchase Request"
              />
            </div>

            <div className="form-group">
              <label>Short Name *</label>
              <input
                type="text"
                name="short_name"
                value={formData.short_name || ""}
                onChange={handleChange}
                placeholder="e.g. PR"
              />
            </div>

            <div className="form-group">
              <label>Classification *</label>
              <select
                name="classification_id"
                value={formData.classification_id || ""}
                onChange={handleChange}
              >
                <option value="">Select classification</option>
                {classifications.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.classification_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Retention Period *</label>
              <input
                type="number"
                name="retention_period"
                value={formData.retention_period || ""}
                onChange={handleChange}
                placeholder="e.g. 3"
                min="1"
              />
            </div>

            <div className="form-group">
              <label>Retention Unit *</label>
              <select
                name="retention_unit"
                value={formData.retention_unit || ""}
                onChange={handleChange}
              >
                <option value="">Select unit</option>
                <option value="Day">Day</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
                <option value="day">day</option>
                <option value="month">month</option>
                <option value="year">year</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status *</label>
              <select
                name="status"
                value={formData.status || "Active"}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              placeholder="Enter description..."
              rows="3"
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="primary-btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}