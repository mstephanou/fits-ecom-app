import CategoryItem from '../category-item/category-item';
import './directory.styles.scss'

const Directory = ({categories}) => {
  return (
    // container holding all the categories
    // container for a single category
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory;