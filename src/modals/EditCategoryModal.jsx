export default function EditCategoryModal({
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
          <h2>Edit Category</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <form onSubmit={onUpdate}>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              value={formData.category_name || ""}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  category_name: e.target.value,
                }))
              }
              placeholder="Enter category name"
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
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}