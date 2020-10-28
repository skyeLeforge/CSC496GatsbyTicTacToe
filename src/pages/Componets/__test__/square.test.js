import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"

import Square from "../board.js"

//test the square function
describe("Square", () =>
  it("renders correctly", () => {
    const tree = renderer.create(<Square />).toJSON()
    expect(tree).toMatchSnapshot()
  })
)