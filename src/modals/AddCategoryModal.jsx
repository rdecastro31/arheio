import { FiX } from 'react-icons/fi'

export default function AddCategoryModal({
  show,
  isEditing,
  formData,
  onChange,
  onSubmit,
  onClose
}) {
  if (!show) return null

  return (
    <div className="modal-overlay">
      <div className="category-modal">
        <div className="modal-header">
          <div>
            <h2>{isEditing ? 'Update Category' : 'Add New Category'}</h2>
            <p>
              {isEditing
                ? 'Modify the selected category details.'
                : 'Create a new document category.'}
            </p>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <form onSubmit={onSubmit} className="category-form">
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              name="category_name"
              placeholder="Enter category name"
              value={formData.category_name || ""}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
           <textarea
              name="description"
              placeholder="Enter description"
              value={formData.description || ""}
              onChange={onChange}
              rows="3"
            />
          </div>

        

          <div className="modal-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="primary-btn">
              {isEditing ? 'Save Changes' : 'Save Category'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}