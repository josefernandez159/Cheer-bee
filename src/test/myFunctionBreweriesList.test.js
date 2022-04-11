import { render, screen } from "@testing-library/react";

import Breweries from '../Main/BreweriesList'

describe('BreweriesList component', () =>{
  test('test class', () => {
    render(<Breweries/>)

    const Title = screen.getByText('a');

    expect(Title).not.toHaveClass("tag")
  })
})