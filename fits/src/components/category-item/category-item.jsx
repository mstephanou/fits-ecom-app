import './category-item.styles.scss'


const CategoryItem = ({category}) => {
  const {imageUrl, title} = category;

return (<div className='category-container'>
          <div
            className='background-image'
            // custom style added directly into component - imageUrl is a string so needs backticks for string interpolation
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>)
}


export default CategoryItem;