import React, { Component } from 'react';
import * as api from '../services/api';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.getCategoriesFromApi();
  }

  getCategoriesFromApi = async () => {
    api.getCategories().then((categories) => this.setState({ category: categories }));
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
              data-testid="category"
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