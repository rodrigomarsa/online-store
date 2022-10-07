import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      category: null,
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  getCategoriesFromApi = async () => {
    const categories = await getCategories();
    this.setState({ category: categories });
  };

  render() {
    const { category } = this.state;

    return (
      <section>
        { category.map((item, index) => (
          <label
            key={ index }
            htmlFor="categories-button"
          >
            <button
              id={ item.id }
              type="button"
              data-testid={ item.name }
            >
              {item.name}
            </button>
          </label>

        )) }
      </section>
    );
  }
}

export default Sidebar;
