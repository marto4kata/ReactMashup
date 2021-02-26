import React, {useState} from "react";
import Calendar from "react-calendar";

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="3">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        <td>{product.made}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const { filterText, inStockOnly, range } = this.props;
    const [startDate, endDate] = range;
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      const made = new Date(product.made);

      if (inStockOnly && !product.stocked) {
        return;
      }
      if (made >= startDate && made <= endDate) {
        return;
      }
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}/>
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
        <tr>
          <th key="name">Name</th>
          <th key="price">Price</th>
          <th key="date made">Date made</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showRange: false,
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.handleClearDateFilter = this.handleClearDateFilter.bind(this)
    this.handleRangeChange = this.handleRangeChange.bind(this)
  }

  handleRangeChange(range) {
    this.props.onRangeChange(range)
    this.setState( {
      showRange: true,
    })
  }

  handleCalendarClick() {
    this.setState({
      open: !this.state.open
    })
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  handleClearDateFilter() {
    this.props.onRangeChange([new Date(), new Date()])
    this.setState({
      showRange: false,
    })
  }

  render() {
    const [startDate, endDate] = this.props.range;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <button type="button" onClick={this.handleCalendarClick}>
          Calendar
        </button>
        {this.state.open && <Calendar
          selectRange={true}
          onChange={this.handleRangeChange}
          value={this.props.range}
        />}
        <button type="button" onClick={this.handleClearDateFilter}>
          Clear Date Filter
        </button>
        {this.state.showRange && <div>
          <div>
            Start date: {startDate.toLocaleDateString()}
          </div>
          <div>
            End date: {endDate.toLocaleDateString()}
          </div>
        </div>}
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </label>
        </div>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
      range: [new Date(), new Date()],
      show: false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    this.setState( {
      show: !this.state.show
    })
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  handleRangeChange(range) {
    this.setState({
      range
    })
  }

  render() {
    return (
      <div id='store' className="d-flex justify-content-center">
        <div id='table'>
          <SearchBar
            onRangeChange={this.handleRangeChange}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
            range={this.state.range}
          />
          <ProductTable
            range={this.state.range}
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      </div>
    );
  }
}


export default FilterableProductTable
