// components/EditDepartmentModal.jsx

export default function EditDepartmentModal({
  show,
  formData,
  setFormData,
  onClose,
  onUpdate,
}) {
  if (!show) return null

  return (
    <div className="modal-backdrop">
      <div className="category-modal">
        <div className="modal-header">
          <h2>Edit Department</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={onUpdate} className="category-form">
          <div className="form-group">
            <label>Department Name</label>
            <input
              type="text"
              value={formData.department_name || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  department_name: e.target.value,
                }))
              }
              placeholder="Enter department name"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Enter description"
              rows="3"
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              value={formData.status || "Active"}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  status: e.target.value,
                }))
              }
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="primary-btn">
              Update Department
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}